import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function SiteCard({
  title,
  icon,
  action,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border border-border bg-card p-5 sm:p-6 ${className}`, children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "flex items-center gap-2 text-base font-semibold text-foreground", children: [
        icon,
        title
      ] }),
      action
    ] }),
    children
  ] });
}
export {
  SiteCard as S
};
