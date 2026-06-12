"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

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

  // Beğeni durumunu localStorage'dan oku
  useEffect(() => {
    if (typeof window !== "undefined") {
      const likedGames = JSON.parse(localStorage.getItem("likedGames") || "[]");
      setLiked(likedGames.includes(slug));
    }
  }, [slug]);

  // Tam ekran
  const toggleFullscreen = useCallback(() => {
    if (!playerRef.current) return;
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Beğeni toggle
  function toggleLike() {
    const likedGames: string[] = JSON.parse(localStorage.getItem("likedGames") || "[]");
    if (liked) {
      const updated = likedGames.filter((s) => s !== slug);
      localStorage.setItem("likedGames", JSON.stringify(updated));
    } else {
      likedGames.push(slug);
      localStorage.setItem("likedGames", JSON.stringify(likedGames));
    }
    setLiked(!liked);
  }

  // Link kopyala
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  // Paylaş
  function shareTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${game?.title} oyununu oyna! 🎮`);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
  }

  function shareWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${game?.title} oyununu oyna! 🎮 `);
    window.open(`https://wa.me/?text=${text}${url}`, "_blank");
  }

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
      <div className="game-player-container" id="game-player" ref={playerRef}>
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

      {/* Oyun Toolbar */}
      <div className="game-toolbar" id="game-toolbar">
        <div className="game-toolbar-left">
          <h2 className="game-toolbar-title">{game.title}</h2>
        </div>
        <div className="game-toolbar-actions">
          {/* Beğeni */}
          <button
            className={`toolbar-btn ${liked ? "toolbar-btn-active" : ""}`}
            onClick={toggleLike}
            aria-label="Beğen"
            id="like-btn"
          >
            <svg viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>{liked ? "Beğendin" : "Beğen"}</span>
          </button>

          {/* Paylaş: Kopyala */}
          <button className="toolbar-btn" onClick={copyLink} aria-label="Linki Kopyala" id="copy-link-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span>{copied ? "Kopyalandı!" : "Kopyala"}</span>
          </button>

          {/* Paylaş: Twitter */}
          <button className="toolbar-btn" onClick={shareTwitter} aria-label="Twitter'da Paylaş" id="share-twitter-btn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>

          {/* Paylaş: WhatsApp */}
          <button className="toolbar-btn toolbar-btn-whatsapp" onClick={shareWhatsApp} aria-label="WhatsApp'ta Paylaş" id="share-whatsapp-btn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>

          {/* Tam Ekran */}
          <button
            className="toolbar-btn toolbar-btn-fullscreen"
            onClick={toggleFullscreen}
            aria-label="Tam Ekran"
            id="fullscreen-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isFullscreen ? (
                <>
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                </>
              ) : (
                <>
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </>
              )}
            </svg>
            <span>{isFullscreen ? "Küçült" : "Tam Ekran"}</span>
          </button>
        </div>
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

          {game.articleHTML && (
            <div 
              className="game-article-content" 
              style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(0,0,0,0.06)", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{ __html: game.articleHTML }}
            />
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
