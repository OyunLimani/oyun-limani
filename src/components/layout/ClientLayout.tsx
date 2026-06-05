"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

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
            <a href="#">Hakkımızda</a>
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Şartları</a>
            <a href="#">İletişim</a>
          </div>
          <p>© 2026 OyunLimanı — Ücretsiz online oyun platformu. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
