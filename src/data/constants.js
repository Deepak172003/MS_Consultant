// Central place to edit numbers, emails, links and content used across the
// whole site. Change something once here and every page updates.

export const COMPANY_NAME = "Ms Consultant";
export const COMPANY_FULL_NAME = "MS Consultant Pvt. Ltd.";
export const TAGLINE = "A Ms Consultant company built around five things brands, institutes and families actually need.";

export const WHATSAPP_NUMBER = "917004237947"; // country code + number, no + or spaces
export const OFFICE_PHONE = "+91 9431768823";
export const MOBILE_PHONES = ["+91 70042 37947", "+91 70047 04332"];
export const EMAIL = "info@mscjobs.in";
export const ADDRESS = "2nd Floor, Golden Palace, Bye Pass Road, Chas, Bokaro (JH)";
export const OPENING_HOURS = "Mon–Sat, 10:00 AM – 6:00 PM"; // TODO: confirm real hours

// Office locations. Each needs its own "Get Directions" Google Maps link.
export const OFFICES = [
  {
    city: "Bokaro Office (Head Office)",
    address: ADDRESS,
    mapLink:
      "https://www.google.com/maps/place/Hotel+Golden+Place+Inn./@23.632281,86.1719695,593m/data=!3m2!1e3!4b1!4m9!3m8!1s0x39f423fcd0009d5d:0xa047468870f73592!5m2!4m1!1i2!8m2!3d23.632281!4d86.1719695!16s%2Fg%2F11c1pcyld2?entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    city: "Ranchi Office",
    address: "Navin Mantri Road, near Apna Mart, P&T Colony, Lalpur, Ranchi, Jharkhand 834001",
    mapLink:
      "https://www.google.com/maps/dir//MS+CONSULTANT,+Navin+Mantri+Road,+near+Apna+Mart,+P%26T+Colony,+Lalpur,+Ranchi,+Jharkhand+834001/@23.3439232,85.3409792,19033m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x39f4e15d78bf52e9:0x832149d04d392552!2m2!1d85.3380932!2d23.3755609?entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D",
  },
];

// Builds a wa.me link with a prefilled message.
export function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// ---------------------------------------------------------------------------
// The five verticals. Each has its own page, its own nav entry, and its own
// card on the Home page. Edit copy here rather than inside each page file.
// ---------------------------------------------------------------------------

export const VERTICALS = [
  { key: "play-school", label: "Play School Franchise", path: "/play-school" },
  { key: "study-material", label: "Study Material & Test Software", path: "/study-material" },
  { key: "marketing", label: "Marketing", path: "/marketing" },
  { key: "hr-services", label: "HR Services", path: "/hr-services" },
  { key: "business-consulting", label: "Business Consulting", path: "/business-consulting" },
];

export const PLAY_SCHOOL_HIGHLIGHTS = [
  {
    name: "Curriculum & Setup",
    desc: "A ready early-childhood curriculum and classroom setup guidance, so you're not building from zero.",
  },
  {
    name: "Teacher Training",
    desc: "Training support for your teaching staff before and after launch.",
  },
  {
    name: "Admissions Support",
    desc: "Guidance on local admissions drives and enrolment cycles.",
  },
  {
    name: "Marketing Support",
    desc: "Local marketing support for your branch, backed by our in-house marketing team.",
  },
];

export const STUDY_MATERIAL_STREAMS = [
  { name: "IIT-JEE", desc: "Physics, Chemistry, Maths study material & tests" },
  { name: "NEET", desc: "Physics, Chemistry, Biology study material & tests" },
  { name: "Board Level", desc: "11th & 12th study material & tests" },
  { name: "Foundation", desc: "Classes 8th to 10th study material & tests" },
  { name: "Higher Studies", desc: "Engineering, graduation, medical, B.Ed, M.Sc" },
  { name: "Olympiad / NDA", desc: "Science, Maths, GK, GS" },
];

