import { useState } from "react";
import WhatsAppCTA from "../components/WhatsAppCTA";
import {
  WHATSAPP_NUMBER,
  OFFICE_PHONE,
  MOBILE_PHONES,
  EMAIL,
  ADDRESS,
  OPENING_HOURS,
  OFFICES,
  waLink,
} from "../data/constants";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.1z" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 6 10-6" />
  </svg>
);
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

function InfoItem({ icon, label, children }) {
  return (
    <div className="info-item">
      <div className="icon-badge">{icon}</div>
      <div>
        <div className="info-label">{label}</div>
        <div className="info-value">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function update(field) {
    return (e) => setForm({ ...form, [field]: e.target.value });
  }

  function sendViaWhatsApp(e) {
    e.preventDefault();
    const text =
      `New enquiry from the website\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Message: ${form.message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">We'd like to hear from you</div>
          <h1>Get In Touch</h1>
          <p className="muted">
            Questions about faculty placements, digital marketing services,
            or anything else — reach us any of these ways.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={`tel:+${WHATSAPP_NUMBER}`}>
              <PhoneIcon /> Call Now
            </a>
            <WhatsAppCTA message="Hi, I'd like to get in touch.">
              <ChatIcon /> WhatsApp
            </WhatsAppCTA>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap contact-split">
          <div className="contact-info">
            <InfoItem icon={<PinIcon />} label="Address">
              {ADDRESS}
            </InfoItem>
            <InfoItem icon={<PhoneIcon />} label="Phone">
              {OFFICE_PHONE} · {MOBILE_PHONES.join(" · ")}
            </InfoItem>
            <InfoItem icon={<MailIcon />} label="Email">
              {EMAIL}
            </InfoItem>
            <InfoItem icon={<ChatIcon />} label="WhatsApp">
              {MOBILE_PHONES[0]}
            </InfoItem>

            {OFFICES.map((o) =>
              o.mapLink ? (
                <div className="map-card" key={o.city}>
                  <iframe
                    title={o.city}
                    className="map-embed"
                    loading="lazy"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      o.address
                    )}&output=embed`}
                  />
                  <a
                    className="map-overlay-btn"
                    href={o.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions ↗
                  </a>
                  <div className="map-caption muted">{o.city}</div>
                </div>
              ) : null
            )}

            <div className="card hours-card">
              <div className="icon-badge">
                <ClockIcon />
              </div>
              <div>
                <div className="info-label">Opening Hours</div>
                <div className="info-value">{OPENING_HOURS}</div>
              </div>
            </div>
          </div>

          <div className="panel-card contact-form-card">
            <p className="muted form-note">
              <ChatIcon /> Sent straight to our WhatsApp — no account or
              sign-up needed.
            </p>
            <form className="contact-form" onSubmit={sendViaWhatsApp}>
              <div className="form-row">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={update("name")}
                    required
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                </div>
              </div>
              <label>Message</label>
              <textarea
                placeholder="How can we help?"
                rows={6}
                value={form.message}
                onChange={update("message")}
                required
              />
              <button type="submit" className="btn btn-primary">
                <ChatIcon /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Our offices</div>
            <h2>Find us</h2>
          </div>
          <div className="two-col">
            {OFFICES.map((o) => (
              <div className="card" key={o.city}>
                <h3>{o.city}</h3>
                <p className="muted">{o.address}</p>
                {o.mapLink ? (
                  <a
                    className="btn btn-ghost"
                    href={o.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 12 }}
                  >
                    Get Directions →
                  </a>
                ) : (
                  <p className="muted" style={{ marginTop: 12, fontSize: ".82rem" }}>
                    Map link coming soon
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
