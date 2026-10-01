import { Link } from "react-router-dom";
import WhatsAppCTA from "../components/WhatsAppCTA";
import EnquiryForm from "../components/EnquiryForm";
import {
  BUSINESS_CONSULTING_SERVICES,
  BUSINESS_CONSULTING_STEPS,
  BUSINESS_CONSULTING_ENQUIRY_FIELDS,
  COMPANY_NAME,
} from "../data/constants";

export default function BusinessConsulting() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Business Consulting</div>
          <h1>
            From zero to <em>profitable</em>
          </h1>
          <p>
            {COMPANY_NAME} works with startups and existing companies to build
            a clear plan, fix what's leaking, and grow towards real profit —
            whatever stage you're at today.
          </p>
          <WhatsAppCTA message="Hi, I'd like to talk about business consulting for my business.">
            Talk to us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>

      <section>
        <div className="wrap">
          <EnquiryForm
            title="Business Consulting Enquiry"
            note="Tell us about your business — our team will get in touch to understand your situation and next steps."
            fields={BUSINESS_CONSULTING_ENQUIRY_FIELDS}
            formName="Business Consulting — Enquiry"
            whatsappMessage="Hi, I'd like to discuss my business and how you can help."
          />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">What we help with</div>
            <h2>Everything a business needs to become profitable</h2>
          </div>
          <div className="grid-3">
            {BUSINESS_CONSULTING_SERVICES.map((s) => (
              <div className="card" key={s.name}>
                <h3>{s.name}</h3>
                <p className="muted">{s.desc}</p>
                <ul className="dash-list">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <WhatsAppCTA
                  variant="ghost"
                  message={`Hi, I'm interested in business consulting — ${s.name}.`}
                >
                  Enquire on WhatsApp
                </WhatsAppCTA>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">How we work</div>
            <h2>A simple, practical process</h2>
          </div>
          <div className="grid-3">
            {BUSINESS_CONSULTING_STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p className="muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Who it's for</div>
            <h2>Whether you're starting out or stuck</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Startups & new founders</h3>
              <p className="muted">
                Have an idea or an early business and want a clear path to
                first customers and first profit — not guesswork.
              </p>
            </div>
            <div className="card">
              <h3>Existing companies</h3>
              <p className="muted">
                Running but not earning what it should — sales, costs or
                processes need fixing before growth makes sense.
              </p>
            </div>
            <div className="card">
              <h3>Institutes & franchise owners</h3>
              <p className="muted">
                Running a coaching institute, school or franchise branch and
                want it to be sustainably profitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap panel-card">
          <h2>Also available in-house</h2>
          <p className="muted">
            As your plan moves into action, you can bring in our other teams —{" "}
            <Link to="/hr-services">HR Services</Link> for hiring and{" "}
            <Link to="/marketing">Marketing</Link> for online and offline
            growth — without starting from scratch with new vendors.
          </p>
          <WhatsAppCTA message="Hi, I'd like to discuss my business and how you can help.">
            Message us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
