import type { LinkItem } from "@/data/links";

export type Category = { name: string; items: LinkItem[] };

// Separa os links em: diretos (sem categoria) e categorias (acordeões).
// A ordem das categorias segue a primeira aparição no array de links.
export function groupLinks(links: LinkItem[]): {
  direct: LinkItem[];
  categories: Category[];
} {
  const direct: LinkItem[] = [];
  const categories: Category[] = [];
  const index = new Map<string, Category>();

  for (const link of links) {
    if (!link.category) {
      direct.push(link);
      continue;
    }
    let group = index.get(link.category);
    if (!group) {
      group = { name: link.category, items: [] };
      index.set(link.category, group);
      categories.push(group);
    }
    group.items.push(link);
  }

  return { direct, categories };
}
