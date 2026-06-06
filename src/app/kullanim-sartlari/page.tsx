import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları — OyunLimanı",
  description:
    "OyunLimanı kullanım şartları. Platformumuzu kullanırken uymanız gereken kurallar ve koşullar.",
};

export default function KullanimSartlariPage() {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <h1>Kullanım Şartları</h1>
        <p>Son güncelleme: Haziran 2026</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Kabul</h2>
          <p>
            OyunLimanı web sitesini (&quot;Platform&quot;) kullanarak, bu kullanım
            şartlarını kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız,
            lütfen platformumuzu kullanmayınız.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Hizmet Tanımı</h2>
          <p>
            OyunLimanı, kullanıcılarına ücretsiz HTML5 tabanlı online oyunlar
            sunan bir web platformudur. Oyunlar tarayıcı üzerinden çalışır ve
            herhangi bir indirme gerektirmez.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Kullanım Kuralları</h2>
          <p>Platformumuzu kullanırken aşağıdaki kurallara uymayı kabul edersiniz:</p>
          <ul>
            <li>Platformu yalnızca yasal amaçlarla kullanmak</li>
            <li>
              Platformun güvenliğini tehlikeye atacak herhangi bir eylemde
              bulunmamak
            </li>
            <li>Otomatik botlar veya scriptler kullanmamak</li>
            <li>Diğer kullanıcıların deneyimini olumsuz etkilememek</li>
            <li>
              Platformdaki içerikleri izinsiz kopyalamamak veya dağıtmamak
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Fikri Mülkiyet</h2>
          <p>
            Platformumuzda yer alan tasarım, logo, içerik ve diğer materyaller
            OyunLimanı&apos;nın veya ilgili içerik sağlayıcıların mülkiyetindedir.
            Bu materyallerin izinsiz kullanımı yasaktır.
          </p>
          <p>
            Platformda sunulan oyunlar, ilgili oyun geliştiricileri ve
            GameDistribution tarafından sağlanmaktadır. Oyun hakları ilgili
            sahiplerine aittir.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Reklamlar</h2>
          <p>
            OyunLimanı, gelir elde etmek amacıyla platformda reklamlar
            göstermektedir. Bu reklamlar üçüncü taraf reklam ağları tarafından
            sunulmaktadır. Reklam içeriklerinden ilgili reklam verenler
            sorumludur.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Sorumluluk Sınırlaması</h2>
          <p>
            OyunLimanı, platformun kesintisiz veya hatasız çalışacağını garanti
            etmez. Platform &quot;olduğu gibi&quot; sunulmaktadır. Platformun
            kullanımından doğabilecek herhangi bir doğrudan veya dolaylı zarardan
            sorumlu değiliz.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Üçüncü Taraf Bağlantıları</h2>
          <p>
            Platformumuz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu
            sitelerin içeriğinden veya gizlilik uygulamalarından sorumlu
            değiliz.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Değişiklikler</h2>
          <p>
            Bu kullanım şartlarını önceden bildirimde bulunmaksızın değiştirme
            hakkımızı saklı tutarız. Güncellenmiş şartlar, bu sayfada
            yayınlandığı anda yürürlüğe girer.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Uygulanacak Hukuk</h2>
          <p>
            Bu kullanım şartları, Türkiye Cumhuriyeti kanunlarına tabidir.
            Herhangi bir uyuşmazlık durumunda Türkiye mahkemeleri yetkilidir.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. İletişim</h2>
          <p>
            Kullanım şartları hakkında sorularınız için{" "}
            <a href="/iletisim" className="legal-link">
              iletişim sayfamızdan
            </a>{" "}
            bize ulaşabilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
