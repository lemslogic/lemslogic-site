# Publicação inicial no GitHub

## 1. Criar o repositório

Crie um repositório vazio chamado:

```text
lemslogic-site
```

Se possível, utilize a conta ou organização oficial da LEMS Logic.

Ao criar o repositório, não adicione README, `.gitignore` ou licença pela
interface, porque estes arquivos já estão incluídos no projeto.

## 2. Inicializar o Git

Abra o terminal na pasta do projeto:

```bash
git init
git branch -M main
git add .
git commit -m "feat: initial LEMS Logic website"
```

## 3. Conectar ao GitHub

Substitua `SEU-USUARIO-OU-ORG` pelo proprietário real do repositório:

```bash
git remote add origin https://github.com/SEU-USUARIO-OU-ORG/lemslogic-site.git
git push -u origin main
```

## 4. Fluxo recomendado daqui para frente

Para pequenas alterações:

```bash
git add .
git commit -m "fix: adjust mobile navigation"
git push
```

Para funcionalidades maiores, prefira uma branch:

```bash
git switch -c feature/nome-da-feature
```

Depois:

```bash
git add .
git commit -m "feat: describe the feature"
git push -u origin feature/nome-da-feature
```

## 5. Nunca versionar

Não envie ao GitHub:

- `.env`
- `.env.local`
- `node_modules`
- `.next`
- credenciais;
- tokens de API;
- senhas;
- chaves privadas.

O `.gitignore` já está configurado para os principais casos.

## Próxima etapa

Depois do primeiro `push`, conectar o repositório à Vercel e apontar
`lemslogic.com.br` para o deploy de produção.
