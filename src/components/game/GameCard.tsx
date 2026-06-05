import Link from "next/link";
import { Game } from "@/types/game";
import { formatPlayCount } from "@/lib/utils";

export default function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/oyun/${game.slug}`} className="game-card" id={`game-card-${game.slug}`}>
      <img
        src={game.thumbnailUrl}
        alt={game.title}
        className="game-card-image"
        loading="lazy"
      />

      {/* Hover overlay (masaüstünde görünür) */}
      <div className="game-card-overlay">
        <div className="game-card-title">{game.title}</div>
        <div className="game-card-category">{game.category.name}</div>
      </div>

      {/* Play butonu (hover'da) */}
      <div className="play-button-overlay">
        <div className="play-button">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
