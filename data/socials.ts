import type { IconName } from "@/components/icons";

// Redes sociais e contatos exibidos como ícones no topo.
// Para adicionar: inclua { label, url, icon }. Ícones disponíveis em components/icons.tsx.

export type Social = { label: string; url: string; icon: IconName };

export const socials: Social[] = [
  {
    label: "Instagram",
    url: "https://instagram.com/fabioramos_02",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/fabio-ramos-7b8608204",
    icon: "linkedin",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@fabioramos9529",
    icon: "youtube",
  },
  { label: "GitHub", url: "https://github.com/fabioramos-02", icon: "github" },
  { label: "E-mail", url: "mailto:fabiowilliam466@gmail.com", icon: "mail" },
  // { label: "E-mail institucional", url: "mailto:framos@segov.ms.gov.br", icon: "mail" },
];
