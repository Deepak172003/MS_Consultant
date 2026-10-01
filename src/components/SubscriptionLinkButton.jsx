
// NACH / recurring auto-debit — a Subscription Link created in Razorpay
// Dashboard (Subscriptions → Plan → Create Link). Opening it lets the
// customer authorize their bank mandate on Razorpay's own hosted page;
// no backend needed here either.
export default function SubscriptionLinkButton({ link, children = "Set Up Auto-Debit (NACH)" }) {
  if (!link) return null;
  return (
    <a className="btn btn-primary" href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
