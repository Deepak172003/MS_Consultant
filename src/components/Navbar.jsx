import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import WhatsAppCTA from "./WhatsAppCTA";
import logo from "../assets/mslogo_ms_only.webp";
import { COMPANY_NAME } from "../data/constants";

// Kept short and to the point — the four verticals plus Home, About and
// Contact. Everything (including these) is also listed in the footer and
// the mobile menu.
const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/play-school", label: "Play School" },
  { to: "/study-material", label: "Study Material" },
  { to: "/marketing", label: "Marketing" },
  { to: "/hr-services", label: "HR Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// Full list for the mobile menu. Testimonials and FAQ live in the footer
// and as sections on the Home page — not repeated in the nav/menu.
const allLinks = [
  ...primaryLinks,
  { to: "/how-it-works", label: "How It Works" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <nav className="wrap navbar">
        <NavLink to="/" className="brand">
          <img src={logo} alt="Guruzan MS Consultant" className="logo-img" />
        </NavLink>

        <div className="navlinks">
          {primaryLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-actions">
          <WhatsAppCTA message={`Hi ${COMPANY_NAME}, I'd like to know more.`}>
            Chat on WhatsApp
          </WhatsAppCTA>
          <button
            className="hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          <div className="wrap">
            {allLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
