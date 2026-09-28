import { waLink } from "../data/constants";

// Inline WhatsApp button used inside hero sections, cards, and CTA bands.
export default function WhatsAppCTA({ message, children, variant = "primary" }) {
  return (
    <a
      className={`btn btn-${variant}`}
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || "Message us on WhatsApp"}
    </a>
  );
}
