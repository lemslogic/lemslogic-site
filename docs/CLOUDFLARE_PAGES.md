# Deploy no Cloudflare Pages

Este projeto usa o modo **Static Export** do Next.js. O comando `npm run build`
gera o site estático na pasta `out/`.

## 1. Testar antes do push

```bash
npm install
npm run build
```

Ao final, confirme que existe a pasta `out/`.

## 2. Commit e push

```bash
git add .
git commit -m "chore: prepare site for Cloudflare Pages"
git push
```

## 3. Criar o projeto no Cloudflare Pages

No painel Cloudflare:

1. Vá em **Workers & Pages**.
2. Selecione **Create application**.
3. Abra a aba **Pages**.
4. Escolha **Import an existing Git repository**.
5. Autorize/conecte o GitHub e selecione `lemslogic-site`.
6. Use as configurações:

```text
Production branch: main
Framework preset: Next.js (Static HTML Export)
Build command: npx next build
Build output directory: out
Root directory: /
```

O projeto inclui `.node-version` com Node.js 22.16.0.

## 4. Variáveis de ambiente

Como existem valores padrão no código, o site funciona sem estas variáveis. Ainda
assim, é recomendado cadastrá-las no Cloudflare para facilitar trocas futuras:

```text
NEXT_PUBLIC_WHATSAPP_NUMBER=5512978985123
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/lemslogic
NEXT_PUBLIC_GITHUB_URL=https://github.com/lemslogic
```

> Variáveis `NEXT_PUBLIC_*` são incorporadas ao JavaScript durante o build. Elas não
> devem conter segredos.

## 5. Primeiro deploy

Selecione **Save and Deploy**. Depois do build, o Cloudflare fornecerá um endereço
`*.pages.dev`. Teste nele todas as páginas antes de conectar o domínio.

## 6. Domínio

Depois do teste, adicionar:

```text
lemslogic.com.br
www.lemslogic.com.br
```

A configuração do DNS será feita em uma etapa separada, seguindo os valores que o
próprio Cloudflare exibir para a zona do domínio.
