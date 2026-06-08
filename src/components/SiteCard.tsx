import type { ReactNode } from "react";

export function SiteCard({
  title,
  icon,
  action,
  children,
  className = "",
}: {
  title?: string;
  icon?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-border bg-card p-5 sm:p-6 ${className}`}>
      {title && (
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
            {icon}
            {title}
          </h2>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}
