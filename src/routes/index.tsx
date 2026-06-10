import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteCard } from "@/components/SiteCard";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { Tag } from "@/components/Tag";
import { ThemeToggle } from "@/components/ThemeToggle";
import profileImg from "@/assets/profile.jpg";
import profileAlt from "@/assets/profile-alt.jpg";
import profileAlt2 from "@/assets/profile-alt2.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sean Igual — Portfolio" },
      { name: "description", content: "Personal portfolio of Sean Igual showcasing experience, projects, certifications, and a way to get in touch." },
      { property: "og:title", content: "Sean Igual — Portfolio" },
      { property: "og:description", content: "Personal portfolio of Sean Igual showcasing experience, projects, and certifications." },
    ],
  }),
  component: Home,
});

const experience = [
  { role: "Senior Role Title", org: "Company Name", period: "2024 — Present", current: true },
  { role: "Previous Role", org: "Previous Company", period: "2023" },
  { role: "Associate Role", org: "Previous Company", period: "2023" },
  { role: "Entry-level Role", org: "First Company", period: "2022" },
];

const projects = [
  {
    title: "Project One",
    desc: "Short one-line description of what this project does and the impact.",
    link: "yourdomain.com",
    href: "/project/one",
    gradient: "linear-gradient(135deg, oklch(0.95 0.05 60), oklch(0.88 0.08 30))",
  },
  {
    title: "Project Two",
    desc: "E-commerce platform — UI/UX, frontend & SEO optimization.",
    link: "yourdomain.com",
    href: "/project/two",
    img: project2,
  },
  {
    title: "Project Three",
    desc: "Editorial / publishing platform — founder & content strategy.",
    link: "yourdomain.com",
    href: "/project/three",
    img: project3,
  },
  {
    title: "Project Four",
    desc: "Creative studio — UI/UX, WordPress & SEO optimization.",
    link: "yourdomain.com",
    href: "/project/four",
    gradient: "linear-gradient(135deg, oklch(0.93 0.05 350), oklch(0.85 0.08 340))",
  },
];

const certifications = [
  { name: "Associate Certification", org: "Issuer", year: "2025" },
  { name: "Intermediate Certificate", org: "Issuer", year: "2025" },
  { name: "Foundations Certificate", org: "Issuer", year: "2024" },
];

