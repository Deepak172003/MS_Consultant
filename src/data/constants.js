// Central place to edit numbers, emails, links and content used across the
// whole site. Change something once here and every page updates.

export const COMPANY_NAME = "MS Consultant";
export const COMPANY_FULL_NAME = "Guruzan — MS Consultant Pvt. Ltd.";
export const TAGLINE = "An edtech company built around four things brands and families actually need.";

export const WHATSAPP_NUMBER = "917004237947"; // country code + number, no + or spaces
export const OFFICE_PHONE = "+91 6542-452447";
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
      "https://www.google.com/maps/dir//MS+CONSULTANT,+Navin+Mantri+Road,+near+Apna+Mart,+P%26T+Colony,+Lalpur,+Ranchi,+Jharkhand+834001/@23.3439232,85.3409792,19033m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x39f4e15d78bf52e9:0x832149d04d392552!2m2!1d85.3380932!2d23.3755609?entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D" +
      encodeURIComponent(
        "Navin Mantri Road, near Apna Mart, P&T Colony, Lalpur, Ranchi, Jharkhand 834001"
      ),
  },
];

// Builds a wa.me link with a prefilled message.
export function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// ---------------------------------------------------------------------------
// The four verticals. Each has its own page, its own nav entry, and its own
// card on the Home page
// ---------------------------------------------------------------------------

export const VERTICALS = [
  { key: "play-school", label: "Play School Franchise", path: "/play-school" },
  { key: "study-material", label: "Study Material & Test Software", path: "/study-material" },
  { key: "marketing", label: "Marketing", path: "/marketing" },
  { key: "hr-services", label: "HR Services", path: "/hr-services" },
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
  { name: "Digital Marketing Faculty", desc: "Specialists in digital marketing strategies" }

];

// NOTE: placeholder quotes — replace with real feedback before launch.
export const TESTIMONIALS = [
  {
    quote: "Add a real quote from a play school franchise partner.",
    name: "Client name",
    role: "Franchise Partner, City",
  },
  {
    quote: "Add a real quote from an institute using our study material.",
    name: "Client name",
    role: "Institute, City",
  },
  {
    quote: "Add a real quote from a brand you've run campaigns for.",
    name: "Client name",
    role: "Brand, City",
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
    q: "Do you accept payments or fee collection through the website?",
    a: "No — the website is for enquiries only. Any payment or fee discussion happens directly with our team after we've understood your requirement.",
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
