import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
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
const dataAnalystCert = "/assets/Networking_Basics_certificate_seanclarence-igual-olivarezcollege-edu-ph_4aa31c5a-9dd3-4d0e-91e6-dee4620eb812-pMHzVjqN.jpg";
const sqlCert = "/assets/E-Cert-Igual-CvvhBQow.png";
const promptEngCert = "/assets/Slide27-B4--V4Hm.PNG";
const certs = [{
  name: "Networking Certificate",
  org: "Issuer",
  year: "2026",
  img: dataAnalystCert
  // 👈 Notice there are NO quotes around it here!
}, {
  name: "Data Guardians Certificate",
  org: "Issuer",
  year: "2026",
  img: sqlCert
}, {
  name: "Dean's List Certificate",
  org: "Issuer",
  year: "2025",
  img: project8
}, {
  name: "Research Certificate",
  org: "Issuer",
  year: "2025",
  img: promptEngCert
}];
function Certifications() {
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => router.history.back(), className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground bg-transparent border-none p-0 cursor-pointer", children: "← Go Back" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-3xl font-bold sm:text-4xl", children: "Certifications" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Professional credentials and specialized training in Data, SQL, and AI." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-5 sm:grid-cols-2", children: certs.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-xl border border-border bg-card", children: [
      c.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: `${c.name} Certificate`, loading: "lazy", className: "h-56 w-full object-contain bg-muted border-b border-border" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-56 items-center justify-center text-sm font-semibold tracking-wider text-white text-center px-4", style: {
        background: "linear-gradient(135deg, oklch(0.22 0.02 260), oklch(0.32 0.05 165))"
      }, children: "STATEMENT OF ACCOMPLISHMENT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          c.org,
          " · ",
          c.year
        ] })
      ] })
    ] }, c.name)) })
  ] }) });
}
export {
  Certifications as component
};