export const MARKETING_SERVICES = [
  {
    name: "Graphics Design",
    desc: "Logos, creatives, captions and copy-ready designs that speak your brand's voice.",
    points: ["Logo & brand identity", "Social post & story designs", "Promo creatives for campaigns"],
  },
  {
    name: "Photography",
    desc: "Professional brand, product and lifestyle photography that looks premium everywhere.",
    points: ["Product photography", "Brand & lifestyle shoots", "Event & corporate coverage"],
  },
  {
    name: "Videography",
    desc: "Cinematic brand films, reels and promos that hold attention from the first 3 seconds.",
    points: ["Brand films & commercials", "Reels & short-form content", "Testimonial & promo videos"],
  },
  {
    name: "Video Editing",
    desc: "Post-production that turns raw footage into scroll-stopping content.",
    points: ["Color correction & grading", "Motion graphics & transitions", "Reel & YouTube editing"],
  },
  {
    name: "Ads Management",
    desc: "Performance-driven paid campaigns on Meta, Google and YouTube — online and offline.",
    points: ["Meta & Instagram Ads", "Google & YouTube Ads", "Offline & local campaigns"],
  },
  {
    name: "Web/App Development",
    desc: "Fast, modern web and app experiences that turn attention into action.",
    points: ["Websites & landing pages", "UI/UX for conversion", "Maintenance & upgrades"],
  },
];

export const HR_SERVICE_STREAMS = [
  { name: "IIT-JEE Faculty", desc: "Physics, Chemistry, Maths faculty" },
  { name: "NEET Faculty", desc: "Physics, Chemistry, Biology faculty" },
  { name: "Board Level Faculty", desc: "11th & 12th subject faculty" },
  { name: "Foundation Faculty", desc: "Classes 8th to 10th" },
  { name: "Digital Marketing Faculty", desc: "Specialists in digital marketing strategies" },
];

// Business Consulting — "zero se profitable". Service list is a sensible
// starting point; confirm/adjust it with Krishna Sir before launch. No
// outcome guarantees or client numbers are claimed on purpose.
export const BUSINESS_CONSULTING_SERVICES = [
  {
    name: "Business Strategy & Planning",
    desc: "A clear business model, target customer and a practical roadmap — so every rupee and hour goes somewhere useful.",
    points: ["Business model & positioning", "Market & competitor understanding", "90-day action plan"],
  },
  {
    name: "Startup Setup & Launch",
    desc: "Taking an idea from paper to your first paying customers.",
    points: ["Idea validation", "Pricing & offer design", "Go-to-market plan"],
  },
  {
    name: "Sales & Revenue Growth",
    desc: "Building a repeatable way to find customers and close them.",
    points: ["Lead generation setup", "Sales process & follow-up", "Offers & pricing review"],
  },
  {
    name: "Operations & Processes",
    desc: "Fixing what leaks time and money inside the business.",
    points: ["Workflows & SOPs", "Cost control", "Team roles & accountability"],
  },
  {
    name: "Financial Planning & Profitability",
    desc: "Understanding your numbers well enough to make them profitable.",
    points: ["Budgeting & cash flow", "Margin & unit-economics review", "Break-even & profit tracking"],
  },
  {
    name: "Team, HR & Marketing Support",
    desc: "Hands-on help from our in-house HR and marketing teams as you grow.",
    points: ["Hiring & team setup", "Branding & online/offline marketing", "Regular progress reviews"],
  },
];

export const BUSINESS_CONSULTING_STEPS = [
  { n: "1", title: "Tell us about your business", desc: "Share your idea or your current situation on WhatsApp — where you are and where you want to be." },
  { n: "2", title: "We diagnose & plan", desc: "We find what's blocking profit and build a practical, step-by-step plan around it." },
  { n: "3", title: "Execute & track profit", desc: "We work alongside you on the plan and review real numbers, not just activity." },
];

