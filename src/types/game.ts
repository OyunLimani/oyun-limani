// GameDistribution API'sinden gelen ve Firestore'da saklanan oyun veri yapısı
export interface Game {
  id: string;
  gameDistId: string;
  title: string;
  slug: string;
  description: string;
  articleHTML?: string;
  instructions: string;
  category: {
    name: string;
    slug: string;
  };
  thumbnailUrl: string;
  iframeUrl: string;
  tags: string[];
  metrics: {
    playCount: number;
    likes: number;
  };
  isActive: boolean;
  createdAt: number;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
  gameCount?: number;
}

// Önceden tanımlı kategoriler
export const CATEGORIES: Category[] = [
  { name: "Popüler", slug: "populer", icon: "🔥" },
  { name: "Aksiyon", slug: "aksiyon", icon: "⚔️" },
  { name: "Macera", slug: "macera", icon: "🗺️" },
  { name: "Bulmaca", slug: "bulmaca", icon: "🧩" },
  { name: "Yarış", slug: "yaris", icon: "🏎️" },
  { name: "Spor", slug: "spor", icon: "⚽" },
  { name: "Strateji", slug: "strateji", icon: "♟️" },
  { name: "2 Kişilik", slug: "2-kisilik", icon: "👥" },
  { name: "Kız Oyunları", slug: "kiz-oyunlari", icon: "💅" },
  { name: "IO Oyunları", slug: "io-oyunlari", icon: "🌐" },
  { name: "Boyama", slug: "boyama", icon: "🎨" },
  { name: "Çocuk", slug: "cocuk", icon: "🧸" },
];
