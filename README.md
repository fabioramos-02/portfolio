# Portfolio — página de links do Fabio Ramos

Página estilo "link na bio" (Next.js + Tailwind), publicada na Vercel.

**🔗 No ar:** https://portfolio-ivory-rho-60.vercel.app

Deploy contínuo: cada `git push` na branch `master` republica automaticamente
(repositório conectado ao projeto na Vercel).

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

A foto fica em `public/` e o caminho em `data/profile.ts` (`photo`).
Para usar outra imagem: substitua o arquivo em `public/` e ajuste o `photo`.

## Deploy na Vercel

Já publicado e conectado ao GitHub — basta `git push` para republicar.

Deploy manual (opcional):

```bash
vercel --prod   # publica em produção
```
