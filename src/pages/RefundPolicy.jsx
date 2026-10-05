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
          <p> Effective Date: 5 October 2026</p>
At MS Consultant, we aim to provide clear information about our services, pricing, payments, cancellations, and refunds. This Refund & Cancellation Policy explains the terms applicable to payments made for our services.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap panel-card" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div>
            <h2 style={{ marginBottom: 8 }}>1. Payments</h2>
            <p className="muted">
              Payments may be collected via {"Payments for MS Consultant services may be collected through available payment methods such as UPI, debit/credit cards, net banking, or other payment methods made available through our payment provider.
Payments may apply to services including:
- Play School Franchise Services
- Study Material & Test Software
- Marketing Services
- HR Services
- Business Consulting
- Other services specifically agreed with the client
The applicable service fee, payment schedule, and scope of work will be communicated to the client before or at the time of payment.
Important: A payment made through the website does not automatically guarantee approval, admission, franchise allocation, employment, placement, or any specific business outcome. Service delivery will be subject to the applicable service terms and requirements."}
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: 8 }}>2. NACH / Auto-debit mandates</h2>
            <p className="muted">
              {"MS Consultant does not currently require NACH or automatic debit mandates unless specifically agreed with the client for an applicable recurring service.
If an automatic payment mandate is introduced or agreed for a recurring service, the client will be informed of:
- The purpose of the recurring payment
- The applicable amount or payment schedule
- The expected debit date or frequency
- The process for cancelling or modifying the mandate
Any applicable mandate will be subject to the terms and conditions of the relevant payment provider or banking institution."}
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: 8 }}>3. Cancellations</h2>
            <p className="muted">
              {"A client may request cancellation of a service by contacting MS Consultant through WhatsApp or email.
Cancellation requests should be submitted before the service has commenced whenever possible.
Once a service has commenced, cancellation and refund eligibility will depend on:
- The type of service
- The stage of service delivery
- Work already completed
- Any third-party costs already incurred
- The specific terms agreed with the client
Where a separate service agreement or quotation contains specific cancellation terms, those terms will take precedence for that particular service."}
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: 8 }}>4. Refund eligibility</h2>
            <p className="muted">
              {"Refunds will be considered based on the nature and stage of the service.
Generally refundable
A payment may be eligible for a refund when:
- The service has not yet commenced; and
- The refund request is approved by MS Consultant; or
- MS Consultant is unable to provide the agreed service for reasons attributable to MS Consultant.
Generally non-refundable
Payments may not be refundable where:
- The service has already been substantially delivered.
- Work, consultation, research, recruitment, marketing, development, or other agreed activities have already been performed.
- The client has provided incorrect, incomplete, or delayed information that affects service delivery.
- Third-party costs have already been incurred on behalf of the client.
- The payment relates to a service or fee that was expressly identified as non-refundable before payment.
- The client cancels after the agreed service commencement date, subject to the applicable service agreement.
For customized or ongoing services such as Marketing, HR Services, Study Material & Test Software, and Business Consulting, refunds will be evaluated based on the amount of work already completed.
Payment of a service fee does not guarantee a particular business, recruitment, marketing, franchise, or financial result. Refunds will not be provided solely because the expected business outcome was not achieved, where MS Consultant has delivered the agreed scope of services."}
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: 8 }}>5. Refund timeline</h2>
            <p className="muted">
              {"Once a refund has been approved, MS Consultant will generally process the refund within 7–10 business days.
The refund will normally be made to the original payment method used for the transaction.
The actual time taken for the amount to appear in the client's account may vary depending on the bank, card issuer, UPI provider, payment gateway, or other financial institution."}
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: 8 }}>6. How to request a refund or cancellation</h2>
            <p className="muted">
              To request a cancellation or refund, please contact us through WhatsApp or email.
Please include:
- Your full name
- Service booked
- Date of payment
- Payment/reference/transaction ID
- Reason for cancellation or refund request
- Registered phone number or email address
Refund requests will be reviewed and the client will be informed of the decision.
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
            <h2 style={{ marginBottom: 8 }}>7. Refund Review & Disputes</h2>
            <p className="muted">
              {"All refund and cancellation requests will be reviewed by the MS Consultant management/support team based on the applicable service terms, payment details, and work completed.
If you have a concern regarding a payment, cancellation, or refund decision, please contact us first so that we can review and resolve the matter.
Contact:
MS Consultant
WhatsApp: +91 70042 37947
Email: info@mscjobs.in"}
            </p>
          </div>

          <p className="muted" style={{ fontSize: ".8rem" }}>
            Last updated: {"5 October 2026"}. MS Consultant reserves the right to update or modify this Refund & Cancellation Policy when necessary.
The updated policy will be published on this page with the revised effective date. The version applicable to a particular payment will generally be the version in effect when the payment was made, unless otherwise required by law or specifically agreed with the client.
          </p>
        </div>
      </section>
    </>
  );
}
