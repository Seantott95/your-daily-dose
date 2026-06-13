import { useEffect, useState, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteCard } from "@/components/SiteCard";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { Tag } from "@/components/Tag";
import { ThemeToggle } from "@/components/ThemeToggle";
import profileImg from "@/assets/profile.jpg";
import profileAlt from "@/assets/profile-alt.jpg";
import profileAlt2 from "@/assets/profile-alt2.jpg";
import project1 from "@/assets/12cd695f8b43ad30b3fa18fa58f8e497.jpeg";
import project2 from "@/assets/3be44337ccdb3593f97171f2af0da95c.jpeg";
import project3 from "@/assets/1beaada5d3a692a22b10d2544f24a343.jpeg";
import project4 from "@/assets/8cd062f53b773486bc78f59269fc3808.jpeg";
import project5 from "@/assets/IMG_0871.jpeg";
import project6 from "@/assets/IMG_0872.jpeg";
import project7 from "@/assets/IMG_0874.jpeg";
import project8 from "@/assets/deanslist.jpeg";
import project9 from "@/assets/IMG_0876.jpeg";
import project10 from "@/assets/b074498b12e256b8906e864505e638a4.jpeg";
import project11 from "@/assets/ba30a757cbf2c511b9555574232a5b29.jpeg";
import project12 from "@/assets/c1c5d36ad72aa12bed69e01893311359.jpeg";
import project13 from "@/assets/e24bd3c2eb5422511c86de35804502c2.jpeg";
import project14 from "@/assets/e44f5dc589a1e292ec1a978f88b8b7d0.jpeg";
import profileDarkHover from "@/assets/profile-alt2-hover.jpeg";

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
  { 
    role: "Part-Time Tech Support", 
    org: "ADCEM Teleconstruct Corporation", 
    period: "2024 — Present", 
    current: true 
  },
  { 
    role: "Freelance Web Designer", 
    org: "Independent Clients", 
    period: "2024 — Present" 
  },
  { 
    role: "System Developer", 
    org: "Clinic Management System", 
    period: "2024 — 2025" 
  },
  { 
    role: "Lead Developer", 
    org: "NFC Tag-Based Electronic Chart System", 
    period: "2024 — 2025" 
  },
  { 
    role: "System Developer", 
    org: "Scholarship Management System", 
    period: "2024 — 2025 " 
  },
];

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

const certifications = [
  { name: "Networking Certificate", org: "Issuer", year: "2026" },
  { name: "Data Guardians Certificate", org: "Issuer", year: "2026" },
  { name: "Dean's List Certificate", org: "Issuer", year: "2025" },
];

const galleryImages = [
  { id: 1, src: project1, alt: "Working on the Clinic Management System" },
  { id: 2, src: project2, alt: "Design wireframes for a freelance client" },
  { id: 3, src: project3, alt: "Coding setup and desk" },
  { id: 4, src: project4, alt: "Collaborating with the team" },
  { id: 5, src: project5, alt: "Working on the Clinic Management System" },
  { id: 6, src: project6, alt: "Design wireframes for a freelance client" },
  { id: 7, src: project7, alt: "Coding setup and desk" },
  { id: 8, src: project8, alt: "Collaborating with the team" },
  { id: 9, src: project9, alt: "Working on the Clinic Management System" },
  { id: 10, src: project10, alt: "Design wireframes for a freelance client" },
  { id: 11, src: project11, alt: "Coding setup and desk" },
  { id: 12, src: project12, alt: "Collaborating with the team" },
  { id: 13, src: project13, alt: "Coding setup and desk" },
  { id: 14, src: project14, alt: "Collaborating with the team" },
  
];

