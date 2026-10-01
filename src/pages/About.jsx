import { Link } from "react-router-dom";
import WhatsAppCTA from "../components/WhatsAppCTA";
import { ADDRESS, COMPANY_NAME, VERTICALS } from "../data/constants";

// Auto-load every image from src/assets/team (Vite)
const teamImages = import.meta.glob("/src/assets/team/*.{webp,jpg,jpeg,png}", {
  eager: true,
  import: "default",
});
const getPhoto = (file) => (file ? teamImages[`/src/assets/team/${file}`] : undefined);

const team = [
  {
    name: "Krishna Kr. Barnwal",
    role: "Founder & Chairman",
    photo: "krishna.webp",
    linkedin: "https://www.linkedin.com/in/krishna-kumar-barnwal-350124193",
  },
  {
    name: "Rajesh Kr. Pandit",
    role: "Sr. Manager",
    photo: "rajesh-pandit.webp",
    linkedin: "https://www.linkedin.com/in/REPLACE-ID",
  },
  {
    name: "Priyanka Rajput",
    role: "Jr. Manager",
    photo: "priyanka-rajput.webp",
    linkedin: "https://www.linkedin.com/in/REPLACE-ID",
  },
  {
    name: "Dolly Kumari",
    role: "Jr. Manager",
    photo: "dolly-kumari.webp",
    linkedin: "https://www.linkedin.com/in/REPLACE-ID",
  },
  {
    name: "Monika Kumari",
    role: "Sr. Sales Executive",
    photo: "monika-kumari.webp",
    linkedin: "https://www.linkedin.com/in/REPLACE-ID",
  },
  {
    name: "Archana Kumari",
    role: "Sales Executive",
    photo: "archana-kumari.webp",
    linkedin: "https://www.linkedin.com/in/REPLACE-ID",
  },
  {
    name: "Komal Kumari",
    role: "Recruiter",
    photo: "komal-kumari.webp",
    linkedin: "https://www.linkedin.com/in/REPLACE-ID",
  },
  {
    name: "Shivan Kumar",
    role: "Digital Marketing Specialist",
    photo: "shivan-kumar.webp",
    linkedin: "https://www.linkedin.com/in/REPLACE-ID",
  },
];

function initials(name) {
  return name
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

const isValidLinkedIn = (url) => url && !url.includes("REPLACE-ID");

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Since 2019</div>
          <h1>One Ms Consultant company, five ways we help</h1>
          <p>
            {COMPANY_NAME} is a company covering Play School franchise, study material & test
            software, marketing, HR services and business consulting — based in Bokaro (Head
            Office) & Ranchi.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap panel-card">
          <div className="kicker">Our story</div>
          <p className="muted">
            {COMPANY_NAME} started as a faculty placement service and grew into an edtech company
            as the same problem kept showing up in different forms — institutes needed good
            teachers, good marketing, and reliable study material, and parents wanted a
            trustworthy early-education option.
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
            {team.map((m) => {
              const photo = getPhoto(m.photo);
              return (
                <div className="card team-card" key={m.name}>
                  {photo ? (
                    <img src={photo} alt={m.name} className="team-photo" loading="lazy" />
                  ) : (
                    <div className="team-photo team-photo-fallback">{initials(m.name)}</div>
                  )}
                  <h3>{m.name}</h3>
                  <p className="muted">{m.role}</p>
                  {isValidLinkedIn(m.linkedin) && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        marginTop: "10px",
                        padding: "6px 12px",
                        background: "#0077b5",
                        color: "white",
                        borderRadius: "6px",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                      }}
                    >
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              );
            })}
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
