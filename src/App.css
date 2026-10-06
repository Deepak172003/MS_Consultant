import { useState } from "react";
import WhatsAppCTA from "./WhatsAppCTA";
import { FORM_ENDPOINT } from "../data/constants";

// Generic requirement-form renderer, driven by a field config (see
// constants.js — HR_ENQUIRY_FIELDS, PLAY_SCHOOL_ENQUIRY_FIELDS, etc).
//
// HOW SUBMISSIONS REACH YOUR EMAIL:
// This is a static site with no backend of its own, so the form posts to
// Formspree (https://formspree.io) — a free service that forwards form
// submissions straight to an inbox, no server needed on our side.
//   1. Create a free account at formspree.io
//   2. Create a new form, and it gives you an endpoint like
//      https://formspree.io/f/abcdwxyz
//   3. Paste that into FORM_ENDPOINT in src/data/constants.js
// Until that's set, submissions will fail gracefully and the visitor is
// pointed to WhatsApp instead — so nothing is ever silently lost.
export default function EnquiryForm({ title, note, fields, formName, whatsappMessage }) {
  const [values, setValues] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const endpointConfigured = FORM_ENDPOINT && !FORM_ENDPOINT.includes("XXXXXXX");

  function setField(name, val) {
    setValues((v) => ({ ...v, [name]: val }));
  }

  function toggleCheckbox(name, option) {
    setValues((v) => {
      const current = v[name] ? v[name].split(", ").filter(Boolean) : [];
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...v, [name]: next.join(", ") };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!endpointConfigured) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: (() => {
          const fd = new FormData();
          fd.append("_subject", `${formName} — new enquiry`);
          fd.append("Form", formName);
          fields.forEach((f) => {
            const val = values[f.name];
            if (f.type === "file") {
              // Formspree accepts file uploads the same way a normal HTML
              // form would (multipart/form-data) — no extra setup needed.
              if (val) fd.append(f.label, val, val.name);
            } else {
              fd.append(f.label, val || "");
            }
          });
          return fd;
        })(),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="panel-card enquiry-form">
        <h2>{title}</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          Thanks — your requirement has been sent to our team. We'll get in
          touch shortly. For faster contact, you can also message us on
          WhatsApp right away.
        </p>
        <WhatsAppCTA message={whatsappMessage}>Message us on WhatsApp</WhatsAppCTA>
      </div>
    );
  }

  return (
    <div className="panel-card enquiry-form">
      <h2>{title}</h2>
      {note && <p className="muted form-note-plain">{note}</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        {fields.map((f) => (
          <div key={f.name} className="form-field">
            <label>
              {f.label}
              {f.required && <span className="req">*</span>}
            </label>

            {f.type === "textarea" ? (
              <textarea
                rows={3}
                required={f.required}
                value={values[f.name] || ""}
                onChange={(e) => setField(f.name, e.target.value)}
                placeholder={f.placeholder}
              />
            ) : f.type === "select" ? (
              <select
                required={f.required}
                value={values[f.name] || ""}
                onChange={(e) => setField(f.name, e.target.value)}
              >
                <option value="" disabled>
                  Select…
                </option>
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : f.type === "radio" ? (
              <div className="radio-row">
                {f.options.map((o) => (
                  <label key={o} className="radio-option">
                    <input
                      type="radio"
                      name={f.name}
                      value={o}
                      required={f.required}
                      checked={values[f.name] === o}
                      onChange={(e) => setField(f.name, e.target.value)}
                    />
                    {o}
                  </label>
                ))}
              </div>
            ) : f.type === "checkboxGroup" ? (
              <div className="radio-row">
                {f.options.map((o) => (
                  <label key={o} className="radio-option">
                    <input
                      type="checkbox"
                      checked={(values[f.name] || "").split(", ").includes(o)}
                      onChange={() => toggleCheckbox(f.name, o)}
                    />
                    {o}
                  </label>
                ))}
              </div>
            ) : f.type === "file" ? (
              // File inputs can't have a React-controlled "value" (browsers
              // block it for security), so this one just reads the picked
              // file on change instead of following the usual pattern.
              <input
                type="file"
                required={f.required}
                accept={f.accept}
                onChange={(e) => setField(f.name, e.target.files[0] || null)}
              />
            ) : (
              <input
                type={f.type || "text"}
                required={f.required}
                value={values[f.name] || ""}
                onChange={(e) => setField(f.name, e.target.value)}
                placeholder={f.placeholder}
              />
            )}
          </div>
        ))}

        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit Requirement"}
        </button>

        {status === "error" && (
          <p className="form-error">
            {endpointConfigured
              ? "Something went wrong sending this — please try again, or use WhatsApp below."
              : "Email submissions aren't connected yet — please use WhatsApp below instead."}
          </p>
        )}
      </form>

      <div className="form-whatsapp-fallback">
        <p className="muted" style={{ marginBottom: 10 }}>
          Prefer to just message us directly?
        </p>
        <WhatsAppCTA variant="ghost" message={whatsappMessage}>
          WhatsApp instead
        </WhatsAppCTA>
      </div>
    </div>
  );
}
