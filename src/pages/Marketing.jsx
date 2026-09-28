import WhatsAppCTA from "../components/WhatsAppCTA";
import { MARKETING_SERVICES, COMPANY_NAME } from "../data/constants";

export default function Marketing() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Marketing · Online & Offline</div>
          <h1>We grow brands that dominate online — and on the ground</h1>
          <p>
            From brand films to ad spend to local campaigns, {COMPANY_NAME}'s
            in-house marketing team handles every piece of your presence.
          </p>
          <WhatsAppCTA message="Hi, I'd like to discuss a marketing project.">
            Discuss your project on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">What we offer</div>
            <h2>Our marketing services</h2>
          </div>
          <div className="grid-3">
            {MARKETING_SERVICES.map((s) => (
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
                  message={`Hi, I'm interested in ${s.name}.`}
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
            <div className="kicker">Who it's for</div>
            <h2>Brands, franchise branches, and local businesses</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Growing brands</h3>
              <p className="muted">
                Need consistent content and paid campaigns to build an online
                presence from the ground up.
              </p>
            </div>
            <div className="card">
              <h3>Franchise branches</h3>
              <p className="muted">
                Need local marketing support to drive admissions or footfall
                for a specific city or branch.
              </p>
            </div>
            <div className="card">
              <h3>Local businesses</h3>
              <p className="muted">
                Want offline reach — print, local ads and on-ground
                campaigns — alongside a digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
