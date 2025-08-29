# Polus Eletrotécnica • Catálogo Técnico

Projeto Next.js (App Router) + Tailwind, pronto para subir na Vercel.

## Rodar local
```bash
npm i
npm run dev
```

## Deploy na Vercel
- Faça login em vercel.com
- "Add New… → Project" e selecione este repositório/pasta
- Build Command: `npm run build` (padrão)
- Output: `.next` (padrão)
- Não requer variáveis de ambiente

## Estrutura
- `/app` páginas
- `/lib` dados (produtos, marcas, categorias)
- `/public/produtos` imagens (já incluídas do seu acervo)
- `/public/marcas` logos
- `/public/reviews` avatares dos clientes
- `/public/logo-rotating.svg` logo giratória (topo)
- `/public/loading-logo.png` botão que abre/fecha a sidebar

## Observações
- Sem sistema de login/conta.
- Sem preços; botão **Consultar no WhatsApp** nos cards e na página do produto.
- Busca com debounce e filtros persistidos na URL.
- Tema claro/escuro automático (prefers-color-scheme).
- Logo gira continuamente (6s/volta) e acelera no hover (2s/volta), mantendo continuidade.
- Botão flutuante do WhatsApp com pulso suave (a cada ~15s).

