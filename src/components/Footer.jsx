import { Link } from "react-router-dom";
import { EMAIL, OFFICE_PHONE, OFFICES, COMPANY_NAME } from "../data/constants";
import logo from "../assets/ms_footer_medium.png";

const quickLinksA = [
  { to: "/", label: "Home" },
  { to: "/play-school", label: "Play School" },
  { to: "/study-material", label: "Study Material" },
  { to: "/marketing", label: "Marketing" },
  { to: "/hr-services", label: "HR Services" },
];

const quickLinksB = [
  { to: "/about", label: "About" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

function LinkList({ links }) {
  return (
    <ul className="footer-links">
      {links.map((l) => (
        <li key={l.to}>
          <Link to={l.to}>{l.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <img src={logo} alt={`${COMPANY_NAME} MS Consultant`} className="logo-img footer-logo" />
          <p className="muted">
            A Ms Consultant company built around Play School franchise, study
            material & test software, marketing, and HR services.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <LinkList links={quickLinksA} />
        </div>
        <div>
          <h4>More</h4>
          <LinkList links={quickLinksB} />
        </div>
        <div>
          <h4>Contact</h4>
          <p className="muted">{OFFICE_PHONE}</p>
          <p className="muted">{EMAIL}</p>
        </div>
        <div>
          <h4>Our Offices</h4>
          {OFFICES.map((o) => (
            <div key={o.city} className="footer-office">
              <p className="muted footer-office-name">{o.city}</p>
              {o.mapLink ? (
                <a
                  href={o.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-directions"
                >
                  Get Directions →
                </a>
              ) : (
                <span className="muted footer-directions-pending">
                  Map link coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="wrap copyright">
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        Designed and developed by <a href="https://www.orbitodigitalmedia.com/" target="_blank" rel="noopener noreferrer">Orbitodigital Media</a>.
        
      </div>
    </footer>
  );
}
