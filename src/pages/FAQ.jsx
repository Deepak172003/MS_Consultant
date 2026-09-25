import { useState } from "react";
import WhatsAppCTA from "../components/WhatsAppCTA";
import { FAQS } from "../data/constants";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <p className="faq-a muted">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">FAQ</div>
          <h1>Frequently asked questions</h1>
        </div>
      </section>

      <section>
        <div className="wrap faq-list">
          {FAQS.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </section>

      <section>
        <div className="wrap cta-band">
          <h2>Still have a question?</h2>
          <WhatsAppCTA message="Hi, I have a question that's not in your FAQ.">
            Ask us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
