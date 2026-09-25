import { Link } from "react-router-dom";
import WhatsAppCTA from "../components/WhatsAppCTA";
import {
  TESTIMONIALS,
  FAQS,
  TRUST_STRIP,
  COMPANY_NAME,
} from "../data/constants";

const features = [
  {
    title: "Direct on WhatsApp",
    desc: "No forms, no sign-up — message us and get a real reply, fast.",
  },
  {
    title: "Four verticals, one team",
    desc: "Play school, study material, marketing and HR services — all under one roof.",
  },
  {
    title: "Pan-India reach",
    desc: "Franchise, placements and campaigns run for partners across India.",
  },
  {
    title: "Transparent, always",
    desc: "Clear reporting for campaigns, honest timelines for placements — enquiries only, no fee collection on the site.",
  },
];

const verticalCards = [
  {
    kicker: "Play School Franchise",
    title: "Start a play school with support behind you",
    desc: "Curriculum, teacher training, admissions and marketing support for franchise partners.",
    to: "/play-school",
    cta: "See franchise details →",
  },
  {
    kicker: "Study Material & Test Software",
    title: "Material & tests across every major stream",
    desc: "IIT-JEE, NEET, Board, Foundation, Higher Studies and Olympiad/NDA.",
    to: "/study-material",
    cta: "See streams →",
  },
  {
    kicker: "Marketing",
    title: "Online & offline, handled in-house",
    desc: "Design, photography, video, ads and web — for your brand or your franchise branch.",
    to: "/marketing",
    cta: "See all services →",
  },
  {
    kicker: "HR Services",
    title: "Faculty & staff placements",
    desc: "Matching institutes and businesses with the right people, pan-India.",
    to: "/hr-services",
    cta: "See streams →",
  },
];

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section className="banner">
        <div className="banner-glow banner-glow-1" />
        <div className="banner-glow banner-glow-2" />
        <div className="wrap banner-inner">
          <div className="banner-text">
            <div className="eyebrow">{COMPANY_NAME} · Est. 2019</div>
            <h1>
              A Consulting company built around <em>four</em> things you need
            </h1>
            <p>
              Play school franchise, study material & test software,
              marketing, and HR services — one team, one WhatsApp number.
            </p>
            <div className="hero-ctas">
              <WhatsAppCTA message={`Hi ${COMPANY_NAME}, I'd like to know more.`}>
                Message us on WhatsApp
              </WhatsAppCTA>
              <Link className="btn btn-ghost" to="/play-school">
                Play School
              </Link>
              <Link className="btn btn-ghost" to="/marketing">
                Marketing
              </Link>
            </div>
          </div>

          <div className="banner-graphic" aria-hidden="true">
            <svg viewBox="0 0 320 320" fill="none">
              <circle cx="160" cy="160" r="150" stroke="#E8E1C8" strokeWidth="1.5" />
              <circle cx="160" cy="160" r="105" stroke="#E8E1C8" strokeWidth="1.5" />
              <rect x="70" y="150" width="70" height="90" rx="10" fill="#FFFFFF" stroke="#4C8CE8" strokeWidth="1.5" />
              <rect x="90" y="170" width="30" height="6" rx="3" fill="#4C8CE8" />
              <rect x="90" y="184" width="30" height="6" rx="3" fill="#E8E1C8" />
              <rect x="90" y="198" width="18" height="6" rx="3" fill="#E8E1C8" />
              <rect x="175" y="110" width="80" height="100" rx="10" fill="#FFFFFF" stroke="#E8B34C" strokeWidth="1.5" />
              <circle cx="215" cy="140" r="16" fill="#E8B34C" opacity=".18" />
              <path d="M195 175l14-16 12 10 20-24" stroke="#E8B34C" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="235" cy="145" r="4" fill="#E8B34C" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="stats">
        <div className="wrap stat-grid">
          <div><div className="num">24k+</div><div className="lbl">People placed</div></div>
          <div><div className="num">6+</div><div className="lbl">Years in marketing</div></div>
          <div><div className="num">60+</div><div className="lbl">Cities covered</div></div>
          <div><div className="num">2019</div><div className="lbl">Operating since</div></div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="trust-strip">
        <div className="wrap trust-strip-inner">
          {TRUST_STRIP.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* Why choose us */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Why choose us</div>
            <h2>Built for people who need a fast, direct answer</h2>
          </div>
          <div className="grid-3">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p className="muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four verticals */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">What we do</div>
            <h2>Four verticals, one company</h2>
          </div>
          <div className="grid-2x2">
            {verticalCards.map((v) => (
              <div className="panel-card" key={v.to}>
                <div className="kicker">{v.kicker}</div>
                <h2 style={{ fontSize: "1.25rem" }}>{v.title}</h2>
                <p className="muted">{v.desc}</p>
                <Link className="btn btn-ghost" to={v.to}>
                  {v.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials teaser */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">What clients say</div>
            <h2>Testimonials</h2>
          </div>
          <div className="grid-3">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div className="card" key={i}>
                <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="quote-author">
                  <strong>{t.name}</strong>
                  <span className="muted">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
          <Link className="btn btn-ghost" to="/testimonials" style={{ marginTop: 24 }}>
            See all testimonials →
          </Link>
        </div>
      </section>

      {/* FAQ teaser */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Questions?</div>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq-list">
            {FAQS.slice(0, 3).map((f) => (
              <div className="card" key={f.q}>
                <h3 style={{ marginBottom: 6 }}>{f.q}</h3>
                <p className="muted">{f.a}</p>
              </div>
            ))}
          </div>
          <Link className="btn btn-ghost" to="/faq" style={{ marginTop: 20 }}>
            See all FAQs →
          </Link>
        </div>
      </section>

      <section>
        <div className="wrap cta-band">
          <h2>Have a requirement right now?</h2>
          <p className="muted">
            Whichever of the four you need — tell us on WhatsApp.
          </p>
          <WhatsAppCTA message={`Hi ${COMPANY_NAME}, I have a requirement to discuss.`}>
            Message us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