// Client testimonials — real feedback.
export const TESTIMONIALS = [
  {
    quote:
      "The team provided professional digital marketing support and helped us strengthen our online presence. Their communication and approach throughout the process were excellent.",
    name: "Access Con Solar",
    service: "Digital Marketing",
    city: "Bokaro",
  },
  {
    quote:
      "We had a great experience working with the team for our digital marketing requirements. They understood our goals and provided consistent support to improve our online presence.",
    name: "MHA Shopping Pvt. Ltd.",
    service: "Digital Marketing",
    city: "Ranchi",
  },
  {
    quote:
      "The team understood our business requirements and provided focused digital marketing support. We appreciated their professionalism and consistent communication.",
    name: "Interior Designer Hub",
    service: "Digital Marketing",
    city: "Bokaro",
  },
  {
    quote:
      "The team provided professional digital marketing services and helped us maintain a stronger online presence. Their support and communication were very good.",
    name: "Eicher Tractor",
    service: "Digital Marketing",
    city: "Bokaro",
  },
  {
    quote:
      "The team understood our requirements and developed a clean and user-friendly website for us. They were supportive throughout the development process.",
    name: "Reyansha Library",
    service: "Digital Marketing & Web Development",
    city: "Bokaro",
  },
  {
    quote:
      "We received professional digital marketing support from the team. They understood our requirements well and helped us improve our digital presence.",
    name: "Global Institute",
    service: "Digital Marketing",
    city: "Bokaro",
  },
  {
    quote:
      "The team provided dedicated digital marketing support for our coaching institute. Their communication was clear, and they worked according to our requirements.",
    name: "Abhyas Coaching",
    service: "Digital Marketing",
    city: "Bokaro",
  },
];

export const FAQS = [
  {
    q: "How do I enquire about a Play School franchise?",
    a: "Message us on WhatsApp with your city and interest — we'll share franchise details, investment range and next steps.",
  },
  {
    q: "Which subjects and streams does your study material cover?",
    a: "IIT-JEE, NEET, Board (11th & 12th), Foundation (8th–10th), Higher Studies and Olympiad/NDA.",
  },
  {
    q: "Do you handle both online and offline marketing?",
    a: "Yes — from paid digital campaigns to local/offline marketing support, especially for franchise partners.",
  },
  {
    q: "How does your HR / faculty placement service work?",
    a: "Share the subject, level and city on WhatsApp. We match you with faculty or openings from our network and support you through interviews.",
  },
  {
    q: "What does your Business Consulting cover?",
    a: "We work with startups and existing companies on strategy, launch, sales, operations, finances and team/marketing support — with the goal of making the business profitable, starting from wherever you are.",
  },
  {
    q: "Can I pay online through the website?",
    a: "Yes — the Pricing page lists starting prices with a Pay Now option for each plan. For anything outside those plans, we'll confirm the amount with you on WhatsApp before any payment.",
  },
  {
    q: "What if I need a refund or want to cancel after paying?",
    a: "See our Refund & Cancellation Policy page for details, or message us directly on WhatsApp with your payment reference.",
  },
  {
    q: "Do you have an office I can visit?",
    a: "Yes — our head office is in Bokaro, with a second office in Ranchi. Both addresses and directions are on the Contact page.",
  },
  {
    q: "What are your working hours?",
    a: "We're available Monday to Saturday, 10:00 AM to 6:00 PM. WhatsApp messages outside these hours are picked up the next working day.",
  },
  
{
  q: "Do you only work in Jharkhand?",
  a: "No — while our offices are in Bokaro and Ranchi, we serve clients across 60+ cities pan-India. Our services include HR Services, Digital Marketing, Study Material & Test Software, and Business Consulting.",
  },
  {
    q: "I'm looking for a job, not hiring — how do I apply?",
    a: "Message us on WhatsApp with your subject, experience and preferred city. We'll match you against current openings in our network and support you through interviews.",
  },
  {
    q: "Is your main website live yet?",
    a: "Our full website is being rebuilt. In the meantime, WhatsApp is the fastest way to reach us directly.",
  },
];

// Real, stated numbers only — no invented press mentions. Swap in real
// publication logos here later if you have actual press coverage.
export const TRUST_STRIP = [
  "20+ industries served",
  "60+ cities covered",
  "6+ years in marketing",
  "Since 2019, 24k+ people placed",
];

