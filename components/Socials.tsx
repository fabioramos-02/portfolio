import { socials } from "@/data/socials";
import { icons } from "@/components/icons";

export function Socials() {
  return (
    <nav className="mt-6 flex flex-wrap items-center justify-center gap-3">
      {socials.map((social) => {
        const Icon = icons[social.icon];
        return (
          <a
            key={social.label}
            href={social.url}
            target={social.url.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Icon />
          </a>
        );
      })}
    </nav>
  );
}
