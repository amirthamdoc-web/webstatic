import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/SiteChrome";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Amirtham Document Writer" },
      { name: "description", content: "Sale, rental, trust, settlement, partnership and release deeds, marriage registration, EC and company registration." },
      { property: "og:title", content: "Services | Amirtham Document Writer" },
      { property: "og:description", content: "All document writing and registration services across Tamil Nadu." },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="section-title">Services</h1>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(([t, d]) => (
          <div key={t} className="card-doc">
            <h2 className="font-display text-xl text-primary">{t}</h2>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center"><WhatsAppButton /></div>
    </section>
  ),
});
