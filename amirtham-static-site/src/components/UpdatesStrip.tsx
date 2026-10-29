import { UPDATES } from "@/lib/updates";

export function UpdatesStrip() {
  const items = [...UPDATES, ...UPDATES];
  return (
    <div className="updates-strip group" aria-label="Latest updates">
      <span className="relative z-10 shrink-0 bg-gold px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-navy">
        Updates
      </span>
      <div className="min-w-0 flex-1 overflow-hidden">
        <ul className="animate-updates flex w-max gap-10 py-1.5 group-hover:[animation-play-state:paused]">
          {items.map((u, i) => (
            <li key={i} aria-hidden={i >= UPDATES.length} className="shrink-0">
              <a href={u.href} target="_blank" rel="noreferrer" className="hover:underline" tabIndex={i >= UPDATES.length ? -1 : 0}>
                <span className="mr-2 text-gold">● {u.tag}:</span>
                {u.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
