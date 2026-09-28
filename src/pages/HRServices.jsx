import WhatsAppCTA from "../components/WhatsAppCTA";
import { HR_SERVICE_STREAMS, COMPANY_NAME } from "../data/constants";

export default function HRServices() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">HR Services</div>
          <h1>Faculty & staff placements for every major stream</h1>
          <p>
            {COMPANY_NAME} provides faculty and staff for IIT-JEE, NEET and
            more — matching institutes with qualified people across India.
          </p>
          <WhatsAppCTA message="Hi, I'd like to discuss an HR / faculty requirement.">
            Send us your requirement on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Streams we cover</div>
            <h2>Faculty & staff placements</h2>
          </div>
          <div className="grid-3">
            {HR_SERVICE_STREAMS.map((s) => (
              <div className="card" key={s.name}>
                <h3>{s.name}</h3>
                <p className="muted">{s.desc}</p>
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
            <h2>For institutes hiring, and people looking to be hired</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Coaching institutes</h3>
              <p className="muted">
                Hiring subject faculty for IIT-JEE, NEET, Board or Foundation
                batches without running your own hiring process.
              </p>
            </div>
            <div className="card">
              <h3>Schools & play schools</h3>
              <p className="muted">
                Need teaching or support staff, including for franchise
                branches under our Play School vertical.
              </p>
            </div>
            <div className="card">
              <h3>Faculty & job seekers</h3>
              <p className="muted">
                Looking for your next teaching role and want direct,
                fast-moving contact instead of job portals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap panel-card">
          <h2>For institutes & businesses</h2>
          <p className="muted">
            Tell us the role, level and city — we shortlist qualified
            candidates from our network and share profiles directly.
          </p>
          <h2 style={{ marginTop: 24 }}>For job seekers</h2>
          <p className="muted">
            Share your subject/role, experience and preferred cities on
            WhatsApp — we'll match you with open positions and support you
            through the interview process.
          </p>
          <WhatsAppCTA message="Hi, I'd like to apply / share an opening.">
            Message us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
