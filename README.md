# Portfolio

Portfólio frontend em `Next.js` com experiência principal de terminal interativo, fallback em seções tradicionais, e base pronta para evolução com API, Supabase e Docker.

## Estrutura do projeto

- `apps/web`: frontend principal (Next.js + TypeScript + Tailwind).
- `apps/api`: backend placeholder para evolução de microsserviços.
- `infra/docker`: Dockerfiles e compose para ambiente local integrado.
- `docs/portfolio-architecture.md`: estratégia de evolução técnica.

## Frontend (apps/web)

### Funcionalidades da V1

- Terminal interativo com comandos:
  - `help`, `about`, `projects`, `skills`, `contact`, `resume`, `clear`.
- Histórico com teclado (`ArrowUp` / `ArrowDown`).
- Autocomplete básico de comandos com `Tab`.
- Seções fallback: Sobre, Links rápidos, Projetos e Contato.
- Camada de dados com fallback local + leitura opcional do Supabase.

### Executar localmente

```bash
cd apps/web
npm install
npm run dev
```

Abrir: `http://localhost:3000`

### Qualidade

```bash
cd apps/web
npm run lint
npm run typecheck
npm run test
npm run build
```

## Configuração do Supabase (o que você precisa fazer)

1. Criar projeto no Supabase.
2. Criar as tabelas `profile` e `projects` (campos sugeridos em `docs/portfolio-architecture.md`).
3. Habilitar `RLS` e criar política de leitura pública para dados de portfólio.
4. Copiar as credenciais:
   - `Project URL`
   - `anon public key`
5. Criar `apps/web/.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

Sem essas variáveis, o frontend usa conteúdo local (`src/content/profile.ts`).

## Docker (web + api + banco local)

```bash
docker compose -f infra/docker/docker-compose.yml up --build
```

Serviços:
- `web`: `http://localhost:3000`
- `api`: `http://localhost:4000/health`
- `postgres`: `localhost:5432`

## Deploy gratuito recomendado

- Frontend Next.js: Vercel.
- Banco: Supabase.
- Backend containerizado futuro: Railway / Render / Fly.io (dependendo dos limites do free tier no momento).

## Commits semânticos

Formato: `<tipo>(<escopo>): <assunto>`

Exemplos:
- `feat(web): adiciona terminal com histórico de comandos`
- `fix(api): corrige endpoint de healthcheck`
- `docs(readme): atualiza setup do Supabase`

Referência: [Conventional Commits](https://www.conventionalcommits.org/)

## Licença

Esse projeto está sob licença. Veja [LICENSE](LICENSE).
