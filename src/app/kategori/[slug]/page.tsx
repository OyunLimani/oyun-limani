"use client";

import { useState, useEffect } from "react";
import GameGrid from "@/components/game/GameGrid";
import { DEMO_GAMES } from "@/lib/demo-data";
import { CATEGORIES, Game } from "@/types/game";
import { getGamesByCategory, getPopularGames } from "@/lib/firebase/games";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = CATEGORIES.find((c) => c.slug === slug);

  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        let firestoreGames: Game[];
        if (slug === "populer") {
          firestoreGames = await getPopularGames(50);
        } else {
          firestoreGames = await getGamesByCategory(slug, 50);
        }

        if (firestoreGames.length > 0) {
          setGames(firestoreGames);
        } else {
          // Firestore boşsa demo verilerden filtrele
          if (slug === "populer") {
            setGames([...DEMO_GAMES].sort((a, b) => b.metrics.playCount - a.metrics.playCount));
          } else {
            setGames(DEMO_GAMES.filter((g) => g.category.slug === slug));
          }
        }
      } catch {
        // Fallback: demo veriler
        if (slug === "populer") {
          setGames([...DEMO_GAMES].sort((a, b) => b.metrics.playCount - a.metrics.playCount));
        } else {
          setGames(DEMO_GAMES.filter((g) => g.category.slug === slug));
        }
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, [slug]);

  if (!category) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-muted)" }}>
        <div style={{ fontSize: "3rem", marginBottom: 12 }}>🕹️</div>
        <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>Kategori bulunamadı</p>
      </div>
    );
  }

  return (
    <>
      <div className="category-banner" id="category-banner">
        <h1>{category.icon} {category.name}</h1>
        <p>{loading ? "Yükleniyor..." : `${games.length} oyun bulundu`}</p>
      </div>

      {loading ? (
        <div className="game-grid game-grid-large">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton" style={{ aspectRatio: "1/1" }} />
          ))}
        </div>
      ) : games.length > 0 ? (
        <GameGrid games={games} large />
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-muted)" }}>
          <div style={{ fontSize: "3rem", marginBottom: 12 }}>🕹️</div>
          <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>Bu kategoride henüz oyun yok</p>
          <p style={{ fontSize: "0.85rem", marginTop: 4 }}>Çok yakında yeni oyunlar eklenecek!</p>
        </div>
      )}
    </>
  );
}
