import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteCard } from "./SiteCard-y_50nzqc.mjs";
import { T as Tag } from "./Tag-BPwr0atX.mjs";
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
const groups = [{
  title: "Frontend",
  icon: "🖥️",
  items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite", "Figma", "Framer"]
}, {
  title: "Backend & Database",
  icon: "🗄️",
  items: ["Node.js", "Python", "PHP", "MySQL", "PostgreSQL"]
}, {
  title: "CMS & Marketing",
  icon: "🎯",
  items: ["WordPress", "SEO Optimization", "Google Analytics", "Search Console", "MailChimp"]
}, {
  title: "Data Analysis",
  icon: "📊",
  items: ["SQL", "Python", "Data Visualization", "Excel"]
}, {
  title: "Tools & Version Control",
  icon: "🛠️",
  items: ["Git", "GitHub", "VS Code", "Terminal"]
}];
function TechStack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground", children: "← Back to Home" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-3xl font-bold sm:text-4xl", children: "Full Tech Stack" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Comprehensive list of tools and technologies I use." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-5 sm:grid-cols-2", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(SiteCard, { title: g.title, icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: g.icon }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: g.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: i }, i)) }) }, g.title)) })
  ] }) });
}
export {
  TechStack as component
};
