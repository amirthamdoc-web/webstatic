import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { POSTS } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Amirtham Blog` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Article Not Found" }, { name: "robots", content: "noindex" }],
  }),
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      <Link to="/blog" className="font-semibold text-primary underline">← All Articles</Link>
      <h1 className="mt-6 font-display text-4xl leading-tight text-primary md:text-5xl">{post.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
      {post.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="font-display text-2xl text-primary">{s.heading}</h2>
          {s.body.map((b, i) => <p key={i} className="mt-3 text-lg leading-8">{b}</p>)}
        </section>
      ))}
    </article>
  );
}
