import { useEffect, useRef } from "react";

// One-time payment button — embeds Razorpay's own hosted checkout.
// No backend, no secret key here: buttonId is a public identifier only,
// safe to ship in frontend code. Create it in Razorpay Dashboard →
// Payment Pages/Buttons, then set RAZORPAY_BUTTON_ID in constants.js.
export default function RazorpayButton({ buttonId }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (!buttonId || !formRef.current) return;
    formRef.current.innerHTML = ""; // avoid duplicate scripts on re-render
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.dataset.payment_button_id = buttonId;
    formRef.current.appendChild(script);
  }, [buttonId]);

  if (!buttonId) return null;
  return <form ref={formRef} />;
}
