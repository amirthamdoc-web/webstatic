import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Amirtham Document Writer" },
      { name: "description", content: "Guides on sale deeds, exchange deeds, partition deeds and what to check when creating any deed." },
      { property: "og:title", content: "Blog | Amirtham Document Writer" },
      { property: "og:description", content: "Simple guides to property documents and their importance." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="section-title">Our Blog</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">Simple Guides to Documents and Why They Matter</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {POSTS.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-doc block hover:shadow-doc">
            <h2 className="font-display text-2xl text-primary">{p.title}</h2>
            <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
            <p className="mt-4 font-semibold text-primary">Read More →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
