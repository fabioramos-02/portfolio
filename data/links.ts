// ============================================================
//  GESTÃO DOS LINKS — edite só este arquivo.
//
//  Para adicionar um link, copie uma linha abaixo:
//    { title: "Texto do botão", url: "https://..." }
//
//  Se quiser agrupar em um acordeão, adicione "category":
//    { title: "...", url: "https://...", category: "BI" }
//
//  Regras:
//   - SEM category  -> vira botão direto no topo.
//   - COM category  -> agrupa num acordeão com esse nome.
//   - Categoria nova aparece sozinha (não precisa cadastrar nada).
//   - A ordem dos acordeões segue a 1ª vez que a categoria aparece.
// ============================================================

export type LinkItem = { title: string; url: string; category?: string };

export const links: LinkItem[] = [
  // --- Links diretos (sem categoria) ---
  {
    title: "Censo dos Serviços Digitais",
    url: "https://mapeamento-inicial-servicos-digitai.vercel.app/",
  },

  // --- BI ---
  {
    title: "Estudo de cartas",
    url: "https://cruzamento-carta.vercel.app/",
    category: "BI",
  },
  {
    title: "Estudo de perfil",
    url: "https://bench-perfil.streamlit.app/",
    category: "BI",
  },
  {
    title: "Estudo de categorias",
    url: "https://setdig-dados.streamlit.app/",
    category: "BI",
  },

  // --- Documentação ---
  {
    title: "Storybook Design System MS",
    url: "https://fabioramos-02.github.io/DS-MS-Design-System/",
    category: "Documentação",
  },
  {
    title: "Apresentação Serviços Repetidos",
    url: "https://cruzamento-carta.vercel.app/apresentacao/",
    category: "Documentação",
  },

  // --- Projetos pessoais ---
  {
    title: "Catálogo de preço dos iPhones",
    url: "https://iphone-gamma-two.vercel.app/",
    category: "Projetos pessoais",
  },
  {
    title: "doc2md — extrair texto de PDF",
    url: "https://huggingface.co/spaces/fabioramos02/doc2md",
    category: "Projetos pessoais",
  },
  {
    title: "Notifica Saúde",
    url: "https://nes-server.equipe4.front.facom.ufms.br/",
    category: "Projetos pessoais",
  },
  {
    title: "B3 Things",
    url: "https://b3-things.lovable.app/",
    category: "Projetos pessoais",
  },
];
