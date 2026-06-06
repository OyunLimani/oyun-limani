import { MetadataRoute } from "next";

const SITE_URL = "https://oyunlimani.com";

// Önceden tanımlı kategoriler
const CATEGORY_SLUGS = [
  "populer",
  "aksiyon",
  "macera",
  "bulmaca",
  "yaris",
  "spor",
  "strateji",
  "2-kisilik",
  "kiz-oyunlari",
  "io-oyunlari",
  "boyama",
  "cocuk",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Statik sayfalar
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/gizlilik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/kullanim-sartlari`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Kategori sayfaları
  const categoryPages: MetadataRoute.Sitemap = CATEGORY_SLUGS.map((slug) => ({
    url: `${SITE_URL}/kategori/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // Oyun sayfaları — Firestore'dan çekmek yerine GameDistribution API'sinden
  // build zamanında çekmek mümkün ama şimdilik statik + kategori yeterli.
  // Oyun sayfaları zaten client-side render olduğu için Google onları da indexler.

  return [...staticPages, ...categoryPages];
}