function Home() {
  const [hoverState, setHoverState] = useState<"default" | "pic" | "theme">("default");
  useEffect(() => {
    const onEnter = () => setHoverState((s) => (s === "pic" ? s : "theme"));
    const onLeave = () => setHoverState((s) => (s === "theme" ? "default" : s));
    window.addEventListener("theme-toggle-hover", onEnter);
    window.addEventListener("theme-toggle-leave", onLeave);
    return () => {
      window.removeEventListener("theme-toggle-hover", onEnter);
      window.removeEventListener("theme-toggle-leave", onLeave);
    };
  }, []);

  const currentImg =
    hoverState === "pic" ? profileAlt : hoverState === "theme" ? profileAlt2 : profileImg;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Header / profile */}
        <header className="grid gap-6 sm:grid-cols-[160px_1fr_auto] sm:items-start">
          <img
            src={currentImg}
            alt="Profile portrait"
            width={160}
            height={160}
            onMouseEnter={() => setHoverState("pic")}
            onMouseLeave={() => setHoverState("default")}
            className="h-32 w-32 rounded-md object-cover transition-all duration-300 sm:h-40 sm:w-40"
          />
          <div>
            <h1 className="flex items-center gap-2 text-2xl font-bold sm:text-3xl">
              Sean Igual
              <VerifiedBadge className="h-5 w-5" />
            </h1>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <span aria-hidden>📍</span> City, Country
            </p>
            <p className="mt-2 text-sm text-foreground/80">
              Your headline — Role · Discipline · Focus area
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90" href="#contact">
                <span aria-hidden>📅</span> Schedule a Call
              </a>
              <a className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition hover:bg-accent" href="#contact">
                <span aria-hidden>✉️</span> Send Email
              </a>
              <a className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition hover:bg-accent" href="#contact">
                <span aria-hidden>👥</span> Join My Community
              </a>
            </div>
          </div>
          <div className="justify-self-end"><ThemeToggle /></div>
        </header>

        {/* Main grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {/* About */}
          <SiteCard title="About Me" icon={<span aria-hidden>ⓘ</span>}>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                A short paragraph about your background and how your past
                experiences shape the way you approach your craft today.
              </p>
              <p>
                A second paragraph about what you're focused on now —
                the kinds of problems you enjoy solving and the value you
                bring to teams and clients.
              </p>
            </div>
          </SiteCard>

          {/* Experience */}
          <SiteCard title="Experience" icon={<span aria-hidden>💼</span>}>
            <ul className="space-y-4">
              {experience.map((e) => (
                <li key={e.role} className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <span className={`mt-2 inline-block h-1.5 w-1.5 rounded-full ${e.current ? "bg-foreground" : "bg-border"}`} />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{e.role}</div>
                      <div className="text-xs text-muted-foreground">{e.org}</div>
                    </div>
                  </div>
                  <div className="whitespace-nowrap text-xs text-muted-foreground">{e.period}</div>
                </li>
              ))}
            </ul>
          </SiteCard>

          {/* Education */}
          <SiteCard title="Education" icon={<span aria-hidden>🎓</span>}>
            <div>
              <div className="text-sm font-semibold">Your Degree</div>
              <div className="text-xs text-muted-foreground">University Name</div>
              <div className="mt-1 text-xs text-muted-foreground">2022 — 2027</div>
            </div>
          </SiteCard>

          {/* Tech stack snippet */}
          <SiteCard
            title="Tech Stack"
            icon={<span aria-hidden>⚙️</span>}
            action={
              <Link to="/tech-stack" className="text-xs font-medium text-muted-foreground hover:text-foreground">
                View All ›
              </Link>
            }
          >
            <div className="space-y-4 text-sm">
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">Frontend</div>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite", "Figma"].map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">Backend & Database</div>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "PostgreSQL", "MySQL"].map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">Tools & Specialized</div>
                <div className="flex flex-wrap gap-2">
                  {["Git & GitHub", "SEO Optimization", "Google Analytics"].map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </div>
          </SiteCard>

          {/* Projects spans both columns */}
          <SiteCard
            className="sm:col-span-2"
            title="Projects"
            action={
              <Link to="/" className="text-xs font-medium text-muted-foreground hover:text-foreground">
                View All ›
              </Link>
            }
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {projects.map((p) => (
                <article key={p.title} className="overflow-hidden rounded-lg border border-border">
                  {p.img ? (
                    <img src={p.img} alt={p.title} width={800} height={300} loading="lazy" className="h-40 w-full object-cover" />
                  ) : (
                    <div className="h-40 w-full" style={{ background: p.gradient }} />
                  )}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold">{p.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                    <a className="mt-2 inline-block text-xs text-foreground/70 hover:text-foreground" href="#">{p.link}</a>
                  </div>
                </article>
              ))}
            </div>
          </SiteCard>

          {/* Certifications */}
          <SiteCard
            title="Certifications"
            icon={<span aria-hidden>✓</span>}
            action={
              <Link to="/certifications" className="text-xs font-medium text-muted-foreground hover:text-foreground">
                View All ›
              </Link>
            }
          >
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="rounded-md border border-border bg-background p-3">
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.org} · {c.year}</div>
                </li>
              ))}
            </ul>
          </SiteCard>

          {/* Recommendations */}
          <SiteCard title="Recommendations">
            <blockquote className="text-sm italic text-muted-foreground">
              "A short, kind quote from someone who has worked with you and can speak to your strengths."
            </blockquote>
            <p className="mt-3 text-xs font-medium">— Their Name</p>
            <div className="mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-4 rounded-full bg-foreground" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
            </div>
          </SiteCard>

          {/* Beyond the screen */}
          <SiteCard title="Beyond the Screen" icon={<span aria-hidden>📖</span>}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              When I step away from the screen, I focus on the things that
              recharge me — movement, creativity, and time outdoors — so I
              return to my work with fresh energy and perspective.
            </p>
          </SiteCard>

          {/* Let's work together */}
          <SiteCard className="sm:col-span-2" >
            <div id="contact" className="grid gap-6 sm:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-xl font-bold">
                  Let's work <span className="italic font-serif">together</span>
                </h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Available for freelance and collaboration. Reach out
                  about your project — I'd love to hear what you're building.
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Get in touch</div>
                <a className="flex items-start gap-3" href="mailto:hello@example.com">
                  <span aria-hidden>✉️</span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Email</div>
                    <div className="font-medium">hello@example.com</div>
                  </div>
                </a>
                <a className="flex items-start gap-3" href="#">
                  <span aria-hidden>📅</span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Let's talk</div>
                    <div className="font-medium">Schedule a Call</div>
                  </div>
                </a>
              </div>
            </div>
          </SiteCard>
        </div>

        <footer className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
