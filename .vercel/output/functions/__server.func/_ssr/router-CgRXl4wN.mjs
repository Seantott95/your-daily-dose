import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, S as ScrollRestoration, O as Outlet, H as HeadContent, b as Scripts, d as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-DqayfMuJ.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // I updated these titles for you so your site looks professional when shared!
      { title: "Sean Igual — Portfolio" },
      { name: "description", content: "Personal portfolio of Sean Igual showcasing web development projects." },
      { name: "author", content: "Sean Igual" },
      { property: "og:title", content: "Sean Igual — Portfolio" },
      { property: "og:description", content: "Personal portfolio of Sean Igual" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      // 👇 UPDATED FOR PNG 👇
      {
        rel: "icon",
        type: "image/png",
        // Changed from image/x-icon to image/png
        href: "myTabIcon"
        // Make sure this exactly matches the file in your public folder!
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollRestoration, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
const $$splitComponentImporter$4 = () => import("./tech-stack-6ay9n0hV.mjs");
const Route$4 = createFileRoute("/tech-stack")({
  head: () => ({
    meta: [{
      title: "Tech Stack — Your Name"
    }, {
      name: "description",
      content: "Comprehensive list of tools and technologies I use across frontend, backend, data, and design."
    }, {
      property: "og:title",
      content: "Tech Stack — Your Name"
    }, {
      property: "og:description",
      content: "The full set of tools and technologies I work with."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./certifications-BQ0Va0QW.mjs");
const Route$3 = createFileRoute("/certifications")({
  head: () => ({
    meta: [{
      title: "Certifications — Sean Igual"
    }, {
      name: "description",
      content: "Professional credentials and specialized training."
    }, {
      property: "og:title",
      content: "Certifications — Sean Igual"
    }, {
      property: "og:description",
      content: "Professional credentials and specialized training."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-C9-v1gub.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Sean Igual — Portfolio"
    }, {
      name: "description",
      content: "Personal portfolio of Sean Igual showcasing experience, projects, certifications, and a way to get in touch."
    }, {
      property: "og:title",
      content: "Sean Igual — Portfolio"
    }, {
      property: "og:description",
      content: "Personal portfolio of Sean Igual showcasing experience, projects, and certifications."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./project.index-C-n2MMpm.mjs");
const Route$1 = createFileRoute("/project/")({
  head: () => ({
    meta: [{
      title: "Projects — Sean Igual"
    }, {
      name: "description",
      content: "Portfolio projects and case studies by Sean Igual."
    }, {
      property: "og:title",
      content: "Projects — Sean Igual"
    }, {
      property: "og:description",
      content: "Portfolio projects and case studies by Sean Igual."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./project._slug-_23uFF9N.mjs");
const Route = createFileRoute("/project/$slug")({
  head: ({
    params
  }) => ({
    meta: [{
      title: `${params.slug} — Case Study`
    }, {
      name: "description",
      content: "Project case study covering overview, tech stack, and key features."
    }, {
      property: "og:title",
      content: `${params.slug} — Case Study`
    }, {
      property: "og:description",
      content: "Project case study with overview, tech stack, and key features."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TechStackRoute = Route$4.update({
  id: "/tech-stack",
  path: "/tech-stack",
  getParentRoute: () => Route$5
});
const CertificationsRoute = Route$3.update({
  id: "/certifications",
  path: "/certifications",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const ProjectIndexRoute = Route$1.update({
  id: "/project/",
  path: "/project/",
  getParentRoute: () => Route$5
});
const ProjectSlugRoute = Route.update({
  id: "/project/$slug",
  path: "/project/$slug",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  CertificationsRoute,
  TechStackRoute,
  ProjectSlugRoute,
  ProjectIndexRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