const recommendations = [
  {
    quote: "I had the pleasure of mentoring and working alongside Sean at InnovateX Digital. What impressed me most was how quickly he adapted to our tech stack and company workflows. He has a great foundational knowledge of full-stack development and is always eager to learn new best practices. Sean actively seeks feedback, writes clean and maintainable code, and is a fantastic collaborator during code reviews. He is a highly capable developer with a very promising career ahead.",
    name: "Sarah Villanueva",
    title: "Senior Software Engineer at InnovateX Digital"
  },
  {
    quote: "Working with Sean at Nexus Development was seamless. As a developer, he has an incredibly sharp eye for UI/UX, translating complex wireframes into code flawlessly.",
    name: "David Chen",
    title: "Lead Product Designer at Nexus Development"
  },
  {
    quote: "Sean built an incredible e-commerce platform for my boutique. He is reliable, highly skilled, and made our entire online checkout completely frictionless.",
    name: "Maria Santos",
    title: "Founder of Solana Boutique"
  },
  {
    quote:"We hired Sean to redesign our corporate landing page, and he absolutely crushed it. He took our outdated site and turned it into a fast, modern, and highly responsive platform that has significantly improved our client inquiries. His attention to detail in the UI/UX design is highly impressive, and he implemented all of our custom feature requests flawlessly. If you need a developer who understands both design and performance, Sean is your guy.",
    name: "Christian Cruz",
    title: "Co-Founder of Apex Logistics"
  },
];

