import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import seal from "@/assets/seal.png";
import { UpdatesStrip } from "@/components/UpdatesStrip";
import { ADDRESS, EMAIL, MAPS, PHONE, PHONE_TEL, PHONE2, PHONE2_TEL, WHATSAPP } from "@/lib/site";

export function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer" className={`btn-whatsapp ${className}`}>
      WhatsApp us
    </a>
  );
}

export function Header() {
  const nav = [
    ["/", "Home"],
    ["/services", "Services"],
    ["/faq", "FAQ"],
    ["/blog", "Blog"],
    ["/contact", "Contact"],
  ] as const;
  return (
    <>
    <UpdatesStrip />
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" aria-label="Amirtham Document Writer home">
          <img src={logo} alt="Amirtham Document Writer" width={600} height={228} className="h-12 w-auto md:h-14" />
        </Link>
        <nav className="hidden items-center gap-8 text-lg font-semibold md:flex">
          {nav.map(([to, label]) => (
            <Link key={to} to={to} className="text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {label}
            </Link>
          ))}
        </nav>
        <WhatsAppButton />
      </div>
      <nav className="flex justify-center gap-6 border-t border-border py-2 text-base font-semibold md:hidden">
        {nav.map(([to, label]) => (
          <Link key={to} to={to} activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: true }}>{label}</Link>
        ))}
      </nav>
    </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div className="flex items-center gap-4">
          <img src={seal} alt="Amirtham seal, since 36 years" width={396} height={400} loading="lazy" className="h-28 w-auto" />
          <p className="text-sm opacity-80">Serving Coimbatore since 1990. Document registration all over Tamil Nadu.</p>
        </div>
        <div className="text-sm leading-7">
          <h3 className="font-display text-xl text-gold">Visit us</h3>
          <a href={MAPS} target="_blank" rel="noreferrer" className="hover:text-gold">{ADDRESS}</a>
          <p>Mon to Sat, 9 AM to 6 PM. Sunday closed.</p>
        </div>
        <div className="text-sm leading-7">
          <h3 className="font-display text-xl text-gold">Contact</h3>
          <p>Phone: <a href={PHONE_TEL} className="hover:text-gold">{PHONE}</a></p>
          <p>Phone: <a href={PHONE2_TEL} className="hover:text-gold">{PHONE2}</a></p>
          <p>WhatsApp: <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-gold">+91 93448 32196</a></p>
          <p>Email: <a href={`mailto:${EMAIL}`} className="underline hover:text-gold">{EMAIL}</a></p>
          <p>Payments: Cash, UPI</p>
        </div>
      </div>
      <p className="border-t border-navy-foreground/15 py-4 text-center text-xs opacity-70">© {new Date().getFullYear()} Amirtham Document Writer</p>
    </footer>
  );
}
