import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import WhatsAppCTA from "./WhatsAppCTA";
import logo from "../assets/mslogo_ms_only.webp";
import { COMPANY_NAME, VERTICALS } from "../data/constants";

// Desktop nav: Home, a "Services" dropdown (all five verticals), Pricing,
// About, Contact. Short and flat, with the verticals tucked under one menu
// instead of five separate top-level links.
const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// Full flat list for the mobile menu — services included here individually
// since there's no room for a hover dropdown on mobile.
const allLinks = [
  { to: "/", label: "Home" },
  ...VERTICALS.map((v) => ({ to: v.path, label: v.label })),
  { to: "/pricing", label: "Pricing" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const servicesRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Close the Services dropdown on outside click (mouse) — keyboard users
  // get it via onBlur on the wrapper, handled inline below.
  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [servicesOpen]);

  const servicesActive = VERTICALS.some((v) => location.pathname === v.path);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav className="wrap navbar">
        <NavLink to="/" className="brand">
          <img src={logo} alt="Guruzan MS Consultant" className="logo-img" />
        </NavLink>

        <div className="navlinks">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>

          <div
            className="nav-dropdown"
            ref={servicesRef}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setServicesOpen(false);
            }}
          >
            <button
              type="button"
              className={`nav-dropdown-trigger${servicesActive ? " active" : ""}`}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((o) => !o)}
            >
              Services
              <svg viewBox="0 0 12 8" width="10" height="7" aria-hidden="true">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="nav-dropdown-menu">
                {VERTICALS.map((v) => (
                  <NavLink
                    key={v.path}
                    to={v.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setServicesOpen(false)}
                  >
                    {v.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {primaryLinks.slice(1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
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
            className={`hamburger${open ? " is-open" : ""}`}
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
