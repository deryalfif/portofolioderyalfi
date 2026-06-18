import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Deryalfi Fathudin" },
      {
        name: "description",
        content:
          "Get in touch with Deryalfi Fathudin — Media Analyst available for senior analyst, media intelligence, and applied-NLP roles.",
      },
      { property: "og:title", content: "Contact — Deryalfi Fathudin" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Let's talk media,
          <br /> data, or both.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Quickest path: email. For roles, mention the team and what you're trying to learn, I
          reply faster to specific notes than to generic outreach.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <ContactTile label="Email" value="deryalfif@gmail.com" href="mailto:deryalfif@gmail.com" />
          <ContactTile label="LinkedIn" value="linkedin.com/in/deryalfi-fathudin" href="https://www.linkedin.com/in/deryalfi-fathudin/" />
          <ContactTile label="GitHub" value="github.com/deryalfif" href="https://github.com/deryalfif" />
          <ContactTile
            label="Resume"
            value="Download PDF"
            href="/CV_Deryalfi_Fathudin.pdf"
            download
            target="_blank"
          />
        </div>

        <form
          action="mailto:deryalfif@gmail.com"
          method="post"
          encType="text/plain"
          className="mt-12 tile p-8 sm:p-10"
        >
          <h2 className="font-display text-2xl font-semibold tracking-tight">Or send a quick note</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Your name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <div className="mt-4">
            <label className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm focus:border-foreground focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
          >
            Send →
          </button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm focus:border-foreground focus:outline-none"
      />
    </div>
  );
}

function ContactTile({
  label,
  value,
  href,
  download,
  target,
}: {
  label: string;
  value: string;
  href: string;
  download?: boolean | string;
  target?: string;
}) {
  const isExternal = href.startsWith("http");
  const finalTarget = target || (isExternal ? "_blank" : undefined);
  const finalRel = isExternal || finalTarget === "_blank" ? "noopener noreferrer" : undefined;

  return (
    <a
      href={href}
      target={finalTarget}
      rel={finalRel}
      download={download}
      className="tile tile-hover flex items-center justify-between"
    >
      <div className="min-w-0">
        <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
        <p className="mt-1 truncate font-display text-lg">{value}</p>
      </div>
      <span aria-hidden className="ml-3 text-xl">→</span>
    </a>
  );
}
