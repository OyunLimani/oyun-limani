import { db } from "./client";
import {
  collection,
  doc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  updateDoc,
  increment,
  setDoc,
} from "firebase/firestore";
import { Game } from "@/types/game";

const GAMES_COLLECTION = "games";

/**
 * Tüm oyunları getirir (indeks gerektirmeyen basit sorgu)
 */
export async function getGames(maxCount = 100): Promise<Game[]> {
  const q = query(
    collection(db, GAMES_COLLECTION),
    limit(maxCount)
  );
  const snapshot = await getDocs(q);
  const games = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Game));
  // Client tarafında sırala
  return games
    .filter((g) => g.isActive !== false)
    .sort((a, b) => (b.metrics?.playCount || 0) - (a.metrics?.playCount || 0));
}

/**
 * Slug ile tek oyun getirir
 */
export async function getGameBySlug(slug: string): Promise<Game | null> {
  const q = query(
    collection(db, GAMES_COLLECTION),
    where("slug", "==", slug),
    limit(1)
  );
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const d = snapshot.docs[0];
  return { id: d.id, ...d.data() } as Game;
}

/**
 * Kategoriye göre oyunları getirir
 */
export async function getGamesByCategory(
  categorySlug: string,
  maxCount = 50
): Promise<Game[]> {
  const q = query(
    collection(db, GAMES_COLLECTION),
    where("category.slug", "==", categorySlug),
    limit(maxCount)
  );
  const snapshot = await getDocs(q);
  const games = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Game));
  return games
    .filter((g) => g.isActive !== false)
    .sort((a, b) => (b.metrics?.playCount || 0) - (a.metrics?.playCount || 0));
}

/**
 * Popüler oyunları getirir
 */
export async function getPopularGames(maxCount = 20): Promise<Game[]> {
  const games = await getGames(200);
  return games.slice(0, maxCount);
}

/**
 * Oyun oynanma sayısını artırır
 */
export async function incrementPlayCount(gameId: string): Promise<void> {
  const gameRef = doc(db, GAMES_COLLECTION, gameId);
  await updateDoc(gameRef, {
    "metrics.playCount": increment(1),
  });
}

/**
 * Oyun ekler veya günceller
 */
export async function upsertGame(game: Omit<Game, "id">): Promise<void> {
  const docRef = doc(db, GAMES_COLLECTION, game.gameDistId);
  await setDoc(docRef, game, { merge: true });
}

/**
 * Firestore'daki mevcut gameDistId'leri getirir
 */
export async function getExistingGameDistIds(): Promise<Set<string>> {
  const snapshot = await getDocs(collection(db, GAMES_COLLECTION));
  const ids = new Set<string>();
  snapshot.docs.forEach((d) => {
    const data = d.data();
    if (data.gameDistId) ids.add(data.gameDistId);
  });
  return ids;
}
