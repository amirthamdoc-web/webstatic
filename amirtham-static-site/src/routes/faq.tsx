import { createFileRoute } from "@tanstack/react-router";

const FAQS: [string, React.ReactNode][] = [
  ["What documents are required for registration?", <>It depends on the type of document being registered, so give us a quick call on <a href="tel:+919655507474" className="font-semibold text-primary underline">96555 07474</a>.</>],
  ["Do you offer online services?", "Yes. We handle both online and offline documentation."],
  ["Do you serve areas outside Coimbatore?", "Yes. We provide document registration services all over Tamil Nadu."],
  ["How does it work if I live in another district?", "Call or WhatsApp us on 96555 07474 or 93448 32196. We will explain the documents needed and the process."],
  ["Is legal help available?", "Yes, in-house on request. Please call us in advance."],
  ["What are your hours?", "Monday to Saturday, 9 AM to 6 PM. Closed on Sunday."],
  ["How can I pay?", "Cash and UPI."],
  ["Where are you located?", "Edayarpalayam Junction, Thadagam Main Road, Kanuvai Road, Coimbatore 641025."],
  ["Do you help with marriage registration?", "Yes. Please call us to confirm the documents required."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Amirtham Document Writer" },
      { name: "description", content: "Answers about required documents, online services, hours, payments and location." },
      { property: "og:title", content: "FAQ | Amirtham Document Writer" },
      { property: "og:description", content: "Common questions about document registration in Tamil Nadu." },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="section-title">Frequently Asked Questions</h1>
      <div className="mt-10 space-y-3">
        {FAQS.map(([q, a], i) => (
          <details key={q} open={i === 0} className="card-doc group">
            <summary className="cursor-pointer list-none font-display text-lg text-primary">{q}</summary>
            <p className="mt-3 text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </section>
  ),
});
