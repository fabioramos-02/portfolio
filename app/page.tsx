import { Hero } from "@/components/Hero";
import { Socials } from "@/components/Socials";
import { LinkRow } from "@/components/LinkRow";
import { Accordion } from "@/components/Accordion";
import { links } from "@/data/links";
import { groupLinks } from "@/lib/group";

export default function Home() {
  const { direct, categories } = groupLinks(links);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col px-5 py-12">
      <Hero />
      <Socials />

      <section className="mt-8 flex flex-col gap-2.5">
        {direct.map((item) => (
          <LinkRow key={item.url} item={item} />
        ))}

        {categories.map((category) => (
          <Accordion key={category.name} category={category} />
        ))}
      </section>

      <footer className="mt-auto pt-10 text-center text-sm text-muted">
        © {new Date().getFullYear()} · Campo Grande — MS
      </footer>
    </main>
  );
}
