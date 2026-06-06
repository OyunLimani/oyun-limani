"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { DEMO_GAMES } from "@/lib/demo-data";
import { Game } from "@/types/game";
import { getGameBySlug, getGamesByCategory, getGames, incrementPlayCount } from "@/lib/firebase/games";
import GameGrid from "@/components/game/GameGrid";
import { formatPlayCount } from "@/lib/utils";

export default function GamePage() {
  const params = useParams();
  const slug = params.slug as string;

  const [game, setGame] = useState<Game | null>(null);
  const [relatedGames, setRelatedGames] = useState<Game[]>([]);
  const [moreGames, setMoreGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGame() {
      try {
        // Firestore'dan çek
        let foundGame = await getGameBySlug(slug);

        if (!foundGame) {
          // Demo verilerden dene
          const demoGame = DEMO_GAMES.find((g) => g.slug === slug);
          if (demoGame) foundGame = demoGame;
        }

        if (foundGame) {
          setGame(foundGame);

          // Oynanma sayısını artır
          if (foundGame.id && foundGame.id !== foundGame.gameDistId) {
            try { await incrementPlayCount(foundGame.id); } catch {}
          }

          // Benzer oyunlar
          try {
            const related = await getGamesByCategory(foundGame.category.slug, 6);
            const filtered = related.filter((g) => g.slug !== slug);
            setRelatedGames(filtered.length > 0 ? filtered : DEMO_GAMES.filter((g) => g.category.slug === foundGame!.category.slug && g.slug !== slug).slice(0, 6));
          } catch {
            setRelatedGames(DEMO_GAMES.filter((g) => g.category.slug === foundGame!.category.slug && g.slug !== slug).slice(0, 6));
          }

          // Daha fazla oyun
          try {
            const all = await getGames(12);
            setMoreGames(all.filter((g) => g.slug !== slug).slice(0, 8));
          } catch {
            setMoreGames(DEMO_GAMES.filter((g) => g.slug !== slug).slice(0, 8));
          }
        }
      } catch {
        const demoGame = DEMO_GAMES.find((g) => g.slug === slug);
        if (demoGame) {
          setGame(demoGame);
          setRelatedGames(DEMO_GAMES.filter((g) => g.category.slug === demoGame.category.slug && g.slug !== slug).slice(0, 6));
          setMoreGames(DEMO_GAMES.filter((g) => g.slug !== slug).slice(0, 8));
        }
      } finally {
        setLoading(false);
      }
    }
    fetchGame();
  }, [slug]);

  if (loading) {
    return (
      <div className="game-page">
        <div className="skeleton" style={{ width: "100%", aspectRatio: "16/9", borderRadius: 20 }} />
      </div>
    );
  }

  if (!game) {
    return (
      <div className="game-page" style={{ textAlign: "center", padding: "80px 20px" }}>
        <div style={{ fontSize: "4rem", marginBottom: 16 }}>😔</div>
        <h1 style={{ fontSize: "1.5rem", marginBottom: 8 }}>Oyun bulunamadı</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>
          Aradığınız oyun mevcut değil veya kaldırılmış olabilir.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "10px 24px",
            background: "var(--accent)",
            borderRadius: "100px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="game-page">
      {/* Oyun Oynatıcı */}
      <div className="game-player-container" id="game-player">
        <iframe
          src={(() => {
            try {
              const url = new URL(game.iframeUrl);
              if (typeof window !== "undefined") {
                url.searchParams.set("gd_sdk_referrer_url", window.location.origin);
              }
              return url.toString();
            } catch {
              return game.iframeUrl;
            }
          })()}
          className="game-iframe"
          title={game.title}
          allow="autoplay; fullscreen; gamepad"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>

      {/* Detaylar */}
      <div className="game-details">
        <div className="game-info" id="game-info">
          <h1>{game.title}</h1>
          <Link href={`/kategori/${game.category.slug}`} className="game-info-category">
            {game.category.name}
          </Link>
          <p className="game-info-description">{game.description}</p>

          {game.instructions && (
            <div style={{ marginTop: 16 }}>
              <h3 style={{ fontSize: "0.88rem", fontWeight: 800, marginBottom: 6 }}>
                🎮 Nasıl Oynanır?
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {game.instructions}
              </p>
            </div>
          )}

          {/* İstatistikler */}
          <div style={{ display: "flex", gap: 28, marginTop: 18, paddingTop: 14, borderTop: "1px solid rgba(0,0,0,0.06)" }}>
            <div>
              <div style={{ fontSize: "1.1rem", fontWeight: 900 }}>{formatPlayCount(game.metrics.playCount)}</div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 600 }}>Oynama</div>
            </div>
            <div>
              <div style={{ fontSize: "1.1rem", fontWeight: 900 }}>{formatPlayCount(game.metrics.likes)}</div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 600 }}>Beğeni</div>
            </div>
          </div>

          {game.tags.length > 0 && (
            <div className="game-tags">
              {game.tags.map((tag) => (
                <span key={tag} className="game-tag">#{tag}</span>
              ))}
            </div>
          )}
        </div>

        {/* Benzer Oyunlar */}
        <div className="related-games" id="related-games">
          <h3>Benzer Oyunlar</h3>
          {relatedGames.length > 0 ? (
            relatedGames.map((rg) => (
              <Link key={rg.id} href={`/oyun/${rg.slug}`} className="related-game-item">
                <img src={rg.thumbnailUrl} alt={rg.title} className="related-game-thumb" loading="lazy" />
                <span className="related-game-title">{rg.title}</span>
              </Link>
            ))
          ) : (
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", padding: "12px 0" }}>
              Henüz benzer oyun yok
            </p>
          )}
        </div>
      </div>

      {/* Daha Fazla Oyun */}
      <section style={{ marginTop: 32 }}>
        <div className="section-header">
          <h2 className="section-title">Daha Fazla Oyun</h2>
        </div>
        <GameGrid games={moreGames} />
      </section>
    </div>
  );
}
