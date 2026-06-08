export function VerifiedBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`inline-block h-4 w-4 ${className}`}
      style={{ color: "var(--verified)" }}
      aria-label="Verified"
    >
      <path
        fill="currentColor"
        d="M12 1l2.5 2.2 3.3-.4.9 3.2 3 1.6-1.1 3.1 1.1 3.1-3 1.6-.9 3.2-3.3-.4L12 20l-2.5-2.2-3.3.4-.9-3.2-3-1.6 1.1-3.1L2.3 7.2l3-1.6.9-3.2 3.3.4L12 1z"
      />
      <path
        fill="white"
        d="M10.6 14.6l-2.8-2.8 1.2-1.2 1.6 1.6 4-4 1.2 1.2-5.2 5.2z"
      />
    </svg>
  );
}
