import { COMPANY_FULL_NAME, EMAIL } from "../data/constants";
import WhatsAppCTA from "../components/WhatsAppCTA";

export default function RefundPolicy() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1>Refund & Cancellation Policy</h1>
          <p className="muted">
           Effective Date: 5 October 2026
At MS Consultant, we aim to provide clear information about our services, pricing, payments, cancellations, and refunds. This Refund & Cancellation Policy explains the terms applicable to payments made for our services.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap panel-card" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div>
            <h2 style={{ marginBottom: 8 }}>1. Payments</h2>
            <p className="muted">
              Payments may be collected via {"{{ payment methods — e.g. UPI, card, netbanking, NACH auto-debit }}"}.
              {" "}{"{{ Which services actually require payment through the site — Play School admission, franchise fee, something else? }}"}
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: 8 }}>2. NACH / Auto-debit mandates</h2>
            <p className="muted">
              {"{{ If a NACH mandate is set up for recurring fees, explain here: what it's for (e.g. monthly play school fee), how the amount and date are decided, and how a parent/client can cancel or change the mandate. }}"}
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: 8 }}>3. Cancellations</h2>
            <p className="muted">
              {"{{ How many days before a service/admission can someone cancel? Is there a cancellation fee? }}"}
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: 8 }}>4. Refund eligibility</h2>
            <p className="muted">
              {"{{ What is and isn't refundable — e.g. registration fee non-refundable, first month's fee refundable within 7 days, franchise deposit refundable only before agreement signing, etc. Be specific — this is the core of the policy. }}"}
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: 8 }}>5. Refund timeline</h2>
            <p className="muted">
              {"{{ How many business days does a refund take once approved, and how is it paid back (same payment method / bank transfer)? }}"}
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: 8 }}>6. How to request a refund or cancellation</h2>
            <p className="muted">
              To request a cancellation or refund, contact us on WhatsApp or
              email with your name, the service booked, and the payment
              reference/date.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
              <WhatsAppCTA message="Hi, I'd like to request a cancellation/refund.">
                Message us on WhatsApp
              </WhatsAppCTA>
              <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>
                Email {EMAIL}
              </a>
            </div>
          </div>

          <div>
            <h2 style={{ marginBottom: 8 }}>7. Contact for disputes</h2>
            <p className="muted">
              {"{{ Who handles disputes — a specific person, department, or the same WhatsApp/email above? }}"}
            </p>
          </div>

          <p className="muted" style={{ fontSize: ".8rem" }}>
            Last updated: {"{{ date }}"}. This policy may be revised from
            time to time; the current version on this page applies to all
            payments made after it is updated.
          </p>
        </div>
      </section>
    </>
  );
}
