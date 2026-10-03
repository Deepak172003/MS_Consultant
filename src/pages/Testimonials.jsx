import WhatsAppCTA from "../components/WhatsAppCTA";
import { TESTIMONIALS } from "../data/constants";

export default function Testimonials() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Testimonials</div>
          <h1>What clients say</h1>
          <p className="muted">Real feedback from brands and institutes we've worked with.</p>
        </div>
      </section>

      <section>
        <div className="wrap grid-3">
          {TESTIMONIALS.map((t, i) => (
            <div className="card" key={i}>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="quote-author">
                <strong>{t.name}</strong>
                <span className="muted">{t.service} · {t.city}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="wrap cta-band">
          <h2>Want to be featured here?</h2>
          <p className="muted">Share your feedback with us on WhatsApp.</p>
          <WhatsAppCTA message="Hi, I'd like to share feedback / a testimonial.">
            Message us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
