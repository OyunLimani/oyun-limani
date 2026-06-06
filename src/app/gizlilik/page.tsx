import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — OyunLimanı",
  description:
    "OyunLimanı gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi.",
};

export default function GizlilikPage() {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <h1>Gizlilik Politikası</h1>
        <p>Son güncelleme: Haziran 2026</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Giriş</h2>
          <p>
            OyunLimanı (&quot;biz&quot;, &quot;bizim&quot; veya &quot;Platform&quot;) olarak,
            kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu Gizlilik
            Politikası, web sitemizi (oyunlimani.com) ziyaret ettiğinizde
            kişisel verilerinizin nasıl toplandığını, kullanıldığını ve
            korunduğunu açıklamaktadır.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Toplanan Veriler</h2>
          <p>Platformumuz aşağıdaki verileri toplayabilir:</p>
          <ul>
            <li>
              <strong>Otomatik toplanan veriler:</strong> IP adresi, tarayıcı
              türü, cihaz bilgileri, ziyaret edilen sayfalar, ziyaret süresi.
            </li>
            <li>
              <strong>Çerezler (Cookies):</strong> Oturum yönetimi, tercihlerinizin
              hatırlanması ve analitik amaçlı çerezler kullanılmaktadır.
            </li>
            <li>
              <strong>Üçüncü taraf hizmetleri:</strong> Google Analytics,
              GameDistribution ve reklam ağları aracılığıyla toplanan anonim
              kullanım verileri.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Verilerin Kullanım Amacı</h2>
          <p>Toplanan veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
          <ul>
            <li>Platform deneyiminin iyileştirilmesi</li>
            <li>İçerik ve oyun önerilerinin kişiselleştirilmesi</li>
            <li>Reklam gösterimi ve gelir elde edilmesi</li>
            <li>Platform güvenliğinin sağlanması</li>
            <li>İstatistiksel analiz ve raporlama</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Çerezler (Cookies)</h2>
          <p>
            Web sitemiz, deneyiminizi geliştirmek için çerezler kullanmaktadır.
            Çerezler, tarayıcınız tarafından cihazınıza kaydedilen küçük metin
            dosyalarıdır. Tarayıcı ayarlarınızdan çerezleri devre dışı
            bırakabilirsiniz; ancak bu durumda bazı özellikler düzgün
            çalışmayabilir.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Üçüncü Taraf Hizmetleri</h2>
          <p>
            Platformumuzda aşağıdaki üçüncü taraf hizmetleri kullanılmaktadır:
          </p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> Anonim site kullanım
              istatistikleri toplamak için.
            </li>
            <li>
              <strong>GameDistribution:</strong> Oyun içeriği sağlama ve oyun
              içi reklam yönetimi için.
            </li>
            <li>
              <strong>Reklam Ağları:</strong> Platforma gelir sağlamak amacıyla
              hedefli veya genel reklamlar gösterilmektedir.
            </li>
          </ul>
          <p>
            Bu hizmetlerin kendi gizlilik politikaları bulunmaktadır ve bu
            politikaları incelemenizi öneririz.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı
            güvenlik önlemleri uygulanmaktadır. Ancak, internet üzerinden veri
            aktarımının %100 güvenli olduğu garanti edilememektedir.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Çocukların Gizliliği</h2>
          <p>
            Platformumuz 13 yaşın altındaki çocuklardan bilerek kişisel veri
            toplamamaktadır. 13 yaşın altındaki kullanıcıların platformumuzu
            ebeveyn gözetiminde kullanmalarını öneriyoruz.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Haklarınız</h2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
            aşağıdaki haklara sahipsiniz:
          </p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
            <li>
              İşlenme amacını ve bunların amacına uygun kullanılıp
              kullanılmadığını öğrenme
            </li>
            <li>Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
            <li>Silinmesini veya yok edilmesini isteme</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>9. Değişiklikler</h2>
          <p>
            Bu gizlilik politikası zaman zaman güncellenebilir. Güncellemeler bu
            sayfada yayınlanacaktır. Politikayı düzenli olarak kontrol etmenizi
            öneririz.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız için{" "}
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
