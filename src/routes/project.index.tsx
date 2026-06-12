import { createFileRoute, Link } from "@tanstack/react-router";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

export const Route = createFileRoute("/project/")({
  head: () => ({
    meta: [
      { title: "Projects — Sean Igual" },
      { name: "description", content: "Portfolio projects and case studies by Sean Igual." },
      { property: "og:title", content: "Projects — Sean Igual" },
      { property: "og:description", content: "Portfolio projects and case studies by Sean Igual." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "NFC-Tag-Based Electronic Chart Editing System",
    desc: "Real-time medical charting using physical NFC tags for secure patient record access.",
    slug: "nfc-tag-electronic-chart",
    link: "https://github.com/Seantott95/NFC-Tag-Based-Electronic-Chart-Editing-System",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #0d9488 100%)" 
  },
  {
    title: "Clinic Management System",
    desc: "Full-stack OOP PHP portal for patient tracking, automated scheduling, and clinic billing.",
    slug: "clinic-management-system",
    link: "https://github.com/Seantott95/Clinic-Management-System",
    gradient: "linear-gradient(135deg, #312e81 0%, #4f46e5 100%)" 
  },
  {
    title: "Scholarship Management System",
    desc: "Centralized Laravel application for application processing and fund distribution analytics.",
    slug: "scholarship-management-system",
    link: "https://github.com/Seantott95/Scholarship-Management-System",
    gradient: "linear-gradient(135deg, #b91c1c 0%, #d97706 100%)"
  },
  {
    title: "Sneakers Management & Inventory System",
    desc: "Dynamic retail stock tracking portal managing complex shoe variants and transaction histories.",
    slug: "sneakers-management-system",
    link: "https://github.com/Seantott95/Sneakers-Management-Inventory-System",
    gradient: "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
  }
];

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          ← Back to Home
        </Link>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Projects</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A showcase of some of my favorite web platforms, e-commerce stores, and creative projects.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-lg border border-border bg-card">
              {p.img ? (
                <img src={p.img} alt={p.title} width={800} height={300} loading="lazy" className="h-40 w-full object-cover" />
              ) : (
                <div className="h-40 w-full" style={{ background: p.gradient }} />
              )}
              <div className="p-4 flex flex-col">
                <Link 
                  to="/project/$slug" 
                  params={{ slug: p.slug }} 
                  className="text-sm font-semibold text-foreground hover:underline"
                >
                  {p.title}
                </Link>
                <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                
                {/* FIXED: This is now a clickable anchor tag instead of a span */}
                <a 
                  href={p.link.startsWith('http') ? p.link : `https://${p.link}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-2 inline-block text-xs text-foreground/50 hover:text-foreground hover:underline truncate"
                >
                  {p.link}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}