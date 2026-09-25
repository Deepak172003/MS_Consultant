import WhatsAppCTA from "../components/WhatsAppCTA";

const groups = [
  {
    title: "Play School Franchise",
    steps: [
      { n: "1", title: "Share your city", desc: "Tell us where and a bit about yourself, on WhatsApp." },
      { n: "2", title: "We walk you through it", desc: "Investment range, space needs, curriculum and support." },
      { n: "3", title: "Launch & support", desc: "Teacher training, admissions and marketing support at launch." },
    ],
    cta: "Hi, I'd like to get started with a Play School franchise.",
  },
  {
    title: "Study Material & Test Software",
    steps: [
      { n: "1", title: "Tell us your stream", desc: "Share the subject/stream and student strength, on WhatsApp." },
      { n: "2", title: "We recommend a fit", desc: "Material and test software matched to your students' level." },
      { n: "3", title: "Delivery & support", desc: "Ongoing access and support once you're onboarded." },
    ],
    cta: "Hi, I'd like to get started with study material / test software.",
  },
  {
    title: "Marketing",
    steps: [
      { n: "1", title: "Tell us your goal", desc: "Share your brand and what you want to achieve, on WhatsApp." },
      { n: "2", title: "We build a plan", desc: "Our team proposes the right mix of design, ads, and content." },
      { n: "3", title: "Launch & report", desc: "We execute and report results transparently, campaign by campaign." },
    ],
    cta: "Hi, I'd like to get started with marketing.",
  },
  {
    title: "HR Services",
    steps: [
      { n: "1", title: "Share your requirement", desc: "Tell us the role, level and city on WhatsApp." },
      { n: "2", title: "We shortlist matches", desc: "We match you with candidates or openings from our network." },
      { n: "3", title: "Interview & placement", desc: "We support you through interviews until you're placed." },
    ],
    cta: "Hi, I'd like to get started with HR services.",
  },
];

function StepGroup({ title, steps, cta }) {
  return (
    <div className="panel-card">
      <h2>{title}</h2>
      <div className="grid-3" style={{ marginTop: 20 }}>
        {steps.map((s) => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <h3>{s.title}</h3>
            <p className="muted">{s.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <WhatsAppCTA message={cta}>Message us on WhatsApp</WhatsAppCTA>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">How it works</div>
          <h1>Simple, direct, on WhatsApp</h1>
          <p>No long forms, no payment collection on the site — tell us what you need and we take it from there.</p>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ display: "grid", gap: 24 }}>
          {groups.map((g) => (
            <StepGroup key={g.title} {...g} />
          ))}
        </div>
      </section>
    </>
  );
}
