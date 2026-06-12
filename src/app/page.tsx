"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GameGrid from "@/components/game/GameGrid";
import { DEMO_GAMES } from "@/lib/demo-data";
import { CATEGORIES } from "@/types/game";
import { Game } from "@/types/game";
import { getGames } from "@/lib/firebase/games";

export default function HomePage() {
  const [games, setGames] = useState<Game[]>(DEMO_GAMES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        // const firestoreGames = await getGames(100);
        // if (firestoreGames.length > 0) {
        //   setGames(firestoreGames);
        // }
        // TODO: AdSense onayından sonra üstteki satırları açın, alttaki demo atamasını silin
        setGames(DEMO_GAMES);
      } catch (err) {
        console.log("Firestore'dan veri çekilemedi, demo veriler kullanılıyor:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  const popularGames = [...games].sort(
    (a, b) => b.metrics.playCount - a.metrics.playCount
  );

  return (
    <>
      {/* Kategori Chips */}
      <div className="category-chips" id="category-chips">
        {CATEGORIES.map((cat) => (
          <Link key={cat.slug} href={`/kategori/${cat.slug}`} className="category-chip">
            <span>{cat.icon}</span>
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Küçük Hero */}
      <div className="hero-banner" id="hero-banner">
        <h1 className="hero-title">
          Hemen oynamaya başla! <span>🚀</span>
        </h1>
        <p className="hero-subtitle">
          Yüzlerce ücretsiz oyun — indirme yok, kayıt yok
        </p>
      </div>

      {/* Popüler */}
      <section id="popular-games">
        <div className="section-header">
          <h2 className="section-title">Bu hafta popüler</h2>
          <Link href="/kategori/populer" className="section-link">Tümü</Link>
        </div>
        {loading ? (
          <div className="game-grid game-grid-large">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeleton" style={{ aspectRatio: "1/1" }} />
            ))}
          </div>
        ) : (
          <GameGrid games={popularGames.slice(0, 12)} large />
        )}
      </section>

      {/* Yeni eklenenler */}
      <section id="new-games">
        <div className="section-header">
          <h2 className="section-title">Yeni eklenenler</h2>
        </div>
        <GameGrid games={[...games].reverse().slice(0, 6)} />
      </section>

      {/* Tüm Oyunlar */}
      <section id="all-games">
        <div className="section-header">
          <h2 className="section-title">Tüm Oyunlar</h2>
        </div>
        <GameGrid games={games} large />
      </section>
    </>
  );
}
