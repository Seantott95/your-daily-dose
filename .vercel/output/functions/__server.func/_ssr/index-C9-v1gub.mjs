import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteCard } from "./SiteCard-y_50nzqc.mjs";
import { T as Tag } from "./Tag-BPwr0atX.mjs";
import { p as project8 } from "./deanslist-DNP8vUIC.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function VerifiedBadge({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      className: `inline-block h-4 w-4 ${className}`,
      style: { color: "var(--verified)" },
      "aria-label": "Verified",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "currentColor",
            d: "M12 1l2.5 2.2 3.3-.4.9 3.2 3 1.6-1.1 3.1 1.1 3.1-3 1.6-.9 3.2-3.3-.4L12 20l-2.5-2.2-3.3.4-.9-3.2-3-1.6 1.1-3.1L2.3 7.2l3-1.6.9-3.2 3.3.4L12 1z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "white",
            d: "M10.6 14.6l-2.8-2.8 1.2-1.2 1.6 1.6 4-4 1.2 1.2-5.2 5.2z"
          }
        )
      ]
    }
  );
}
function ThemeToggle() {
  const [dark, setDark] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new CustomEvent("theme-changed", { detail: { isDark: next } }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition hover:bg-accent",
      children: dark ? "☀️" : "🌙"
    }
  );
}
const profileImg = "/assets/profile-CWx_waU7.jpg";
const profileAlt = "/assets/profile-alt-DLy4k-Ic.jpg";
const profileAlt2 = "/assets/profile-alt2-DnKL2PnZ.jpg";
const project1 = "/assets/12cd695f8b43ad30b3fa18fa58f8e497-BQA-OBIB.jpeg";
const project2 = "/assets/3be44337ccdb3593f97171f2af0da95c-BVOg0Be2.jpeg";
const project3 = "/assets/1beaada5d3a692a22b10d2544f24a343-B-lyJZQO.jpeg";
const project4 = "/assets/8cd062f53b773486bc78f59269fc3808-DOB2bQ1A.jpeg";
const project5 = "/assets/IMG_0871-C9BPUQV0.jpeg";
const project6 = "/assets/IMG_0872-CUjFSfCU.jpeg";
const project7 = "/assets/IMG_0874-DgKjG9Gv.jpeg";
const project9 = "/assets/IMG_0876-B7Xs-fG7.jpeg";
const project10 = "/assets/b074498b12e256b8906e864505e638a4-C_BMDTve.jpeg";
const project11 = "/assets/ba30a757cbf2c511b9555574232a5b29-BXzW-YAi.jpeg";
const project12 = "/assets/c1c5d36ad72aa12bed69e01893311359-CssWADsC.jpeg";
const project13 = "/assets/e24bd3c2eb5422511c86de35804502c2-CzK_zI6r.jpeg";
const project14 = "/assets/e44f5dc589a1e292ec1a978f88b8b7d0-aNkeoa0_.jpeg";
const profileDarkHover = "/assets/profile-alt2-hover-CWaeCvMb.jpeg";
const experience = [{
  role: "Part-Time Tech Support",
  org: "ADCEM Teleconstruct Corporation",
  period: "2024 — Present",
  current: true
}, {
  role: "Freelance Web Designer",
  org: "Independent Clients",
  period: "2024 — Present"
}, {
  role: "System Developer",
  org: "Clinic Management System",
  period: "2024 — 2025"
}, {
  role: "Lead Developer",
  org: "NFC Tag-Based Electronic Chart System",
  period: "2024 — 2025"
}, {
  role: "System Developer",
  org: "Scholarship Management System",
  period: "2024 — 2025 "
}];
const projects = [{
  title: "NFC-Tag-Based Electronic Chart Editing System",
  desc: "Real-time medical charting using physical NFC tags for secure patient record access.",
  slug: "nfc-tag-electronic-chart",
  link: "https://github.com/Seantott95/NFC-Tag-Based-Electronic-Chart-Editing-System",
  gradient: "linear-gradient(135deg, #1e3a8a 0%, #0d9488 100%)"
}, {
  title: "Clinic Management System",
  desc: "Full-stack OOP PHP portal for patient tracking, automated scheduling, and clinic billing.",
  slug: "clinic-management-system",
  link: "https://github.com/Seantott95/Clinic-Management-System",
  gradient: "linear-gradient(135deg, #312e81 0%, #4f46e5 100%)"
}, {
  title: "Scholarship Management System",
  desc: "Centralized Laravel application for application processing and fund distribution analytics.",
  slug: "scholarship-management-system",
  link: "https://github.com/Seantott95/Scholarship-Management-System",
  gradient: "linear-gradient(135deg, #b91c1c 0%, #d97706 100%)"
}, {
  title: "Sneakers Management & Inventory System",
  desc: "Dynamic retail stock tracking portal managing complex shoe variants and transaction histories.",
  slug: "sneakers-management-system",
  link: "https://github.com/Seantott95/Sneakers-Management-Inventory-System",
  gradient: "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
}];
const certifications = [{
  name: "Networking Certificate",
  org: "Issuer",
  year: "2026"
}, {
  name: "Data Guardians Certificate",
  org: "Issuer",
  year: "2026"
}, {
  name: "Dean's List Certificate",
  org: "Issuer",
  year: "2025"
}];
const galleryImages = [{
  id: 1,
  src: project1,
  alt: "Working on the Clinic Management System"
}, {
  id: 2,
  src: project2,
  alt: "Design wireframes for a freelance client"
}, {
  id: 3,
  src: project3,
  alt: "Coding setup and desk"
}, {
  id: 4,
  src: project4,
  alt: "Collaborating with the team"
}, {
  id: 5,
  src: project5,
  alt: "Working on the Clinic Management System"
}, {
  id: 6,
  src: project6,
  alt: "Design wireframes for a freelance client"
}, {
  id: 7,
  src: project7,
  alt: "Coding setup and desk"
}, {
  id: 8,
  src: project8,
  alt: "Collaborating with the team"
}, {
  id: 9,
  src: project9,
  alt: "Working on the Clinic Management System"
}, {
  id: 10,
  src: project10,
  alt: "Design wireframes for a freelance client"
}, {
  id: 11,
  src: project11,
  alt: "Coding setup and desk"
}, {
  id: 12,
  src: project12,
  alt: "Collaborating with the team"
}, {
  id: 13,
  src: project13,
  alt: "Coding setup and desk"
}, {
  id: 14,
  src: project14,
  alt: "Collaborating with the team"
}];
const recommendations = [{
  quote: "I had the pleasure of mentoring and working alongside Sean at InnovateX Digital. What impressed me most was how quickly he adapted to our tech stack and company workflows. He has a great foundational knowledge of full-stack development and is always eager to learn new best practices. Sean actively seeks feedback, writes clean and maintainable code, and is a fantastic collaborator during code reviews. He is a highly capable developer with a very promising career ahead.",
  name: "Sarah Villanueva",
  title: "Senior Software Engineer at InnovateX Digital"
}, {
  quote: "Working with Sean at Nexus Development was seamless. As a developer, he has an incredibly sharp eye for UI/UX, translating complex wireframes into code flawlessly.",
  name: "David Chen",
  title: "Lead Product Designer at Nexus Development"
}, {
  quote: "Sean built an incredible e-commerce platform for my boutique. He is reliable, highly skilled, and made our entire online checkout completely frictionless.",
  name: "Maria Santos",
  title: "Founder of Solana Boutique"
}, {
  quote: "We hired Sean to redesign our corporate landing page, and he absolutely crushed it. He took our outdated site and turned it into a fast, modern, and highly responsive platform that has significantly improved our client inquiries. His attention to detail in the UI/UX design is highly impressive, and he implemented all of our custom feature requests flawlessly. If you need a developer who understands both design and performance, Sean is your guy.",
  name: "Christian Cruz",
  title: "Co-Founder of Apex Logistics"
}];
function ScrollReveal({
  children,
  className = "",
  direction = "bottom"
}) {
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const slideClass = direction === "left" ? "slide-in-from-left-8" : direction === "right" ? "slide-in-from-right-8" : "slide-in-from-bottom-8";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `${className} transition-all duration-700 ${isVisible ? `animate-in fade-in ${slideClass} fill-mode-both` : "opacity-0"}`, children });
}
function Home() {
  const [isDarkMode, setIsDarkMode] = reactExports.useState(false);
  const [isProfileHovered, setIsProfileHovered] = reactExports.useState(false);
  const [currentRec, setCurrentRec] = reactExports.useState(0);
  const scrollRef = reactExports.useRef(null);
  const [activeImage, setActiveImage] = reactExports.useState(null);
  const [renderKey, setRenderKey] = reactExports.useState(0);
  reactExports.useEffect(() => {
    setRenderKey(Date.now());
  }, []);
  reactExports.useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
    const handleThemeChange = (e) => {
      const customEvent = e;
      setIsDarkMode(customEvent.detail.isDark);
    };
    window.addEventListener("theme-changed", handleThemeChange);
    return () => window.removeEventListener("theme-changed", handleThemeChange);
  }, []);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRec((prev) => (prev + 1) % recommendations.length);
    }, 4e3);
    return () => clearInterval(timer);
  }, []);
  const currentImg = isDarkMode ? isProfileHovered ? profileDarkHover : profileAlt2 : isProfileHovered ? profileAlt : profileImg;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "grid gap-6 sm:grid-cols-[160px_1fr_auto] sm:items-start animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: currentImg, alt: "Profile portrait", width: 160, height: 160, onMouseEnter: () => setIsProfileHovered(true), onMouseLeave: () => setIsProfileHovered(false), className: "h-32 w-32 rounded-md object-cover transition-all duration-300 sm:h-40 sm:w-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "flex items-center gap-2 text-2xl font-bold sm:text-3xl", children: [
          "Sean Igual",
          /* @__PURE__ */ jsxRuntimeExports.jsx(VerifiedBadge, { className: "h-5 w-5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "📍" }),
          " Paranaque City, Metro Manila, Philippines"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-foreground/80", children: "Aspiring Full-Stack Developer | Student Freelancer | UI/UX & WEB DEVELOPER" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:-translate-y-1 hover:shadow-md", href: "tel:+639129987092", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "📅" }),
            " Schedule a Call"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:-translate-y-1 hover:shadow-sm", href: "mailto:seanclarenceigual@gmail.com", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "✉️" }),
            " Send Email"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:-translate-y-1 hover:shadow-sm", href: "src/assets/resume.jpg", target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "📄" }),
            " View Resume"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:-translate-y-1 hover:shadow-sm", href: "https://github.com/Seantott95", target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "👥" }),
            " My Github"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "justify-self-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-5 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteCard, { title: "About Me", icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "ⓘ" }), className: "transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I'm Sean Igual, a passionate Student Freelancer and aspiring Full-Stack Developer based in Parañaque City, Metro Manila." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Currently pursuing my degree at Olivarez College, I actively apply software engineering best practices to my freelance projects." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Beyond core web development, I have a strong passion for UI/UX design. I thrive on bridging the gap between aesthetics and functionality." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteCard, { title: "Experience", icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "💼" }), className: "transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 fill-mode-both", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: experience.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-2 inline-block h-1.5 w-1.5 rounded-full ${e.current ? "bg-foreground" : "bg-border"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: e.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: e.org })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-nowrap text-xs text-muted-foreground", children: e.period })
      ] }, e.role)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteCard, { title: "Education", icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "🎓" }), className: "transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Bachelor of Science in Information Technology" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Olivarez College" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: "2023 — 2027" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteCard, { title: "Tech Stack", icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "⚙️" }), className: "transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tech-stack", className: "text-xs font-medium text-muted-foreground hover:text-foreground", children: "View All ›" }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs font-semibold uppercase tracking-wide text-foreground", children: "Frontend" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite", "Figma"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs font-semibold uppercase tracking-wide text-foreground", children: "Backend & Database" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Node.js", "Python", "PostgreSQL", "MySQL"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs font-semibold uppercase tracking-wide text-foreground", children: "Tools & Specialized" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Git & GitHub", "SEO Optimization", "Google Analytics"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t }, t)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { className: "sm:col-span-2", direction: "bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiteCard, { className: "transition-all duration-150 hover:border-foreground/50 hover:shadow-md", title: "Projects", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/project", className: "text-xs font-medium text-muted-foreground hover:text-foreground", children: "View All ›" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2", children: projects.slice(0, 2).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-lg border border-border bg-card transition-all duration-150 hover:border-foreground/50 hover:shadow-md", children: [
        p.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, width: 800, height: 300, loading: "lazy", className: "h-40 w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 w-full", style: {
          background: p.gradient
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/project/$slug", params: {
            slug: p.slug
          }, className: "text-sm font-semibold text-foreground hover:underline", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: p.link, target: "_blank", rel: "noopener noreferrer", className: "mt-2 inline-block text-xs text-foreground/50 hover:text-foreground hover:underline truncate", children: p.link })
        ] })
      ] }, p.title)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiteCard, { title: "Certifications", icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "✓" }), className: "transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px]", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/certifications", className: "text-xs font-medium text-muted-foreground hover:text-foreground", children: "View All ›" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: certifications.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-md border border-border bg-background p-3 transition-all duration-150 hover:border-foreground/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          c.org,
          " · ",
          c.year
        ] })
      ] }, c.name)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { direction: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { title: "Recommendations", className: "transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[130px] flex-col justify-between transition-all duration-500 sm:min-h-[110px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-sm italic text-muted-foreground", children: [
            '"',
            recommendations[currentRec].quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs font-medium text-foreground", children: [
            "— ",
            recommendations[currentRec].name,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-normal text-muted-foreground block sm:inline sm:ml-1", children: [
              "(",
              recommendations[currentRec].title,
              ")"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-center gap-1.5", children: recommendations.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 transition-all duration-300 rounded-full ${currentRec === index ? "w-4 bg-foreground" : "w-1.5 bg-border"}` }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { className: "sm:col-span-2", direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiteCard, { className: "transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px]", title: "Beyond the Screen", icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "📖" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "When I step away from the screen, I focus on the things that recharge me — movement, creativity, and time outdoors — so I return to my work with fresh energy and perspective." }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { className: "sm:col-span-2", direction: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiteCard, { className: "transition-all duration-150 hover:border-foreground/50 hover:shadow-md hover:-translate-y-[2px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "contact", className: "grid gap-6 sm:grid-cols-[1fr_auto]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold", children: [
            "Let's work ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-serif", children: "together" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-md text-sm text-muted-foreground", children: "Available for freelance and collaboration. Reach out about your project — I'd love to hear what you're building." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Get in touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "flex items-start gap-3 hover:opacity-75 transition-opacity", href: "mailto:seanclarenceigual@gmail.com", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "✉️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "seanclarenceigual@gmail.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "flex items-start gap-3 hover:opacity-75 transition-opacity", href: "tel:+639129987092", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "📅" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Let's talk" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Schedule a Call" })
            ] })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { className: "sm:col-span-2 mt-5", direction: "bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiteCard, { className: "transition-all duration-150 hover:border-foreground/50 hover:shadow-md", title: "Gallery", icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "📸" }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
        if (scrollRef.current) scrollRef.current.scrollLeft -= 250;
      }, className: "absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-r-md border border-l-0 border-border bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition hover:bg-accent md:-left-4 md:rounded-md md:border-l", "aria-label": "Scroll left", children: "‹" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex w-full gap-3 overflow-x-auto scroll-smooth py-1 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: galleryImages.map((img) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveImage(img.src), className: "h-48 w-48 shrink-0 snap-start overflow-hidden rounded-md border border-border sm:h-56 sm:w-56 text-left transition-transform duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.alt, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-150 hover:scale-105" }) }, img.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
        if (scrollRef.current) scrollRef.current.scrollLeft += 250;
      }, className: "absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-l-md border border-r-0 border-border bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition hover:bg-accent md:-right-4 md:rounded-md md:border-r", "aria-label": "Scroll right", children: "›" })
    ] }) }) }),
    activeImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200", onClick: () => setActiveImage(null), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "absolute top-4 right-4 text-white text-2xl font-bold bg-black/40 hover:bg-black/60 w-10 h-10 rounded-full flex items-center justify-center transition", onClick: () => setActiveImage(null), "aria-label": "Close modal", children: "✕" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: activeImage, alt: "Enlarged view", className: "max-h-[90vh] max-w-full rounded-md object-contain shadow-2xl animate-in zoom-in-95 duration-200" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-10 text-center text-xs text-muted-foreground animate-in fade-in duration-700 delay-1000 fill-mode-both", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Sean Igual. All rights reserved."
    ] })
  ] }) }, renderKey);
}
export {
  Home as component
};
