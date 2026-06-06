import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda — OyunLimanı",
  description:
    "OyunLimanı, Türkiye'nin ücretsiz online oyun platformudur. Misyonumuz, kaliteli HTML5 oyunlarını herkese ulaştırmaktır.",
};

export default function HakkimizdaPage() {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <h1>Hakkımızda</h1>
        <p>OyunLimanı'nı yakından tanıyın</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>🎮 OyunLimanı Nedir?</h2>
          <p>
            OyunLimanı, Türkiye merkezli ücretsiz bir online oyun platformudur.
            Amacımız, yüzlerce kaliteli HTML5 oyununu herhangi bir indirme veya
            kayıt gerektirmeden doğrudan tarayıcınızdan oynamanızı sağlamaktır.
          </p>
          <p>
            Aksiyon, bulmaca, yarış, spor, strateji ve daha birçok kategoride
            sürekli güncellenen oyun kütüphanemizle her yaştan oyuncuya hitap
            ediyoruz.
          </p>
        </section>

        <section className="legal-section">
          <h2>🚀 Misyonumuz</h2>
          <p>
            Kaliteli oyun deneyimini herkes için erişilebilir kılmak. İndirme
            gerektirmeyen, ücretsiz, güvenli ve eğlenceli oyunları tek bir
            platformda toplamak.
          </p>
        </section>

        <section className="legal-section">
          <h2>🌟 Vizyonumuz</h2>
          <p>
            Türkiye&apos;nin en büyük ve en güvenilir online oyun platformu
            olmak. Oyuncularımıza en iyi deneyimi sunarak oyun dünyasında bir
            referans noktası haline gelmek.
          </p>
        </section>

        <section className="legal-section">
          <h2>🤝 Ortaklıklarımız</h2>
          <p>
            OyunLimanı, dünya genelinde binlerce HTML5 oyununu barındıran{" "}
            <strong>GameDistribution</strong> ile iş birliği içinde çalışmaktadır.
            Bu sayede oyun kütüphanemiz sürekli güncellenmekte ve en popüler
            oyunlar platformumuza eklenmektedir.
          </p>
        </section>

        <section className="legal-section">
          <h2>📬 Bize Ulaşın</h2>
          <p>
            Sorularınız, önerileriniz veya iş birliği talepleriniz için{" "}
            <a href="/iletisim" className="legal-link">
              iletişim sayfamızı
            </a>{" "}
            ziyaret edebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
