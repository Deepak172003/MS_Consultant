import { useParams, Link } from "react-router-dom";
import EnquiryForm from "../components/EnquiryForm";
import {
  HR_ENQUIRY_FIELDS,
  FACULTY_REGISTRATION_FIELDS,
  PLAY_SCHOOL_ENQUIRY_FIELDS,
  STUDY_MATERIAL_ENQUIRY_FIELDS,
  MARKETING_ENQUIRY_FIELDS,
  BUSINESS_CONSULTING_ENQUIRY_FIELDS,
} from "../data/constants";

// One config per vertical — this is the single source of truth for each
// form's title/note/fields now. The matching vertical page just links here
// instead of rendering the form inline.
const CONFIGS = {
  "hr-services": {
    title: "Faculty Hiring Request",
    note: "Please fill this out to share your faculty requirement — our team will get in touch shortly with the best-matched teachers for your institute.",
    fields: HR_ENQUIRY_FIELDS,
    formName: "HR Services — Faculty Hiring Request",
    whatsappMessage: "Hi, I want to share my faculty requirement.",
    backTo: "/hr-services",
    backLabel: "HR Services",
  },
  "faculty-registration": {
    title: "Faculty Registration",
    note: "Looking for a teaching role? Share your details and resume — our team will match you with current openings.",
    fields: FACULTY_REGISTRATION_FIELDS,
    formName: "HR Services — Faculty Registration",
    whatsappMessage: "Hi, I'd like to register as faculty and share my resume.",
    backTo: "/hr-services",
    backLabel: "HR Services",
  },
  "play-school": {
    title: "Play School Franchise Enquiry",
    note: "Share a few details about you and your city — our team will get in touch with the franchise details and next steps.",
    fields: PLAY_SCHOOL_ENQUIRY_FIELDS,
    formName: "Play School — Franchise Enquiry",
    whatsappMessage: "Hi, I'd like to know about the Play School franchise.",
    backTo: "/play-school",
    backLabel: "Play School",
  },
  "study-material": {
    title: "Study Material Request",
    note: "Tell us your stream and requirement — our team will share the right material and pricing.",
    fields: STUDY_MATERIAL_ENQUIRY_FIELDS,
    formName: "Study Material — Request",
    whatsappMessage: "Hi, I'd like to request study material / test software.",
    backTo: "/study-material",
    backLabel: "Study Material",
  },
  marketing: {
    title: "Marketing Service Request",
    note: "Tell us about your business and what you need — our team will get back with a plan.",
    fields: MARKETING_ENQUIRY_FIELDS,
    formName: "Marketing — Service Request",
    whatsappMessage: "Hi, I'd like to discuss a marketing project.",
    backTo: "/marketing",
    backLabel: "Marketing",
  },
  "business-consulting": {
    title: "Business Consulting Enquiry",
    note: "Tell us about your business — our team will get in touch to understand your situation and next steps.",
    fields: BUSINESS_CONSULTING_ENQUIRY_FIELDS,
    formName: "Business Consulting — Enquiry",
    whatsappMessage: "Hi, I'd like to discuss my business and how you can help.",
    backTo: "/business-consulting",
    backLabel: "Business Consulting",
  },
};

export default function Enquiry() {
  const { type } = useParams();
  const config = CONFIGS[type];

  if (!config) {
    return (
      <section className="page-hero">
        <div className="wrap">
          <h1>Form not found</h1>
          <p className="muted">This requirement form doesn't exist.</p>
          <Link className="btn btn-ghost" to="/">
            ← Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="wrap enquiry-page-wrap">
        <Link to={config.backTo} className="muted enquiry-back-link">
          ← Back to {config.backLabel}
        </Link>
        <EnquiryForm
          title={config.title}
          note={config.note}
          fields={config.fields}
          formName={config.formName}
          whatsappMessage={config.whatsappMessage}
        />
      </div>
    </section>
  );
}
