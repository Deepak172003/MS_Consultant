import { Link } from "react-router-dom";
import WhatsAppCTA from "../components/WhatsAppCTA";
import { ADDRESS, COMPANY_NAME, VERTICALS } from "../data/constants";
import krishnaImg from "../assets/Krishana.webp"; // your founder photo

const team = [
  {
    name: "Krishna Kr. Barnwal",
    role: "Founder & Chairman",
    img: krishnaImg,
    linkedin: "https://www.linkedin.com/in/krishna-kumar-barnwal-350124193"
  },
  { name: "Rajesh Kr. Pandit", role: "Sr. Manager" },
  { name: "Priyanka Rajput", role: "Jr. Manager" },
  { name: "Dolly Kumari", role: "Jr. Manager" },
  { name: "Monika Kumari", role: "Sr. Sales Executive" },
  { name: "Archana Kumari", role: "Sales Executive" },
  { name: "Komal Kumari", role: "Recruiter" },
  { name: "Shivan Kumar", role: "Digital Marketing Specialist" },
];

function initials(name) {
  return name
   .split(" ")
   .filter((w) => /^[A-Za-z]/.test(w))
   .slice(0, 2)
   .map((w) => w[0].toUpperCase())
   .join("");
}

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Since 2019</div>
          <h1>One Ms Consultant company, five ways we help</h1>
          <p>
            {COMPANY_NAME} is a company covering Play School
            franchise, study material & test software, marketing, HR
            services and business consulting — based in Bokaro (Head Office) & Ranchi.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap panel-card">
          <div className="kicker">Our story</div>
          <p className="muted">
            {COMPANY_NAME} started as a faculty placement service and grew
            into an edtech company as the same problem kept showing up in
            different forms — institutes needed good teachers, good
            marketing, and reliable study material, and parents wanted a
            trustworthy early-education option. Rather than staying a single
            service, we built five focused teams under one company so a
            partner can come to us for more than one thing without starting
            from zero each time.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap grid-2x2">
          {VERTICALS.map((v) => (
            <div className="panel-card" key={v.key}>
              <h2 style={{ fontSize: "1.2rem" }}>{v.label}</h2>
              <Link to={v.path} className="muted" style={{ fontSize: ".88rem" }}>
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Our people</div>
            <h2>Core team</h2>
          </div>
          <div className="grid-3">
            {team.map((m) => (
              <div className="card team-card" key={m.name}>
                {m.img? (
                  <img
                    src={m.img}
                    alt={m.name}
                    className="team-photo"
                  />
                ) : (
                  <div className="team-photo team-photo-fallback" aria-hidden="true">
                    {initials(m.name)}
                  </div>
                )}
                <h3>{m.name}</h3>
                <p className="muted">{m.role}</p>

                {/* LinkedIn Connect Button */}
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "10px",
                      padding: "6px 12px",
                      background: "#0077b5",
                      color: "white",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      fontWeight: "500"[STRIPPED 75 bytes]"16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0.774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.205 24 24 23.227 24 22.271V1.729C24.774 23.205 0 22.225 0z"/>
                    </svg>
                    Connect
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap cta-band">
          <h2>Visit or message us</h2>
          <p className="muted">{ADDRESS}</p>
          <WhatsAppCTA message={`Hi, I'd like to know more about ${COMPANY_NAME}.`}>
            Message us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
