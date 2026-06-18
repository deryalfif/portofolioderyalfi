import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Deryalfi Fathudin" },
      {
        name: "description",
        content:
          "From Sharia Economic Law to media analytics: how Deryalfi Fathudin moved through data validation, engineering and science into media intelligence.",
      },
      { property: "og:title", content: "About — Deryalfi Fathudin" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          A law graduate who builds data systems.
        </h1>
        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            I'm Deryalfi Fathudin, a Media Analyst at PT Kurasi Media Nusantara. My job is to turn
            very large volumes of media; news, social posts, broadcasts into something a
            leadership team can actually decide on.
          </p>
          <p>
            My route here was not the obvious one. I trained as a lawyer (Bachelor of Sharia
            Economic Law, Universitas Islam Bandung) before moving into data. The shared thread is
            evidence: building it, weighing it, presenting it. Data work just gives me sharper tools
            for the same job.
          </p>
          <p>
            I started in <strong>data validation</strong>, where I learned that pipelines fail
            because contracts fail. From there I moved into{" "}
            <strong>data science</strong> (sentiment classifiers, topic models) and{" "}
            <strong>data engineering</strong> (Airflow, dbt, observability). Today I work across
            all three as a media analyst, the model is the easy part; getting an organization to
            act on the signal is the work.
          </p>
          <p>
            I care about: numbers over adjectives, simple systems over clever ones, and treating
            data quality as a product. I'm based in Bandung, Indonesia, and I'm open to senior
            analyst, media intelligence, and applied-NLP roles.
          </p>
        </div>
        <div className="mt-12 flex gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
          >
            Get in touch →
          </Link>
          <a
            href="/CV%20Deryalfi%20Fathudin.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-secondary"
          >
            Download CV
          </a>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
