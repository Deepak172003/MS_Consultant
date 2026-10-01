import { Link } from "react-router-dom";
import WhatsAppCTA from "../components/WhatsAppCTA";
import RazorpayButton from "../components/RazorpayButton";
import SubscriptionLinkButton from "../components/SubscriptionLinkButton";
import {
  VERTICALS,
  PLAY_SCHOOL_HIGHLIGHTS,
  STUDY_MATERIAL_STREAMS,
  MARKETING_SERVICES,
  HR_SERVICE_STREAMS,
  BUSINESS_CONSULTING_SERVICES,
  RAZORPAY_BUTTON_ID,
  RAZORPAY_SUBSCRIPTION_LINK,
  COMPANY_NAME,
} from "../data/constants";

// Each card pulls a short "what's included" list from that vertical's own
// data, so this page never drifts out of sync with the vertical pages.
const serviceDetails = {
  "play-school": { items: PLAY_SCHOOL_HIGHLIGHTS.map((i) => i.name) },
  "study-material": { items: STUDY_MATERIAL_STREAMS.map((i) => i.name) },
  marketing: { items: MARKETING_SERVICES.map((i) => i.name) },
  "hr-services": { items: HR_SERVICE_STREAMS.map((i) => i.name) },
  "business-consulting": { items: BUSINESS_CONSULTING_SERVICES.map((i) => i.name) },
};

export default function Pricing() {
  const hasPayment = Boolean(RAZORPAY_BUTTON_ID || RAZORPAY_SUBSCRIPTION_LINK);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Pricing</div>
          <h1>Straightforward pricing, built around what you actually need</h1>
          <p>
            Every engagement is a little different, so the exact price
            depends on your requirement. Message us on WhatsApp for a quote,
            or pay a quoted amount directly below once you have one.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Our services</div>
            <h2>Five ways we can help</h2>
          </div>
          <div className="grid-3">
            {VERTICALS.map((v) => (
              <div className="card pricing-card" key={v.key}>
                <h3>{v.label}</h3>
                <ul className="dash-list">
                  {serviceDetails[v.key].items.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="pricing-card-actions">
                  <Link to={v.path} className="btn btn-ghost">
                    Learn more →
                  </Link>
                  <WhatsAppCTA message={`Hi ${COMPANY_NAME}, I'd like a quote for ${v.label}.`}>
                    Get a quote
                  </WhatsAppCTA>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap panel-card pay-now-card">
          <div className="kicker">Pay Now</div>
          <h2>Already have a quoted amount?</h2>
          <p className="muted">
            Pay a one-time amount, or set up auto-debit (NACH) for a
            recurring fee — both handled securely through Razorpay.
          </p>

          {hasPayment ? (
            <div className="pay-now-options">
              {RAZORPAY_BUTTON_ID && (
                <div>
                  <h3>One-time payment</h3>
                  <RazorpayButton buttonId={RAZORPAY_BUTTON_ID} />
                </div>
              )}
              {RAZORPAY_SUBSCRIPTION_LINK && (
                <div>
                  <h3>Recurring (NACH)</h3>
                  <SubscriptionLinkButton link={RAZORPAY_SUBSCRIPTION_LINK} />
                </div>
              )}
            </div>
          ) : (
            <div className="pay-now-pending">
              <p className="muted" style={{ marginBottom: 14 }}>
                Online payment is being set up. For now, message us on
                WhatsApp to arrange payment.
              </p>
              <WhatsAppCTA message={`Hi ${COMPANY_NAME}, I'd like to make a payment.`}>
                Message us on WhatsApp
              </WhatsAppCTA>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
