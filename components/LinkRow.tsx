import type { LinkItem } from "@/data/links";

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export function LinkRow({ item }: { item: LinkItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 transition-colors hover:border-accent hover:bg-surface-hover"
    >
      <span className="min-w-0">
        <span className="block truncate text-base font-semibold text-text">
          {item.title}
        </span>
        <span className="block truncate text-sm text-muted">
          {hostOf(item.url)}
        </span>
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent"
        aria-hidden
      >
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </a>
  );
}
