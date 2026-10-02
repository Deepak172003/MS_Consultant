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
  PRICING_PLANS,
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
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Pricing</div>
          <h1>Straightforward pricing, built around what you actually need</h1>
          <p>
            Every engagement is a little different, so the exact price
            depends on your requirement. Message us on WhatsApp for a quote,
            or pick a plan below to pay the starting price directly.
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
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Pay Now</div>
            <h2>Starting prices — pick a plan</h2>
            <p className="muted">
              These are starting prices; the final amount depends on your
              exact requirement. Pick the closest plan to pay now, or
              message us on WhatsApp to confirm the right one first.
            </p>
          </div>
          <div className="grid-3">
            {PRICING_PLANS.map((plan) => (
              <div className="card plan-card" key={plan.key}>
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  {plan.price}
                  <span>starting</span>
                </div>
                <p className="muted plan-tagline">{plan.tagline}</p>
                <ul className="dash-list">
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="plan-pay">
                  {plan.buttonId ? (
                    <RazorpayButton buttonId={plan.buttonId} />
                  ) : (
                    <WhatsAppCTA
                      message={`Hi ${COMPANY_NAME}, I'd like to go ahead with the ${plan.name} plan (${plan.price}).`}
                    >
                      Pay Now — {plan.price}
                    </WhatsAppCTA>
                  )}
                </div>
              </div>
            ))}
          </div>

          {RAZORPAY_SUBSCRIPTION_LINK && (
            <div className="panel-card pay-now-card" style={{ marginTop: 20 }}>
              <h3>Prefer monthly auto-debit (NACH) instead?</h3>
              <SubscriptionLinkButton link={RAZORPAY_SUBSCRIPTION_LINK} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
