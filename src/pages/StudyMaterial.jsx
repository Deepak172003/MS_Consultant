import WhatsAppCTA from "../components/WhatsAppCTA";
import { STUDY_MATERIAL_STREAMS, COMPANY_NAME } from "../data/constants";

export default function StudyMaterial() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Study Material & Test Software</div>
          <h1>Study material and testing built for results</h1>
          <p>
            {COMPANY_NAME} provides study material and test software across
            major streams — for institutes, coaching centres and students
            directly.
          </p>
          <WhatsAppCTA message="Hi, I'd like to know more about your study material / test software.">
            Ask us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Streams we cover</div>
            <h2>Study material & test streams</h2>
          </div>
          <div className="grid-3">
            {STUDY_MATERIAL_STREAMS.map((s) => (
              <div className="card" key={s.name}>
                <h3>{s.name}</h3>
                <p className="muted">{s.desc}</p>
                <WhatsAppCTA
                  variant="ghost"
                  message={`Hi, I'm interested in ${s.name} study material.`}
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
            <h2>Built for institutes, coaching centres and students</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Coaching institutes</h3>
              <p className="muted">
                Want ready-made, exam-aligned material instead of building an
                in-house content team.
              </p>
            </div>
            <div className="card">
              <h3>Schools</h3>
              <p className="muted">
                Looking for supplementary test series to track student
                readiness for competitive exams.
              </p>
            </div>
            <div className="card">
              <h3>Individual students</h3>
              <p className="muted">
                Preparing on your own and want structured material and
                practice tests for your stream.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap panel-card">
          <h2>For institutes</h2>
          <p className="muted">
            Looking to license or resell study material and test software
            under your own institute? Tell us your stream and student
            strength on WhatsApp.
          </p>
          <WhatsAppCTA message="Hi, I'd like to discuss study material / test software for my institute.">
            Message us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
