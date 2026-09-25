import WhatsAppCTA from "../components/WhatsAppCTA";
import { PLAY_SCHOOL_HIGHLIGHTS, COMPANY_NAME } from "../data/constants";

export default function PlaySchool() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Play School Franchise</div>
          <h1>Start a play school with a partner who's done it before</h1>
          <p>
            {COMPANY_NAME} offers a play school franchise for people who want
            to run an early-childhood education centre with real support
            behind them — curriculum, training, admissions and marketing.
          </p>
          <WhatsAppCTA message="Hi, I'd like to know about the Play School franchise.">
            Ask about the franchise on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">What you get</div>
            <h2>Franchise support</h2>
          </div>
          <div className="grid-3">
            {PLAY_SCHOOL_HIGHLIGHTS.map((h) => (
              <div className="card" key={h.name}>
                <h3>{h.name}</h3>
                <p className="muted">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Who it's for</div>
            <h2>Is a Play School franchise right for you?</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>First-time entrepreneurs</h3>
              <p className="muted">
                Want to start an early-childhood education business without
                building curriculum and processes from scratch.
              </p>
            </div>
            <div className="card">
              <h3>Existing preschool owners</h3>
              <p className="muted">
                Running a preschool already and looking to rebrand, upgrade
                curriculum, or get structured marketing support.
              </p>
            </div>
            <div className="card">
              <h3>Educators</h3>
              <p className="muted">
                Teachers or education professionals who want to run their own
                centre with a proven model behind them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap panel-card">
          <h2>Interested in opening a branch?</h2>
          <p className="muted">
            Share your city and a bit about yourself on WhatsApp — we'll walk
            you through investment range, space requirements and next steps.
          </p>
          <WhatsAppCTA message="Hi, I'd like to open a Play School franchise in my city.">
            Message us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