// ---------------------------------------------------------------------
// Enquiry forms — one config per vertical, rendered by EnquiryForm.jsx
// ---------------------------------------------------------------------

// TODO: replace with your real Formspree endpoint (formspree.io — free
// account, takes 2 minutes) so form submissions actually reach an inbox.
// Until this is a real endpoint, forms fall back to a WhatsApp button.
export const FORM_ENDPOINT = "https://formspree.io/f/XXXXXXX";

export const HR_ENQUIRY_FIELDS = [
  { name: "institution", label: "Institution / Organization Name", type: "text", required: true },
  {
    name: "category", label: "Institution / Organization Category", type: "select", required: true,
    options: ["IIT-JEE/NEET & Foundation Coaching Institute", "School", "College/University", "Competitive Exam Coaching Institute", "EdTech", "Other"],
  },
  { name: "location", label: "Location (City, State)", type: "text", required: true },
  { name: "contactPerson", label: "Contact Person Name", type: "text", required: true },
  { name: "contactNumber", label: "Contact Number", type: "tel", required: true },
  { name: "email", label: "E-Mail ID", type: "email", required: true },
  { name: "position", label: "Position Required", type: "text", required: true, placeholder: "e.g. Physics Faculty, PGT Teacher, Academic Coordinator" },
  { name: "teachingLevel", label: "Teaching Level", type: "text", required: true, placeholder: "e.g. IIT-JEE, NEET, Foundation (8-10), PGT (11-12)" },
  { name: "minExperience", label: "Minimum Experience Required", type: "text", required: true },
  { name: "salary", label: "Salary Offered", type: "text", required: true, placeholder: "e.g. ₹40,000–₹60,000 per month" },
  { name: "selectionProcess", label: "Selection Process", type: "textarea", placeholder: "e.g. Resume Screening → Written Test → Demo Class → Final Interview" },
  { name: "joiningDate", label: "Expected Joining Date", type: "date" },
  { name: "accommodation", label: "Accommodation / Food Facility Available?", type: "radio", options: ["Yes", "No"] },
  { name: "notes", label: "Any Other Requirement / Notes", type: "textarea" },
];

export const PLAY_SCHOOL_ENQUIRY_FIELDS = [
  { name: "applicantName", label: "Your Name", type: "text", required: true },
  { name: "location", label: "Preferred City / State for the Branch", type: "text", required: true },
  { name: "contactNumber", label: "Contact Number", type: "tel", required: true },
  { name: "email", label: "E-Mail ID", type: "email", required: true },
  {
    name: "background", label: "Your Background", type: "select",
    options: ["Educator", "Existing Preschool Owner", "First-time Entrepreneur", "Other"],
  },
  {
    name: "spaceAvailable", label: "Do you already have a space?", type: "select",
    options: ["Yes — owned", "Yes — rented", "No, need help finding one"],
  },
  { name: "spaceSize", label: "Approx. Space Size (sq. ft.)", type: "text" },
  { name: "investmentCapacity", label: "Investment Capacity (approx.)", type: "text" },
  { name: "timeline", label: "When do you want to start?", type: "text" },
  { name: "notes", label: "Any Other Details", type: "textarea" },
];

export const STUDY_MATERIAL_ENQUIRY_FIELDS = [
  { name: "name", label: "Institution / Your Name", type: "text", required: true },
  {
    name: "category", label: "Category", type: "select", required: true,
    options: ["Coaching Institute", "School", "Individual Student", "Other"],
  },
  { name: "location", label: "Location (City, State)", type: "text", required: true },
  { name: "contactNumber", label: "Contact Number", type: "tel", required: true },
  { name: "email", label: "E-Mail ID", type: "email", required: true },
  {
    name: "stream", label: "Stream Required", type: "select", required: true,
    options: ["IIT-JEE", "NEET", "Board (11th–12th)", "Foundation (8th–10th)", "Higher Studies", "Olympiad/NDA", "Other"],
  },
  { name: "batchSize", label: "Approx. Number of Students", type: "text" },
  { name: "format", label: "Format Needed", type: "radio", options: ["Printed", "Digital", "Both"] },
  { name: "notes", label: "Any Other Requirement / Notes", type: "textarea" },
];

