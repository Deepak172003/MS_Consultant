import { COMPANY_FULL_NAME, EMAIL } from "../data/constants";
import WhatsAppCTA from "../components/WhatsAppCTA";

export default function RefundPolicy() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Legal</div>

          <h1>Refund & Cancellation Policy</h1>

          <p className="muted">
            <strong>Effective Date:</strong> 5 October 2026
          </p>

          <p className="muted">
            At {COMPANY_FULL_NAME}, we aim to provide clear information about
            our services, pricing, payments, cancellations, and refunds. This
            Refund & Cancellation Policy explains the terms applicable to
            payments made for our services.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section>
        <div
          className="wrap panel-card"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {/* 1. Payments */}
          <div>
            <h2 style={{ marginBottom: 8 }}>1. Payments</h2>

            <p className="muted">
              Payments for {COMPANY_FULL_NAME} services may be collected through
              available payment methods such as UPI, debit/credit cards, net
              banking, or other payment methods made available through our
              payment provider.
            </p>

            <p className="muted">Payments may apply to services including:</p>

            <ul className="muted">
              <li>Play School Franchise Services</li>
              <li>Study Material & Test Software</li>
              <li>Marketing Services</li>
              <li>HR Services</li>
              <li>Business Consulting</li>
              <li>Other services specifically agreed with the client</li>
            </ul>

            <p className="muted">
              The applicable service fee, payment schedule, and scope of work
              will be communicated to the client before or at the time of
              payment.
            </p>

            <p className="muted">
              <strong>Important:</strong> A payment made through the website
              does not automatically guarantee approval, admission, franchise
              allocation, employment, placement, or any specific business
              outcome. Service delivery will be subject to the applicable
              service terms and requirements.
            </p>
          </div>

          {/* 2. NACH / Auto-debit */}
          <div>
            <h2 style={{ marginBottom: 8 }}>
              2. NACH / Auto-debit Mandates
            </h2>

            <p className="muted">
              {COMPANY_FULL_NAME} does not currently require NACH or automatic
              debit mandates unless specifically agreed with the client for an
              applicable recurring service.
            </p>

            <p className="muted">
              If an automatic payment mandate is introduced or agreed for a
              recurring service, the client will be informed of:
            </p>

            <ul className="muted">
              <li>The purpose of the recurring payment</li>
              <li>The applicable amount or payment schedule</li>
              <li>The expected debit date or frequency</li>
              <li>The process for cancelling or modifying the mandate</li>
            </ul>

            <p className="muted">
              Any applicable mandate will be subject to the terms and
              conditions of the relevant payment provider or banking
              institution.
            </p>
          </div>

          {/* 3. Cancellations */}
          <div>
            <h2 style={{ marginBottom: 8 }}>3. Cancellations</h2>

            <p className="muted">
              A client may request cancellation of a service by contacting{" "}
              {COMPANY_FULL_NAME} through WhatsApp or email.
            </p>

            <p className="muted">
              Cancellation requests should be submitted before the service has
              commenced whenever possible.
            </p>

            <p className="muted">
              Once a service has commenced, cancellation and refund eligibility
              will depend on:
            </p>

            <ul className="muted">
              <li>The type of service</li>
              <li>The stage of service delivery</li>
              <li>Work already completed</li>
              <li>Any third-party costs already incurred</li>
              <li>The specific terms agreed with the client</li>
            </ul>

            <p className="muted">
              Where a separate service agreement or quotation contains specific
              cancellation terms, those terms will take precedence for that
              particular service.
            </p>
          </div>

          {/* 4. Refund Eligibility */}
          <div>
            <h2 style={{ marginBottom: 8 }}>4. Refund Eligibility</h2>

            <p className="muted">
              Refunds will be considered based on the nature and stage of the
              service.
            </p>

            <h3 style={{ marginTop: 18, marginBottom: 8 }}>
              Generally Refundable
            </h3>

            <p className="muted">
              A payment may be eligible for a refund when:
            </p>

            <ul className="muted">
              <li>The service has not yet commenced.</li>
              <li>
                The refund request has been approved by {COMPANY_FULL_NAME}.
              </li>
              <li>
                {COMPANY_FULL_NAME} is unable to provide the agreed service for
                reasons attributable to the company.
              </li>
            </ul>

            <h3 style={{ marginTop: 18, marginBottom: 8 }}>
              Generally Non-Refundable
            </h3>

            <p className="muted">
              Payments may not be refundable where:
            </p>

            <ul className="muted">
              <li>The service has already been substantially delivered.</li>
              <li>
                Work, consultation, research, recruitment, marketing,
                development, or other agreed activities have already been
                performed.
              </li>
              <li>
                The client has provided incorrect, incomplete, or delayed
                information that affects service delivery.
              </li>
              <li>
                Third-party costs have already been incurred on behalf of the
                client.
              </li>
              <li>
                The payment relates to a service or fee that was expressly
                identified as non-refundable before payment.
              </li>
              <li>
                The client cancels after the agreed service commencement date,
                subject to the applicable service agreement.
              </li>
            </ul>

            <p className="muted">
              For customized or ongoing services such as Marketing, HR
              Services, Study Material & Test Software, and Business
              Consulting, refunds will be evaluated based on the amount of
              work already completed.
            </p>

            <p className="muted">
              Payment of a service fee does not guarantee a particular
              business, recruitment, marketing, franchise, or financial
              result. Refunds will not be provided solely because the expected
              business outcome was not achieved, where {COMPANY_FULL_NAME} has
              delivered the agreed scope of services.
            </p>
          </div>

          {/* 5. Refund Timeline */}
          <div>
            <h2 style={{ marginBottom: 8 }}>5. Refund Timeline</h2>

            <p className="muted">
              Once a refund has been approved, {COMPANY_FULL_NAME} will
              generally process the refund within <strong>7–10 business days</strong>.
            </p>

            <p className="muted">
              The refund will normally be made to the original payment method
              used for the transaction.
            </p>

            <p className="muted">
              The actual time taken for the amount to appear in the client's
              account may vary depending on the bank, card issuer, UPI
              provider, payment gateway, or other financial institution.
            </p>
          </div>

          {/* 6. Request Refund */}
          <div>
            <h2 style={{ marginBottom: 8 }}>
              6. How to Request a Refund or Cancellation
            </h2>

            <p className="muted">
              To request a cancellation or refund, please contact us through
              WhatsApp or email.
            </p>

            <p className="muted">
              Please include:
            </p>

            <ul className="muted">
              <li>Your full name</li>
              <li>Service booked</li>
              <li>Date of payment</li>
              <li>Payment/reference/transaction ID</li>
              <li>Reason for cancellation or refund request</li>
              <li>Registered phone number or email address</li>
            </ul>

            <p className="muted">
              Refund requests will be reviewed and the client will be informed
              of the decision.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 14,
                flexWrap: "wrap",
              }}
            >
              <WhatsAppCTA message="Hi, I'd like to request a cancellation/refund.">
                Message us on WhatsApp
              </WhatsAppCTA>

              <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>
                Email {EMAIL}
              </a>
            </div>
          </div>

          {/* 7. Disputes */}
          <div>
            <h2 style={{ marginBottom: 8 }}>
              7. Refund Review & Disputes
            </h2>

            <p className="muted">
              All refund and cancellation requests will be reviewed by the{" "}
              {COMPANY_FULL_NAME} management/support team based on the
              applicable service terms, payment details, and work completed.
            </p>

            <p className="muted">
              If you have a concern regarding a payment, cancellation, or
              refund decision, please contact us first so that we can review
              and resolve the matter.
            </p>

            <p className="muted">
              <strong>Contact:</strong>
            </p>

            <p className="muted">
              {COMPANY_FULL_NAME}
              <br />
              WhatsApp: +91 70042 37947
              <br />
              Email: {EMAIL}
            </p>
          </div>

          {/* Last Updated */}
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              paddingTop: 18,
            }}
          >
            <p className="muted" style={{ fontSize: ".85rem" }}>
              <strong>Last Updated:</strong> 5 October 2026
            </p>

            <p className="muted" style={{ fontSize: ".85rem" }}>
              {COMPANY_FULL_NAME} reserves the right to update or modify this
              Refund & Cancellation Policy when necessary. The updated policy
              will be published on this page with the revised effective date.
              The version applicable to a particular payment will generally be
              the version in effect when the payment was made, unless otherwise
              required by law or specifically agreed with the client.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
