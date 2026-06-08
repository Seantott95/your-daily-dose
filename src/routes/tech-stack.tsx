import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteCard } from "@/components/SiteCard";
import { Tag } from "@/components/Tag";

export const Route = createFileRoute("/tech-stack")({
  head: () => ({
    meta: [
      { title: "Tech Stack — Your Name" },
      { name: "description", content: "Comprehensive list of tools and technologies I use across frontend, backend, data, and design." },
      { property: "og:title", content: "Tech Stack — Your Name" },
      { property: "og:description", content: "The full set of tools and technologies I work with." },
    ],
  }),
  component: TechStack,
});

const groups = [
  { title: "Frontend", icon: "🖥️", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite", "Figma", "Framer"] },
  { title: "Backend & Database", icon: "🗄️", items: ["Node.js", "Python", "PHP", "MySQL", "PostgreSQL"] },
  { title: "CMS & Marketing", icon: "🎯", items: ["WordPress", "SEO Optimization", "Google Analytics", "Search Console", "MailChimp"] },
  { title: "Data Analysis", icon: "📊", items: ["SQL", "Python", "Data Visualization", "Excel"] },
  { title: "Tools & Version Control", icon: "🛠️", items: ["Git", "GitHub", "VS Code", "Terminal"] },
];

function TechStack() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          ← Back to Home
        </Link>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Full Tech Stack</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Comprehensive list of tools and technologies I use.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {groups.map((g) => (
            <SiteCard key={g.title} title={g.title} icon={<span aria-hidden>{g.icon}</span>}>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => <Tag key={i}>{i}</Tag>)}
              </div>
            </SiteCard>
          ))}
        </div>
      </div>
    </main>
  );
}
