import { createFileRoute, Link } from "@tanstack/react-router";
import { Tag } from "@/components/Tag";

export const Route = createFileRoute("/project/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} — Case Study` },
      { name: "description", content: "Project case study covering overview, tech stack, and key features." },
      { property: "og:title", content: `${params.slug} — Case Study` },
      { property: "og:description", content: "Project case study with overview, tech stack, and key features." },
    ],
  }),
  component: ProjectCaseStudy,
});

function ProjectCaseStudy() {
  const { slug } = Route.useParams();
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          ← Back to Home
        </Link>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Public landing page · Case study</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-[260px_1fr]">
          <aside className="space-y-6">
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Project Overview</h2>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Lead Developer</dt><dd>Your Name</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Architecture</dt><dd>Independent Refactor</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Type</dt><dd>Web Platform</dd></div>
              </dl>
            </section>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Tech Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Vite", "PostgreSQL"].map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </section>
          </aside>

          <div className="space-y-6">
            <div className="h-64 w-full rounded-xl border border-border" style={{ background: "linear-gradient(135deg, oklch(0.95 0.04 60), oklch(0.88 0.08 30))" }} />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold">📱 Mobile-Optimized Design</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Fully responsive across devices, with dedicated sections for About, Services, and Contact.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">⚡ Interactive Inquiry System</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Custom UI script manages submission states, toggling buttons to 'Sending' and surfacing success alerts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
