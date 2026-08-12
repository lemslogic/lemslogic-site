# LEMS Logic

> **Tecnologia que simplifica negócios.**

Site institucional da **LEMS Logic**, empresa focada em sistemas personalizados,
automação empresarial, suporte de TI e infraestrutura tecnológica.

🌐 **Site:** `lemslogic.com.br`

## Sobre o projeto

Este repositório contém o site institucional e portfólio público da LEMS Logic.
A aplicação foi construída para apresentar os serviços, projetos demonstrativos e
canais de contato da empresa.

Sistemas comerciais desenvolvidos para clientes podem utilizar repositórios
privados separados deste projeto.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Docker / Docker Compose
- Vercel para deploy

## Páginas

- `/` — Home
- `/solucoes` — Soluções
- `/projetos` — Projetos e portfólio
- `/sobre` — Sobre a LEMS Logic
- `/contato` — Contato

## Executando localmente

### Requisitos

- Node.js compatível com a versão atual do Next.js utilizada pelo projeto
- npm

```bash
npm install
cp .env.example .env.local
npm run dev
```

No Windows PowerShell, você pode usar:

```powershell
Copy-Item .env.example .env.local
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Variáveis de ambiente

Crie `.env.local` a partir de `.env.example`.

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5512978985123
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/lemslogic
NEXT_PUBLIC_GITHUB_URL=https://github.com/lemslogic
```

O WhatsApp deve ser informado somente com números, incluindo DDI e DDD.

## Docker

```bash
docker compose up --build
```

Depois acesse `http://localhost:3000`.

## Estrutura principal

```text
src/
├── app/          # páginas, layout, metadata, sitemap e robots
├── components/   # componentes compartilhados
└── lib/          # configurações e utilitários

public/
└── brand/        # ativos da identidade visual
```

## SEO e acessibilidade

O projeto já inclui:

- metadata por página;
- URLs canônicas;
- Open Graph e Twitter Cards;
- sitemap;
- robots;
- manifest;
- favicon e ícones;
- JSON-LD básico;
- navegação por teclado;
- `prefers-reduced-motion`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
```

## Status

**v0.9 — preparação para GitHub**

O site está em desenvolvimento e será publicado oficialmente em
`lemslogic.com.br`.

---

© LEMS Logic. Todos os direitos reservados.
