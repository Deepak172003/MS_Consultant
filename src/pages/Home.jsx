import { Link } from "react-router-dom";
import WhatsAppCTA from "../components/WhatsAppCTA";
import CountUp from "../components/CountUp";
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
    title: "Five verticals, one team",
    desc: "Play school, study material, marketing, HR services and business consulting — all under one roof.",
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
  {
    kicker: "Business Consulting",
    title: "From zero to profitable",
    desc: "We help startups and existing companies build a plan, fix what's leaking and grow towards real profit.",
    to: "/business-consulting",
    cta: "See how we help →",
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
              A Ms Consultant company built around <em>five</em> things you need
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
            <svg viewBox="0 0 400 400" fill="none">
              {/* Rings behind (continuously rotating, opposite directions) */}
              <circle cx="200" cy="200" r="140" stroke="#E8B34C" strokeWidth="2" strokeDasharray="4 10" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="60s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="118" stroke="#E8B34C" strokeOpacity=".45" strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="90s" repeatCount="indefinite" />
              </circle>

              {/* Orbiting icons */}
              <g>
                <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="45s" repeatCount="indefinite" />
                {/* School (top) */}
                <g transform="translate(200 60) scale(.9)">
                  <g className="icon-shadow">
                    <rect x="-42" y="-6" width="84" height="9" rx="3" fill="#E8B34C" />
                    <rect x="-38" y="0" width="76" height="26" rx="4" fill="#1F3A6E" />
                    <rect x="-15" y="-28" width="30" height="54" rx="4" fill="#1F3A6E" />
                    <polygon points="-22,-28 0,-46 22,-28" fill="#E8B34C" />
                    <line x1="0" y1="-46" x2="0" y2="-62" stroke="#1F3A6E" strokeWidth="3" strokeLinecap="round" />
                    <path d="M0 -62h15l-5 5 5 5h-15z" fill="#1F3A6E" />
                    <rect x="-8" y="-20" width="16" height="12" rx="3" fill="#F4F1EA" />
                    <rect x="-31" y="8" width="14" height="9" rx="2" fill="#F4F1EA" />
                    <rect x="17" y="8" width="14" height="9" rx="2" fill="#F4F1EA" />
                    <rect x="-6" y="8" width="12" height="18" rx="3" fill="#F4F1EA" />
                  </g>
                </g>

                {/* Book (top-right) */}
                <g transform="translate(333 157) scale(.9)">
                  <g className="icon-shadow">
                    <rect x="-42" y="-24" width="84" height="52" rx="6" fill="#1F3A6E" />
                    <path d="M-37 -21 Q-18 -28 0 -17 V24 Q-18 14 -37 20Z" fill="#F7F0DC" />
                    <path d="M37 -21 Q18 -28 0 -17 V24 Q18 14 37 20Z" fill="#FBF6E8" />
                    <g stroke="#1F3A6E" strokeWidth="2" strokeLinecap="round">
                      <path d="M-30 -12 Q-18 -16 -7 -9" />
                      <path d="M-30 -3 Q-18 -7 -7 0" />
                      <path d="M-30 6 Q-18 2 -7 9" />
                      <path d="M30 -12 Q18 -16 7 -9" />
                      <path d="M30 -3 Q18 -7 7 0" />
                      <path d="M30 6 Q18 2 7 9" />
                    </g>
                    <path d="M10 22 h10 v18 l-5 -5 l-5 5z" fill="#E8B34C" />
                  </g>
                </g>

                {/* Laptop (bottom-right) */}
                <g transform="translate(282 313) scale(.9)">
                  <g className="icon-shadow">
                    <rect x="-36" y="-32" width="72" height="50" rx="6" fill="#1F3A6E" />
                    <rect x="-31" y="-27" width="62" height="40" rx="4" fill="#E8B34C" />
                    <rect x="-23" y="-21" width="46" height="28" rx="4" fill="#F7F0DC" />
                    <path d="M-17 2 L-8 -8 L0 -2 L12 -14" stroke="#E8B34C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="-16" y="-1" width="5" height="7" fill="#E8B34C" />
                    <rect x="-4" y="-5" width="5" height="11" fill="#E8B34C" />
                    <rect x="8" y="-9" width="5" height="15" fill="#E8B34C" />
                    <path d="M-46 22 H46 L40 32 H-40Z" fill="#1F3A6E" />
                  </g>
                </g>

                {/* Megaphone (bottom-left) */}
                <g transform="translate(118 313) scale(.9)">
                  <g className="icon-shadow">
                    <g transform="rotate(-22)">
                      <rect x="-14" y="8" width="14" height="30" rx="6" fill="#E8B34C" />
                      <path d="M-30 -12 H-4 L26 -34 Q36 0 26 34 L-4 12 H-30Z" fill="#E8B34C" />
                      <ellipse cx="26" cy="0" rx="9" ry="34" fill="#F2C65E" />
                      <rect x="-38" y="-14" width="12" height="28" rx="5" fill="#1F3A6E" />
                    </g>
                  </g>
                </g>

                {/* People (top-left) */}
                <g transform="translate(67 157) scale(.9)">
                  <g className="icon-shadow">
                    <path d="M-42 20 Q-44 2 -26 4 L-8 10" stroke="#1F3A6E" strokeWidth="11" strokeLinecap="round" />
                    <path d="M42 20 Q44 2 26 4 L8 10" stroke="#1F3A6E" strokeWidth="11" strokeLinecap="round" />
                    <path d="M-22 34 Q-22 8 0 8 Q22 8 22 34Z" fill="#1F3A6E" />
                    <circle cx="-24" cy="-18" r="11" fill="#1F3A6E" />
                    <circle cx="24" cy="-18" r="11" fill="#1F3A6E" />
                    <circle cx="0" cy="-8" r="13" fill="#1F3A6E" />
                  </g>
                </g>
              </g>

              {/* Centre dot */}
              <circle cx="200" cy="200" r="6" fill="#E8B34C">
                <animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="stats">
        <div className="wrap stat-grid">
          <div><div className="num"><CountUp value="24k+" /></div><div className="lbl">People placed</div></div>
          <div><div className="num"><CountUp value="6+" /></div><div className="lbl">Years in marketing</div></div>
          <div><div className="num"><CountUp value="60+" /></div><div className="lbl">Cities covered</div></div>
          <div><div className="num"><CountUp value="2019" /></div><div className="lbl">Operating since</div></div>
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

      {/* Five verticals */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">What we do</div>
            <h2>Five verticals, one company</h2>
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
                  <span className="muted">{t.service} · {t.city}</span>
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
            Whichever you need — tell us on WhatsApp.
          </p>
          <WhatsAppCTA message={`Hi ${COMPANY_NAME}, I have a requirement to discuss.`}>
            Message us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
