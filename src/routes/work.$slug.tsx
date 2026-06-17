import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects, type Project } from "@/content/projects";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Deryalfi Fathudin` : "Case study";
    const desc = p?.tagline ?? "Case study";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
      scripts: p
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: p.title,
              about: p.category,
              datePublished: p.year,
              author: { "@type": "Person", name: "Deryalfi Fathudin" },
              description: p.tagline,
            }),
          }]
        : [],
    };
  },
  component: CasePage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">
      <Link to="/" className="underline">Case not found — go home</Link>
    </div>
  ),
});

function CasePage() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <article className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
        <Link to="/" className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
          ← Back to work
        </Link>
        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mono rounded-full border border-border bg-secondary px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {project.category}
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{project.year}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{project.tagline}</p>
        </header>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="tile">
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{m.label}</p>
              <p className="mt-2 font-display text-3xl font-semibold tracking-tight">{m.value}</p>
            </div>
          ))}
        </div>

        <Section label="Context">{project.context}</Section>
        <Section label="Problem">{project.problem}</Section>

        <div className="mt-12">
          <Eyebrow>Approach</Eyebrow>
          <ol className="mt-4 space-y-3">
            {project.approach.map((step, i) => (
              <li key={i} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 tile">
                <span className="mono text-xs text-muted-foreground">0{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12">
          <Eyebrow>Stack</Eyebrow>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="mono rounded-full border border-border bg-secondary px-3 py-1.5 text-xs">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 tile bg-foreground text-background p-8 sm:p-12">
          <Eyebrow className="text-background/60">Results</Eyebrow>
          <ul className="mt-5 space-y-4">
            {project.results.map((r) => (
              <li key={r} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 text-lg">
                <span className="mono text-xs text-[var(--yellow)]">●</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <Section label="Reflection">{project.reflection}</Section>

        <div className="mt-16 border-t border-border pt-10">
          <Eyebrow>More work</Eyebrow>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} to="/work/$slug" params={{ slug: o.slug }} className="tile tile-hover">
                <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{o.category}</span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">{o.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`mono text-xs uppercase tracking-[0.2em] text-muted-foreground ${className}`}>{children}</p>;
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-12">
      <Eyebrow>{label}</Eyebrow>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/85">{children}</p>
    </div>
  );
}
