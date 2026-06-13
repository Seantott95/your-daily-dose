import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { T as Tag } from "./Tag-BPwr0atX.mjs";
import { R as Route } from "./router-CgRXl4wN.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const projectsData = [{
  title: "NFC-Tag-Based Electronic Chart Editing System",
  desc: "Real-time medical charting using physical NFC tags for secure patient record access.",
  slug: "nfc-tag-electronic-chart",
  link: "https://github.com/Seantott95/NFC-Tag-Based-Electronic-Chart-Editing-System",
  gradient: "linear-gradient(135deg, #1e3a8a 0%, #0d9488 100%)",
  tags: ["React", "TypeScript", "Tailwind CSS", "Vite"]
}, {
  title: "Clinic Management System",
  desc: "Full-stack OOP PHP portal for patient tracking, automated scheduling, and clinic billing.",
  slug: "clinic-management-system",
  link: "https://github.com/Seantott95/Clinic-Management-System",
  gradient: "linear-gradient(135deg, #312e81 0%, #4f46e5 100%)",
  tags: ["PHP", "OOP", "MySQL", "Tailwind CSS"]
}, {
  title: "Scholarship Management System",
  desc: "Centralized Laravel application for application processing and fund distribution analytics.",
  slug: "scholarship-management-system",
  link: "https://github.com/Seantott95/Scholarship-Management-System",
  gradient: "linear-gradient(135deg, #b91c1c 0%, #d97706 100%)",
  tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"]
}, {
  title: "Sneakers Management & Inventory System",
  desc: "Dynamic retail stock tracking portal managing complex shoe variants and transaction histories.",
  slug: "sneakers-management-system",
  link: "https://github.com/Seantott95/Sneakers-Management-Inventory-System",
  gradient: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
  tags: ["Node.js", "React", "PostgreSQL", "Tailwind CSS"]
}];
function ProjectCaseStudy() {
  const {
    slug
  } = Route.useParams();
  const router = useRouter();
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background flex flex-col items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "Project Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => router.history.back(), className: "mt-4 text-sm text-muted-foreground hover:text-foreground", children: "← Go Back" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => router.history.back(), className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground bg-transparent border-none p-0 cursor-pointer", children: "← Go Back" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-3xl font-bold sm:text-4xl", children: project.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: project.desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-6 sm:grid-cols-[260px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Project Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-3 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Lead Developer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: "Sean Igual" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Architecture" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: "Independent Refactor" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: "Web Platform" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 pt-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-3 py-2.5 text-xs font-semibold text-background transition hover:opacity-90", children: "🌐 View Repository / Live Site" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Tech Stack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: project.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t }, t)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 w-full rounded-xl border border-border", style: {
          background: project.gradient || "linear-gradient(135deg, oklch(0.95 0.04 60), oklch(0.88 0.08 30))"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "📱 Mobile-Optimized Design" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Fully responsive across devices, with dedicated sections for About, Services, and Contact." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "⚡ Interactive Inquiry System" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Custom UI script manages submission states, toggling buttons to 'Sending' and surfacing success alerts." })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ProjectCaseStudy as component
};