export const MARKETING_ENQUIRY_FIELDS = [
  { name: "businessName", label: "Business Name", type: "text", required: true },
  { name: "industry", label: "Industry / Type of Business", type: "text", required: true },
  { name: "location", label: "Location (City, State)", type: "text", required: true },
  { name: "contactPerson", label: "Contact Person Name", type: "text", required: true },
  { name: "contactNumber", label: "Contact Number", type: "tel", required: true },
  { name: "email", label: "E-Mail ID", type: "email", required: true },
  {
    name: "servicesNeeded", label: "Services Needed", type: "checkboxGroup",
    options: ["Graphics Design", "Photography", "Videography", "Video Editing", "Ads Management", "Web/App Development"],
  },
  { name: "currentPresence", label: "Current Online Presence (if any)", type: "text", placeholder: "Website / Instagram / Facebook handle" },
  { name: "budgetRange", label: "Approx. Monthly Budget", type: "text" },
  { name: "timeline", label: "When do you want to start?", type: "text" },
  { name: "notes", label: "Any Other Requirement / Notes", type: "textarea" },
];

export const BUSINESS_CONSULTING_ENQUIRY_FIELDS = [
  { name: "businessName", label: "Business / Startup Name", type: "text", required: true },
  {
    name: "stage", label: "Current Stage", type: "select", required: true,
    options: ["Idea Stage", "Early Stage (under 1 year)", "Existing Business (1+ years)"],
  },
  { name: "industry", label: "Industry", type: "text", required: true },
  { name: "location", label: "Location (City, State)", type: "text", required: true },
  { name: "contactPerson", label: "Contact Person Name", type: "text", required: true },
  { name: "contactNumber", label: "Contact Number", type: "tel", required: true },
  { name: "email", label: "E-Mail ID", type: "email", required: true },
  {
    name: "areaOfHelp", label: "Area(s) You Need Help With", type: "checkboxGroup",
    options: ["Strategy & Planning", "Startup Setup", "Sales & Revenue", "Operations", "Financial Planning", "Team/HR/Marketing Support"],
  },
  { name: "currentRevenue", label: "Approx. Monthly Revenue (optional)", type: "text" },
  { name: "notes", label: "Biggest Challenge Right Now", type: "textarea" },
];

// ---------------------------------------------------------------------
// Razorpay — set these once real values exist, both are public/safe to
// ship in frontend code (no secret key involved for either flow).
// ---------------------------------------------------------------------

// Recurring / NACH: Razorpay Dashboard → Subscriptions → create a Plan → create a Subscription → copy its link.
export const RAZORPAY_SUBSCRIPTION_LINK = ""; // e.g. "https://rzp.io/i/xxxxxxx"

