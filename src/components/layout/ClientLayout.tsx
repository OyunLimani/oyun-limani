"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import CookieBanner from "@/components/layout/CookieBanner";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="main-layout">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="content-area">{children}</main>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-links">
            <a href="/">Ana Sayfa</a>
            <a href="/hakkimizda">Hakkımızda</a>
            <a href="/gizlilik">Gizlilik Politikası</a>
            <a href="/kullanim-sartlari">Kullanım Şartları</a>
            <a href="/iletisim">İletişim</a>
          </div>
          <p>© 2026 OyunLimanı — Ücretsiz online oyun platformu. Tüm hakları saklıdır.</p>
        </div>
      </footer>
      <CookieBanner />
    </>
  );
}
