"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { DEMO_GAMES } from "@/lib/demo-data";
import { Game } from "@/types/game";
import { getGames } from "@/lib/firebase/games";

export default function Header({
  onMenuToggle,
}: {
  onMenuToggle: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Game[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [allGames, setAllGames] = useState<Game[]>(DEMO_GAMES);
  const searchRef = useRef<HTMLDivElement>(null);

  // Firestore'dan oyunları bir kez çek
  useEffect(() => {
    async function fetchAllGames() {
      try {
        const firestoreGames = await getGames(500);
        if (firestoreGames.length > 0) {
          setAllGames(firestoreGames);
        }
      } catch {
        // Hata durumunda demo veriler kullanılır
      }
    }
    fetchAllGames();
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    const filtered = allGames.filter((g) =>
      g.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 6));
  }, [query, allGames]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Menü butonu */}
        <button
          className="nav-btn"
          onClick={onMenuToggle}
          aria-label="Menü"
          id="mobile-menu-toggle"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>

        {/* Logo */}
        <Link href="/" className="logo" id="site-logo">
          <span className="logo-emoji">🎮</span>
          OyunLimanı
        </Link>

        {/* Arama */}
        <div className="search-container" ref={searchRef}>
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            className="search-input"
            type="text"
            placeholder="Oyun ara..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowResults(true)}
            id="search-input"
          />
          {showResults && results.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                right: 0,
                background: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                zIndex: 200,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            >
              {results.map((game) => (
                <Link
                  key={game.id}
                  href={`/oyun/${game.slug}`}
                  onClick={() => { setShowResults(false); setQuery(""); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "9px 14px",
                    textDecoration: "none",
                    color: "#1a1a2e",
                    transition: "background 150ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f6f8")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <img
                    src={game.thumbnailUrl}
                    alt={game.title}
                    width={40}
                    height={40}
                    style={{ borderRadius: 10, objectFit: "cover" }}
                  />
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>{game.title}</div>
                    <div style={{ fontSize: "0.7rem", color: "#2d6a4f", fontWeight: 600 }}>{game.category.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