// ⚠️ PLACEHOLDER PRICES — these 3 numbers (₹5,000 / ₹10,000 / ₹20,000) were
// given as examples to fill the layout, not confirmed per-service amounts.
// Edit price/tagline/features for each plan below as the real offer is
// decided. "buttonId" is empty until a real Razorpay Payment Button is
// created for that exact amount (Razorpay buttons are fixed-amount, so
// each plan needs its own button) — until then, Pay Now falls back to
// WhatsApp automatically, so nothing breaks or charges the wrong amount.
export const PRICING_PLANS = [
  {
    key: "basic",
    name: "Basic",
    price: "₹5,000",
    tagline: "A smart starting point for your business needs.",
    features: [
      " Play School Franchise — Basic franchise consultation & guidance ",
      " Study Material & Test Software — Basic study material / test setup ",
      " Marketing — Basic social media,marketing support & Website Designing",
      "HR Services — Basic recruitment support",
      "Business Consulting — Initial business consultation",
    ],
    buttonId: "", // e.g. "pl_XXXXXXXXXXXX"
  },
  {
    key: "premium",
    name: "Premium",
    price: "₹10,000",
    tagline: "Enhanced support for growing your business with confidence.",
    features: [
      " Play School Franchise — Complete setup & franchise guidance",
      " Study Material & Test Software — Customized material & test solution",
      " Marketing — SEO + social media + marketing support + Website Designing",
      " HR Services — Complete recruitment assistance",
      " Business Consulting — Business strategy & growth planning",
    ],
    buttonId: "",
  },
  {
    key: "standard",
    name: "Standard / Pro",
    price: "₹20,000",
    tagline: "Complete solutions for businesses ready to grow and scale.",
    features: [
      " Play School Franchise — End-to-end franchise support",
      " Study Material & Test Software — Advanced test & learning solution ",
      " Marketing — Complete digital marketing & lead generation ",
      " HR Services — End-to-end HR & recruitment support",
      " Business Consulting — Comprehensive business consulting ",
    ],
    buttonId: "",
  },
];

// ---------------------------------------------------------------------
// Per-service starting price + its own Razorpay Payment Button.
// IMPORTANT: a Razorpay Payment Button is always a FIXED amount, so each
// service needs its own separate button created in the Razorpay Dashboard
// (Payment Pages/Buttons → create → set that service's amount → copy the
// Button ID) — you can't reuse one button for five different prices.
//
// ⚠️ startingPrice below is a PLACEHOLDER (null = "price not set yet").
// Only 3 of the 5 prices were given (₹5,000 / ₹10,000 / ₹20,000) without
// saying which service each belongs to — filling these in wrong would
// mean charging someone the wrong amount, so none have been guessed.
// Fill in startingPrice (a number, e.g. 5000) and razorpayButtonId for
// each service below once confirmed, and the price + Pay Now button
// appear on that service's card automatically.
export const PRICING = [
  { key: "play-school", startingPrice: null, razorpayButtonId: "" },
  { key: "study-material", startingPrice: null, razorpayButtonId: "" },
  { key: "marketing", startingPrice: null, razorpayButtonId: "" },
  { key: "hr-services", startingPrice: null, razorpayButtonId: "" },
  { key: "business-consulting", startingPrice: null, razorpayButtonId: "" },
];

// ---------------------------------------------------------------------
// Pricing tiers — same 3 tiers offered under every service (per Krishna
// Sir's instruction). Each tier needs its own Razorpay Payment Button,
// since the amount differs. NOTE: because the price is identical across
// all five services, each tier's button is shared across all of them —
// a payment confirms the AMOUNT paid, not which specific service it was
// for. If per-service tracking matters, each service/tier pair would
// need its own button (15 total) created in the Razorpay dashboard
// instead of just 3 — happy to switch to that if needed.
// ---------------------------------------------------------------------

export const PRICING_TIERS = [
  {
    key: "basic",
    name: "Basic",
    price: 5000,
    // TODO: confirm what's actually included in this tier.
    features: ["Feature details coming soon", "Feature details coming soon", "Feature details coming soon"],
    buttonId: "", // e.g. "pl_XXXXXXXXXXXX" — Razorpay button for ₹5,000
  },
  {
    key: "premium",
    name: "Premium",
    price: 10000,
    featured: true,
    // TODO: confirm what's actually included in this tier.
    features: ["Feature details coming soon", "Feature details coming soon", "Feature details coming soon", "Feature details coming soon"],
    buttonId: "", // e.g. "pl_XXXXXXXXXXXX" — Razorpay button for ₹10,000
  },
  {
    key: "pro",
    name: "Pro",
    price: 20000,
    // TODO: confirm what's actually included in this tier.
    features: ["Feature details coming soon", "Feature details coming soon", "Feature details coming soon", "Feature details coming soon", "Feature details coming soon"],
    buttonId: "", // e.g. "pl_XXXXXXXXXXXX" — Razorpay button for ₹20,000
  },
];
