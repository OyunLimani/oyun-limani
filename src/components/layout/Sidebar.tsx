"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/types/game";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobil overlay */}
      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? "open" : ""}`} id="sidebar">
        <div className="sidebar-title">Kategoriler</div>
        <nav>
          <Link
            href="/"
            className={`sidebar-link ${pathname === "/" ? "active" : ""}`}
            onClick={onClose}
          >
            <span className="sidebar-link-icon">🏠</span>
            Ana Sayfa
          </Link>

          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategori/${cat.slug}`}
              className={`sidebar-link ${
                pathname === `/kategori/${cat.slug}` ? "active" : ""
              }`}
              onClick={onClose}
            >
              <span className="sidebar-link-icon">{cat.icon}</span>
              {cat.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