// Helper Component for Scroll Animations
function ScrollReveal({ 
  children, 
  className = "", 
  direction = "bottom" 
}: { 
  children: React.ReactNode, 
  className?: string, 
  direction?: "bottom" | "left" | "right" 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const slideClass = 
    direction === "left" ? "slide-in-from-left-8" :
    direction === "right" ? "slide-in-from-right-8" : 
    "slide-in-from-bottom-8";

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${
        isVisible ? `animate-in fade-in ${slideClass} fill-mode-both` : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [currentRec, setCurrentRec] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    setRenderKey(Date.now());
  }, []);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsDarkMode(customEvent.detail.isDark);
    };

    window.addEventListener("theme-changed", handleThemeChange);
    return () => window.removeEventListener("theme-changed", handleThemeChange);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRec((prev) => (prev + 1) % recommendations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentImg = isDarkMode
    ? (isProfileHovered ? profileDarkHover : profileAlt2)
    : (isProfileHovered ? profileAlt : profileImg);

  return (
    <main key={renderKey} className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Header / profile */}
        <header className="grid gap-6 sm:grid-cols-[160px_1fr_auto] sm:items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
          <img
  src={currentImg}
  alt="Profile portrait"
  width={160}
  height={160}
  onMouseEnter={() => setIsProfileHovered(true)}
  onMouseLeave={() => setIsProfileHovered(false)}
  onClick={() => setIsProfileHovered((prev) => !prev)}
  className="h-32 w-32 rounded-md object-cover transition-all duration-300 sm:h-40 sm:w-40 cursor-pointer active:scale-95"
/>
          <div>
            <h1 className="flex items-center gap-2 text-2xl font-bold sm:text-3xl">
              Sean Igual
              <VerifiedBadge className="h-5 w-5" />
            </h1>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <span aria-hidden>📍</span> Paranaque City, Metro Manila, Philippines
            </p>
            <p className="mt-2 text-sm text-foreground/80">
              Aspiring Full-Stack Developer | Student Freelancer | UI/UX & WEB DEVELOPER
            </p>
            
            {/* Added hover transition animations to these top buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:-translate-y-1 hover:shadow-md" href="tel:+639129987092">
                <span aria-hidden>📅</span> Schedule a Call
              </a>
              <a className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:-translate-y-1 hover:shadow-sm" href="mailto:seanclarenceigual@gmail.com">
                <span aria-hidden>✉️</span> Send Email
              </a>
              {/* Changed href to your file, added target="_blank" so it opens in a new tab, and changed the emoji! */}
<a 
  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:-translate-y-1 hover:shadow-sm" 
  href="src/assets/resume.jpg" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <span aria-hidden>📄</span> View Resume
</a>
              <a className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:-translate-y-1 hover:shadow-sm" href="https://github.com/Seantott95" target="_blank" rel="noreferrer">
                <span aria-hidden>👥</span> My Github
              </a>
            </div>
          </div>
          <div className="justify-self-end"><ThemeToggle /></div>
        </header>

        {/* Main grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {/* About (Top Card - Animated on Load) */}
          <SiteCard 
            title="About Me" 
            icon={<span aria-hidden>ⓘ</span>}
            className="transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both"
          >
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                I'm Sean Igual, a passionate Student Freelancer and aspiring Full-Stack Developer based in Parañaque City, Metro Manila. 
              </p>
              <p>
                Currently pursuing my degree at Olivarez College,
                I actively apply software engineering best practices to my freelance projects.
              </p>
              <p>
                Beyond core web development, I have a strong passion for UI/UX design. I thrive on bridging the gap between aesthetics
                and functionality.
              </p>
            </div>
          </SiteCard>

          {/* Experience (Top Card - Animated on Load) */}
          <SiteCard 
            title="Experience" 
            icon={<span aria-hidden>💼</span>}
            className="transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 fill-mode-both"
          >
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

          {/* Education (Top Card - Animated on Load) */}
          <SiteCard 
            title="Education" 
            icon={<span aria-hidden>🎓</span>}
            className="transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both"
          >
            <div>
              <div className="text-sm font-semibold">Bachelor of Science in Information Technology</div>
              <div className="text-xs text-muted-foreground">Olivarez College</div>
              <div className="mt-1 text-xs text-muted-foreground">2023 — 2027</div>
            </div>
          </SiteCard>

          {/* Tech stack snippet (Top Card - Animated on Load) */}
          <SiteCard
            title="Tech Stack"
            icon={<span aria-hidden>⚙️</span>}
            className="transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both"
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

          {/* Projects (Scroll Animation - Slides from Bottom) */}
          <ScrollReveal className="sm:col-span-2" direction="bottom">
            <SiteCard
              className="transition-all duration-150 hover:border-foreground/50 hover:shadow-md"
              title="Projects"
              action={
                <Link to="/project" className="text-xs font-medium text-muted-foreground hover:text-foreground">
                  View All ›
                </Link>
              }
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {projects.slice(0, 2).map((p) => (
                  <article key={p.title} className="overflow-hidden rounded-lg border border-border bg-card transition-all duration-150 hover:border-foreground/50 hover:shadow-md">
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
                      
                      {/* FIX: Changed this to a real <a> tag so it can be clicked! */}
                      <a 
                        href={p.link} 
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
            </SiteCard>
          </ScrollReveal>

          {/* Certifications (Scroll Animation - Slides from Left) */}
          <ScrollReveal direction="left">
            <SiteCard
              title="Certifications"
              icon={<span aria-hidden>✓</span>}
              className="transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px]"
              action={
                <Link to="/certifications" className="text-xs font-medium text-muted-foreground hover:text-foreground">
                  View All ›
                </Link>
              }
            >
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="rounded-md border border-border bg-background p-3 transition-all duration-150 hover:border-foreground/50">
                    <div className="text-sm font-semibold">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.org} · {c.year}</div>
                  </li>
                ))}
              </ul>
            </SiteCard>
          </ScrollReveal>

          {/* Recommendations (Scroll Animation - Slides from Right) */}
          <ScrollReveal direction="right">
            <SiteCard 
              title="Recommendations"
              className="transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px]"
            >
              <div className="flex min-h-[130px] flex-col justify-between transition-all duration-500 sm:min-h-[110px]">
                <blockquote className="text-sm italic text-muted-foreground">
                  "{recommendations[currentRec].quote}"
                </blockquote>
                <p className="mt-3 text-xs font-medium text-foreground">
                  — {recommendations[currentRec].name}{" "}
                  <span className="text-[10px] font-normal text-muted-foreground block sm:inline sm:ml-1">
                    ({recommendations[currentRec].title})
                  </span>
                </p>
              </div>

              <div className="mt-4 flex justify-center gap-1.5">
                {recommendations.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      currentRec === index ? "w-4 bg-foreground" : "w-1.5 bg-border"
                    }`}
                  />
                ))}
              </div>
            </SiteCard>
          </ScrollReveal>

          {/* Beyond the screen (Scroll Animation - Slides from Left) */}
          <ScrollReveal className="sm:col-span-2" direction="left">
            <SiteCard 
              className="transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px]" 
              title="Beyond the Screen" 
              icon={<span aria-hidden>📖</span>}
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                When I step away from the screen, I focus on the things that
                recharge me — movement, creativity, and time outdoors — so I
                return to my work with fresh energy and perspective.
              </p>
            </SiteCard>
          </ScrollReveal>

          {/* Let's work together (Scroll Animation - Slides from Right) */}
          <ScrollReveal className="sm:col-span-2" direction="right">
            <SiteCard className="transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px]">
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
                  <a className="flex items-start gap-3 hover:opacity-75 transition-opacity" href="mailto:seanclarenceigual@gmail.com">
                    <span aria-hidden>✉️</span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">Email</div>
                      <div className="font-medium">seanclarenceigual@gmail.com</div>
                    </div>
                  </a>
                  <a className="flex items-start gap-3 hover:opacity-75 transition-opacity" href="tel:+639129987092">
                    <span aria-hidden>📅</span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">Let's talk</div>
                      <div className="font-medium">Schedule a Call</div>
                    </div>
                  </a>
                </div>
              </div>
            </SiteCard>
          </ScrollReveal>
        </div>

        {/* Slider Gallery (Scroll Animation - Slides from Bottom) */}
        <ScrollReveal className="sm:col-span-2 mt-5" direction="bottom">
          <SiteCard 
            className="transition-all duration-150 hover:border-foreground/50 hover:shadow-md" 
            title="Gallery" 
            icon={<span aria-hidden>📸</span>}
          >
            <div className="relative group flex items-center">
              <button
                type="button"
                onClick={() => {
                  if (scrollRef.current) scrollRef.current.scrollLeft -= 250;
                }}
                className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-r-md border border-l-0 border-border bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition hover:bg-accent md:-left-4 md:rounded-md md:border-l"
                aria-label="Scroll left"
              >
                ‹
              </button>

              <div
                ref={scrollRef}
                className="flex w-full gap-3 overflow-x-auto scroll-smooth py-1 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {galleryImages.map((img) => (
                  <button 
                    key={img.id} 
                    type="button"
                    onClick={() => setActiveImage(img.src)}
                    className="h-48 w-48 shrink-0 snap-start overflow-hidden rounded-md border border-border sm:h-56 sm:w-56 text-left transition-transform duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      loading="lazy" 
                      className="h-full w-full object-cover transition-transform duration-150 hover:scale-105"
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  if (scrollRef.current) scrollRef.current.scrollLeft += 250;
                }}
                className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-l-md border border-r-0 border-border bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition hover:bg-accent md:-right-4 md:rounded-md md:border-r"
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          </SiteCard>
        </ScrollReveal>

        {/* Full-screen Lightbox Modal Overlay */}
        {activeImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setActiveImage(null)}
          >
            <button 
              type="button"
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/40 hover:bg-black/60 w-10 h-10 rounded-full flex items-center justify-center transition"
              onClick={() => setActiveImage(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img 
              src={activeImage} 
              alt="Enlarged view" 
              className="max-h-[90vh] max-w-full rounded-md object-contain shadow-2xl animate-in zoom-in-95 duration-200"
            />
          </div>
        )}

        <footer className="mt-10 text-center text-xs text-muted-foreground animate-in fade-in duration-700 delay-1000 fill-mode-both">
          © {new Date().getFullYear()} Sean Igual. All rights reserved.
        </footer>
      </div>
    </main>
  );
}