import { Link } from "react-router-dom";
import WhatsAppCTA from "../components/WhatsAppCTA";
import { ADDRESS, COMPANY_NAME, VERTICALS } from "../data/constants";

// Auto-load every image from src/assets/Team (Vite).
// NOTE: folder name is case-sensitive on Linux hosts (Vercel/Netlify) —
// it must match your real folder name exactly.
const teamImages = import.meta.glob("/src/assets/Team/*.{webp,WEBP,jpg,JPG,jpeg,JPEG,png,PNG}", {
  eager: true,
  import: "default",
});

const imageMap = Object.fromEntries(
  Object.entries(teamImages).map(([path, url]) => [
    decodeURIComponent(path.split("/").pop()).toLowerCase(),
    url,
  ])
);

const getPhoto = (file) => (file ? imageMap[file.toLowerCase()] : undefined);

// First item is the founder and is shown alone in the center.
const team = [
  {
    name: "Krishna Kr. Barnwal",
    role: "Founder & Chairman","Business Consulting",
    photo: "Krishana-same.webp",
    linkedin: "https://www.linkedin.com/in/krishna-kumar-barnwal-350124193",
  },
  {
    name: "Rajesh Kr. Pandit",
    role: "Sr. Manager",
    photo: "rejesh-edited.webp",
    linkedin: "https://www.linkedin.com/in/rajesh-pandit-2b3b86283",
  },
  {
    name: "Priyanka Rajput",
    role: "Sales Manager",
    photo: "Priyanka_Sales.webp",
    linkedin: "https://www.linkedin.com/in/priyanka-rajput-31a621296",
  },
  {
    name: "Dolly Kumari",
    role: "Recruiter Manager",
    photo: "Dolly.webp",
    linkedin: "https://www.linkedin.com/in/dolly-saw-2750932a2",
  },
  {
    name: "Pankaj Kumar",
    role: "Operational Manager",
    photo: "Pankaj.webp",
    linkedin: "https://www.linkedin.com/in/pankaj-kumar-0868b9374",
  },
  {
    name: "Ashish Kumar",
    role: "Sales Executive",
    photo: "Aashish.webp",
    linkedin: "https://www.linkedin.com/in/ashish-kumar-4125a5368",
  },
  {
    name: "Sagar Barnwal",
    role: "Recruiter",
    photo: "Sagar.webp",
    linkedin: "https://www.linkedin.com/in/sagar-barnwal-8b26a9426",
  },
  {
    name: "Shivam Singh Rawat",
    role: "Digital Marketing Manager",
    photo: "Sagar.webp",
    linkedin: "https://www.linkedin.com/in/shivam-singh-rawat-30aa44118",
  },
];

// Dev-only warning if a photo filename doesn't match any file in the Team folder.
if (import.meta.env.DEV) {
  team.forEach((m) => {
    if (!getPhoto(m.photo)) console.warn("Missing team photo:", m.photo);
  });
}

function initials(name) {
  return name
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

const isValidLinkedIn = (url) => Boolean(url);

const [founder, ...others] = team;

function TeamCard({ m, featured = false }) {
  const photo = getPhoto(m.photo);
  return (
    <div className={`card team-card${featured ? " team-card-featured" : ""}`}>
      {photo ? (
        <img
          src={photo}
          alt={`${m.name}, ${m.role.trim()}`}
          className={`team-photo${featured ? " team-photo-featured" : ""}`}
          loading="lazy"
        />
      ) : (
        <div className="team-photo team-photo-fallback">{initials(m.name)}</div>
      )}
      <h3>{m.name}</h3>
      <p className="muted">{m.role.trim()}</p>
      {isValidLinkedIn(m.linkedin) && (
        <a
          href={m.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-btn"
        >
          Connect on LinkedIn
        </a>
      )}
    </div>
  );
}

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

          {/* Founder in the center */}
          <div className="team-lead">
            <TeamCard m={founder} featured />
          </div>

          {/* Everyone else below, centered */}
          <div className="team-row">
            {others.map((m) => (
              <TeamCard m={m} key={m.name} />
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
