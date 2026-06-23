# Beeplink — página de links do Fabio Ramos

Página estilo "link na bio" (Next.js + Tailwind), pronta para a Vercel.

## Rodar local

```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Como gerenciar (só 1 arquivo)

Edite **`data/links.ts`**. Cada link é uma linha:

```ts
{ title: "Texto do botão", url: "https://..." }              // botão direto no topo
{ title: "Texto", url: "https://...", category: "BI" }       // entra no acordeão "BI"
```

Regras:
- **Sem `category`** → vira botão direto no topo.
- **Com `category`** → agrupa num acordeão com esse nome.
- **Categoria nova** aparece sozinha — não precisa cadastrar em outro lugar.
- A ordem dos acordeões segue a 1ª vez que a categoria aparece no arquivo.

Outros arquivos de conteúdo:
- `data/profile.ts` — nome, cargo, localização, caminho da foto.
- `data/socials.ts` — ícones de redes sociais (ícones disponíveis em `components/icons.tsx`).

## Trocar a foto

Hoje usa um placeholder com as iniciais (`public/profile.svg`).
Para usar a foto real:

1. Salve sua imagem em `public/profile.jpg`.
2. Em `data/profile.ts`, troque `photo: "/profile.svg"` por `photo: "/profile.jpg"`.

## Deploy na Vercel

Opção recomendada (sem instalar nada): suba o projeto para o GitHub e clique
**Add New → Project** em https://vercel.com — ele detecta Next.js sozinho.

Via CLI:

```bash
npm i -g vercel
vercel          # cria preview
vercel --prod   # publica em produção
```
