import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { WhatsAppButton } from "@/components/SiteChrome";
import { ADDRESS, EMAIL, PHONE, PHONE_TEL, PHONE2, PHONE2_TEL, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Amirtham Document Writer" },
      { name: "description", content: "Send an enquiry, WhatsApp +91 93448 32196 or email amirthamdoc1998@gmail.com." },
      { property: "og:title", content: "Contact Amirtham Document Writer" },
      { property: "og:description", content: "Reach us by form, WhatsApp or email." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [state, setState] = useState<"idle" | "done">("idle");

  // Static hosting has no server, so the form opens the visitor's email app
  // with the enquiry already filled in, addressed to the office email.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "").trim();
    const body = `Name: ${g("name")}\nPhone: ${g("phone")}\nEmail: ${g("email") || "-"}\nService: ${g("service") || "-"}\n\nMessage:\n${g("message")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Website enquiry: ${g("name")}`)}&body=${encodeURIComponent(body)}`;
    setState("done");
  }

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[1fr_1.3fr]">
      <div>
        <h1 className="section-title text-left">Get in Touch</h1>
        <p className="mt-6 text-muted-foreground">Send us your query and we will reply soon. For a quick answer, message us on WhatsApp.</p>
        <div className="mt-8 space-y-3">
          <p>Email: <a href={`mailto:${EMAIL}`} className="font-semibold text-primary underline">{EMAIL}</a></p>
          <p>Phone: <a href={PHONE_TEL} className="font-semibold text-primary">{PHONE}</a></p>
          <p>Phone: <a href={PHONE2_TEL} className="font-semibold text-primary">{PHONE2}</a></p>
          <p className="text-muted-foreground">{ADDRESS}</p>
          <WhatsAppButton className="mt-4" />
        </div>
      </div>
      <form onSubmit={onSubmit} className="card-doc space-y-4">
        <input name="name" required maxLength={100} placeholder="Your name" className="field" />
        <input name="phone" required minLength={6} maxLength={20} placeholder="Phone number" className="field" />
        <input name="email" type="email" maxLength={255} placeholder="Email (optional)" className="field" />
        <select name="service" className="field" defaultValue="">
          <option value="">Select a service (optional)</option>
          {SERVICES.map(([t]) => <option key={t}>{t}</option>)}
        </select>
        <textarea name="message" required maxLength={2000} rows={5} placeholder="Your message" className="field" />
        <button className="btn-primary w-full">Send message</button>
        {state === "done" && <p className="text-primary">Your email app should open with your message ready. Just press send. If it doesn’t open, WhatsApp us or email us directly.</p>}
      </form>
      </section>

    </>
  );
}
