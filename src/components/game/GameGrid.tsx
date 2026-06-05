import GameCard from "./GameCard";
import { Game } from "@/types/game";

export default function GameGrid({
  games,
  large = false,
}: {
  games: Game[];
  large?: boolean;
}) {
  return (
    <div className={`game-grid ${large ? "game-grid-large" : ""}`}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
