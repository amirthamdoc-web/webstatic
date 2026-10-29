import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import seal from "@/assets/seal.png";
import { WhatsAppButton } from "@/components/SiteChrome";
import { SERVICES } from "@/lib/site";
import { REVIEWS } from "@/lib/reviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amirtham Document Writer | Document Registration in Coimbatore" },
      { name: "description", content: "Since 1990: sale, rental, settlement, trust deeds, marriage registration and EC across Tamil Nadu, online and offline." },
      { property: "og:title", content: "Amirtham Document Writer, Coimbatore" },
      { property: "og:description", content: "35+ years of hassle-free document writing and registration across Tamil Nadu." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section id="hero" className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="Document writer signing a property deed" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 md:grid-cols-[1fr_auto] md:py-32">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold md:text-sm">Coimbatore · Since 1990</p>
            <h1 className="font-display text-4xl leading-tight text-balance md:text-6xl">Your Documents, Written Right and Registered With Care.</h1>
            <p className="mt-5 max-w-xl text-base opacity-90 md:text-lg">Over 35 years of document writing and registration, online and offline, all over Tamil Nadu. Tamil and English support.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton />
              <Link to="/contact" className="btn-outline-gold">Send an enquiry</Link>
            </div>
          </div>
          <img src={seal} alt="Amirtham Document Writer seal" width={396} height={400} className="mx-auto h-56 w-auto drop-shadow-2xl md:h-72" />
        </div>
      </section>

      <section id="stats" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 px-4 py-12 text-center md:grid-cols-4">
          {[["1990", "Serving since"], ["35+", "Years of experience"], ["11+", "Services offered"], ["Tamil Nadu", "Service area"]].map(([num, label]) => (
            <div key={label}>
              <p className="font-display text-3xl text-primary md:text-4xl">{num}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground md:text-base">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="section-title">Our Services</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map(([t, d]) => (
            <div key={t} className="card-doc">
              <h3 className="font-display text-xl text-primary">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center"><Link to="/services" className="font-semibold text-primary underline">See all services</Link></div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
          <img src={about} alt="Family receiving a registered sale deed" width={1200} height={912} loading="lazy" className="rounded-lg shadow-doc" />
          <div>
            <h2 className="section-title text-left">Trusted by Families for Three Generations</h2>
            <p className="mt-6 text-lg text-muted-foreground">Amirtham Document Writer has served Coimbatore since 1990. We use well-equipped systems and cameras for smooth registration, and legal services are available in-house on request.</p>
            <ul className="mt-6 space-y-2">
              <li>✓ Online and offline documentation</li>
              <li>✓ Service all over Tamil Nadu</li>
              <li>✓ Cash and UPI accepted</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="mt-3 text-center text-muted-foreground">5.0 ★ rated reviews from our customers on Justdial</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map(([name, date, text]) => (
            <figure key={name} className="card-doc flex flex-col">
              <div className="text-lg tracking-wide text-primary" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="mt-3 flex-1 text-foreground">“{text}”</blockquote>
              <figcaption className="mt-4 border-t border-border pt-3">
                <span className="font-semibold">{name}</span>
                <span className="block text-sm text-muted-foreground">{date} · Justdial</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
