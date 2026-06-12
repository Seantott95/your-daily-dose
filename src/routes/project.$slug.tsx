import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
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

const projectsData = [
  {
    title: "NFC-Tag-Based Electronic Chart Editing System",
    desc: "Real-time medical charting using physical NFC tags for secure patient record access.",
    slug: "nfc-tag-electronic-chart",
    link: "https://github.com/Seantott95/NFC-Tag-Based-Electronic-Chart-Editing-System",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #0d9488 100%)",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"]
  },
  {
    title: "Clinic Management System",
    desc: "Full-stack OOP PHP portal for patient tracking, automated scheduling, and clinic billing.",
    slug: "clinic-management-system",
    link: "https://github.com/Seantott95/Clinic-Management-System",
    gradient: "linear-gradient(135deg, #312e81 0%, #4f46e5 100%)",
    tags: ["PHP", "OOP", "MySQL", "Tailwind CSS"]
  },
  {
    title: "Scholarship Management System",
    desc: "Centralized Laravel application for application processing and fund distribution analytics.",
    slug: "scholarship-management-system",
    link: "https://github.com/Seantott95/Scholarship-Management-System",
    gradient: "linear-gradient(135deg, #b91c1c 0%, #d97706 100%)",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"]
  },
  {
    title: "Sneakers Management & Inventory System",
    desc: "Dynamic retail stock tracking portal managing complex shoe variants and transaction histories.",
    slug: "sneakers-management-system",
    link: "https://github.com/Seantott95/Sneakers-Management-Inventory-System",
    gradient: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
    tags: ["Node.js", "React", "PostgreSQL", "Tailwind CSS"]
  }
];

function ProjectCaseStudy() {
  const { slug } = Route.useParams();
  const router = useRouter(); // 👈 Initialize router for the back button
  
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <h1 className="text-xl font-bold">Project Not Found</h1>
        <button onClick={() => router.history.back()} className="mt-4 text-sm text-muted-foreground hover:text-foreground">← Go Back</button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        
        {/* 👈 Dynamic Scroll-Restoring Back Button */}
        <button 
          onClick={() => router.history.back()} 
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground bg-transparent border-none p-0 cursor-pointer"
        >
          ← Go Back
        </button>
        
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{project.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-[260px_1fr]">
          <aside className="space-y-6">
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Project Overview</h2>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Lead Developer</dt><dd>Sean Igual</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Architecture</dt><dd>Independent Refactor</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Type</dt><dd>Web Platform</dd></div>
              </dl>

              <div className="mt-5 pt-4 border-t border-border">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-3 py-2.5 text-xs font-semibold text-background transition hover:opacity-90"
                >
                  🌐 View Repository / Live Site
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Tech Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </section>
          </aside>

          <div className="space-y-6">
            <div 
              className="h-64 w-full rounded-xl border border-border" 
              style={{ background: project.gradient || "linear-gradient(135deg, oklch(0.95 0.04 60), oklch(0.88 0.08 30))" }} 
            />
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