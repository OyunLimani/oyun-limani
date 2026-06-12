"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./CookieBanner.css";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sadece istemci tarafında çalıştır
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          OyunLimanı, size en iyi deneyimi sunmak ve reklamları kişiselleştirmek için çerezleri kullanır. 
          Sitemizi kullanmaya devam ederek çerez kullanımımızı kabul etmiş olursunuz.
          Detaylı bilgi için 
          <Link href="/gizlilik">Gizlilik Politikamızı</Link> inceleyebilirsiniz.
        </p>
      </div>
      <button onClick={acceptCookies} className="cookie-btn">
        Kabul Et
      </button>
    </div>
  );
}
