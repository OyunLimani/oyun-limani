"use client";

import { useState } from "react";

export default function IletisimPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Şimdilik sadece UI feedback göster
    setSubmitted(true);
  }

  return (
    <div className="legal-page">
      <div className="legal-header">
        <h1>İletişim</h1>
        <p>Bizimle iletişime geçin</p>
      </div>

      <div className="legal-content">
        {submitted ? (
          <div className="contact-success">
            <div className="contact-success-icon">✅</div>
            <h2>Mesajınız Alındı!</h2>
            <p>
              En kısa sürede size dönüş yapacağız. Teşekkür ederiz!
            </p>
            <button
              className="contact-btn"
              onClick={() => {
                setSubmitted(false);
                setFormState({ name: "", email: "", subject: "", message: "" });
              }}
            >
              Yeni Mesaj Gönder
            </button>
          </div>
        ) : (
          <>
            <section className="legal-section">
              <h2>📬 Bize Yazın</h2>
              <p>
                Soru, öneri, iş birliği teklifi veya telif hakkı bildirimi için
                aşağıdaki formu kullanabilirsiniz.
              </p>
            </section>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-field">
                <label htmlFor="contact-name">Adınız *</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Adınızı girin"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">E-posta Adresiniz *</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="ornek@email.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Konu *</label>
                <select
                  id="contact-subject"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                >
                  <option value="">Konu seçiniz</option>
                  <option value="genel">Genel Soru</option>
                  <option value="oneri">Öneri / Geri Bildirim</option>
                  <option value="hata">Hata Bildirimi</option>
                  <option value="isbirligi">İş Birliği Teklifi</option>
                  <option value="telif">Telif Hakkı Bildirimi</option>
                  <option value="reklam">Reklam</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Mesajınız *</label>
                <textarea
                  id="contact-message"
                  required
                  placeholder="Mesajınızı yazın..."
                  rows={6}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="contact-btn" id="contact-submit">
                Gönder
              </button>
            </form>

            <section className="legal-section" style={{ marginTop: 32 }}>
              <h2>📧 Doğrudan İletişim</h2>
              <p>
                E-posta:{" "}
                <a href="mailto:adminoyunlimani@gmail.com" className="legal-link">
                  adminoyunlimani@gmail.com
                </a>
              </p>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
