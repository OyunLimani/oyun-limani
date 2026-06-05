import { NextRequest, NextResponse } from "next/server";
import { upsertGame, getExistingGameDistIds } from "@/lib/firebase/games";
import { slugify } from "@/lib/utils";

/**
 * GameDistribution API'sinden oyunları çekip Firestore'a kaydeder.
 *
 * Kullanım:
 *   GET /api/sync              → İlk 50 oyunu çeker
 *   GET /api/sync?amount=500   → 500 oyun çeker
 */

// GameDistribution API'sinden gelen gerçek yanıt yapısı
interface GDGame {
  Title: string;
  Md5: string;
  Description: string;
  Instructions: string;
  Url: string;
  Category: string[];
  Tag: string[];
  Asset: string[];
  Type: string;
  SubType: string;
  Mobile: string;
}

// Kategori eşleştirme tablosu
const CATEGORY_MAP: Record<string, { name: string; slug: string }> = {
  "Action": { name: "Aksiyon", slug: "aksiyon" },
  "Adventure": { name: "Macera", slug: "macera" },
  "Puzzle": { name: "Bulmaca", slug: "bulmaca" },
  "Racing": { name: "Yarış", slug: "yaris" },
  "Sports": { name: "Spor", slug: "spor" },
  "Strategy": { name: "Strateji", slug: "strateji" },
  "Shooting": { name: "Aksiyon", slug: "aksiyon" },
  "Arcade": { name: "Aksiyon", slug: "aksiyon" },
  "Girls": { name: "Kız Oyunları", slug: "kiz-oyunlari" },
  "Boys": { name: "Aksiyon", slug: "aksiyon" },
  "Multiplayer": { name: "2 Kişilik", slug: "2-kisilik" },
  "Simulation": { name: "Strateji", slug: "strateji" },
  "Educational": { name: "Çocuk", slug: "cocuk" },
  "Dress-up": { name: "Kız Oyunları", slug: "kiz-oyunlari" },
  "Dress Up": { name: "Kız Oyunları", slug: "kiz-oyunlari" },
  "Baby": { name: "Çocuk", slug: "cocuk" },
  "Cooking": { name: "Kız Oyunları", slug: "kiz-oyunlari" },
  "Clicker": { name: "Bulmaca", slug: "bulmaca" },
  "Hypercasual": { name: "Aksiyon", slug: "aksiyon" },
  "Beauty": { name: "Kız Oyunları", slug: "kiz-oyunlari" },
  "Stickman": { name: "Aksiyon", slug: "aksiyon" },
  ".IO": { name: "IO Oyunları", slug: "io-oyunlari" },
  "io": { name: "IO Oyunları", slug: "io-oyunlari" },
  "Casual": { name: "Bulmaca", slug: "bulmaca" },
  "Bubble Shooter": { name: "Bulmaca", slug: "bulmaca" },
  "Soccer": { name: "Spor", slug: "spor" },
  "Basketball": { name: "Spor", slug: "spor" },
  "Football": { name: "Spor", slug: "spor" },
  "Drawing": { name: "Boyama", slug: "boyama" },
  "Coloring": { name: "Boyama", slug: "boyama" },
};

function mapCategory(gdCategories: string[]): { name: string; slug: string } {
  for (const cat of gdCategories) {
    if (CATEGORY_MAP[cat]) return CATEGORY_MAP[cat];
  }
  return { name: "Aksiyon", slug: "aksiyon" };
}

function find512Thumbnail(assets: string[]): string {
  // 512x512 tercih et, yoksa herhangi biri
  const thumb512 = assets.find((a) => a.includes("512x512"));
  if (thumb512) return thumb512;
  const thumb384 = assets.find((a) => a.includes("512x384"));
  if (thumb384) return thumb384;
  return assets[0] || "";
}

function extractTags(gdGame: GDGame): string[] {
  const tags: string[] = [];
  if (gdGame.Tag && Array.isArray(gdGame.Tag)) {
    tags.push(
      ...gdGame.Tag
        .map((t) => t.trim().toLowerCase())
        .filter((t) => t.length > 0 && t !== "no blood" && t !== "kids friendly")
        .slice(0, 5)
    );
  }
  if (gdGame.Category && Array.isArray(gdGame.Category)) {
    tags.push(...gdGame.Category.map((c) => c.toLowerCase()));
  }
  return [...new Set(tags)].slice(0, 8);
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const amount = Math.min(parseInt(searchParams.get("amount") || "50"), 1000);

    // 1. GameDistribution API'sinden oyunları çek
    const apiUrl = `https://catalog.api.gamedistribution.com/api/v2.0/rss/All?amount=${amount}&format=json`;
    const response = await fetch(apiUrl, { cache: "no-store" });

    if (!response.ok) {
      return NextResponse.json(
        { error: "GameDistribution API'sine erişilemedi", status: response.status },
        { status: 502 }
      );
    }

    const data: GDGame[] = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json(
        { error: "API'den oyun verisi gelmedi" },
        { status: 404 }
      );
    }

    // 2. Mevcut oyunların ID'lerini çek
    const existingIds = await getExistingGameDistIds();

    // 3. Yeni oyunları Firestore'a ekle
    let addedCount = 0;
    let skippedCount = 0;
    const errors: string[] = [];

    for (const gdGame of data) {
      if (!gdGame.Title || !gdGame.Url || !gdGame.Md5) {
        skippedCount++;
        continue;
      }

      // Zaten varsa atla
      if (existingIds.has(gdGame.Md5)) {
        skippedCount++;
        continue;
      }

      const thumbnailUrl = find512Thumbnail(gdGame.Asset || []);
      if (!thumbnailUrl) {
        skippedCount++;
        continue;
      }

      try {
        await upsertGame({
          gameDistId: gdGame.Md5,
          title: gdGame.Title,
          slug: slugify(gdGame.Title),
          description: gdGame.Description || "",
          instructions: gdGame.Instructions || "",
          category: mapCategory(gdGame.Category || []),
          thumbnailUrl,
          iframeUrl: gdGame.Url,
          tags: extractTags(gdGame),
          metrics: {
            playCount: Math.floor(Math.random() * 10000) + 100,
            likes: Math.floor(Math.random() * 500) + 10,
          },
          isActive: true,
          createdAt: Date.now(),
        });
        addedCount++;
      } catch (err) {
        errors.push(`${gdGame.Title}: ${String(err)}`);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Senkronizasyon tamamlandı",
      stats: {
        totalFromApi: data.length,
        added: addedCount,
        skipped: skippedCount,
        errors: errors.length,
      },
      ...(errors.length > 0 ? { errorDetails: errors.slice(0, 5) } : {}),
    });
  } catch (error) {
    console.error("Sync error:", error);
    return NextResponse.json(
      { error: "Senkronizasyon hatası", details: String(error) },
      { status: 500 }
    );
  }
}
