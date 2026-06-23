"use client";

import { useState } from "react";
import type { Category } from "@/lib/group";
import { LinkRow } from "@/components/LinkRow";

export function Accordion({ category }: { category: Category }) {
  const [open, setOpen] = useState(false);
  const count = category.items.length.toString().padStart(2, "0");

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-surface-hover"
      >
        <span className="flex items-center gap-3">
          <span className="font-mono text-xs text-accent">[{count}]</span>
          <span className="text-sm font-semibold text-text">{category.name}</span>
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-4 w-4 text-muted transition-transform ${open ? "rotate-180 text-accent" : ""}`}
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="flex flex-col gap-2 border-t border-border p-2">
          {category.items.map((item) => (
            <LinkRow key={item.url} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
