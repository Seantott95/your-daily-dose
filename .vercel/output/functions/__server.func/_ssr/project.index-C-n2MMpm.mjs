import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
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
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground", children: "← Back to Home" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-3xl font-bold sm:text-4xl", children: "Projects" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "A showcase of some of my favorite web platforms, e-commerce stores, and creative projects." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-5 sm:grid-cols-2", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-lg border border-border bg-card", children: [
      p.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, width: 800, height: 300, loading: "lazy", className: "h-40 w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 w-full", style: {
        background: p.gradient
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/project/$slug", params: {
          slug: p.slug
        }, className: "text-sm font-semibold text-foreground hover:underline", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: p.link.startsWith("http") ? p.link : `https://${p.link}`, target: "_blank", rel: "noopener noreferrer", className: "mt-2 inline-block text-xs text-foreground/50 hover:text-foreground hover:underline truncate", children: p.link })
      ] })
    ] }, p.title)) })
  ] }) });
}
export {
  ProjectsPage as component
};
