import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Your Name" },
      { name: "description", content: "Professional credentials and specialized training." },
      { property: "og:title", content: "Certifications — Your Name" },
      { property: "og:description", content: "Professional credentials and specialized training." },
    ],
  }),
  component: Certifications,
});

const certs = [
  { name: "Associate Data Analyst", org: "Issuer", year: "2025" },
  { name: "Intermediate SQL", org: "Issuer", year: "2025" },
  { name: "Intermediate Python", org: "Issuer", year: "2025" },
  { name: "Understanding Prompt Engineering", org: "Issuer", year: "2025" },
];

function Certifications() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          ← Back to Home
        </Link>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Certifications</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Professional credentials and specialized training in Data, SQL, and AI.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {certs.map((c) => (
            <article key={c.name} className="overflow-hidden rounded-xl border border-border bg-card">
              <div
                className="flex h-56 items-center justify-center text-sm font-semibold tracking-wider text-white"
                style={{ background: "linear-gradient(135deg, oklch(0.22 0.02 260), oklch(0.32 0.05 165))" }}
              >
                STATEMENT OF ACCOMPLISHMENT
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.org} · {c.year}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
