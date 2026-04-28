# Regras e Práticas de Desenvolvimento

Este documento define padrões para manter consistência técnica, segurança e boa velocidade de entrega no projeto.

## 1) Princípios gerais

- Priorizar código legível, simples e evolutivo.
- Evitar complexidade antecipada (ex.: microsserviços sem necessidade real).
- Toda mudança deve manter a aplicação funcional com fallback local.
- Decisões técnicas relevantes devem ser documentadas em `docs/`.

## 2) Estrutura e organização

- Frontend principal em `apps/web`.
- Backend placeholder/evolução em `apps/api`.
- Infra local em `infra/docker`.
- Documentação técnica e de processo em `docs/`.
- Evitar lógica de domínio acoplada diretamente em componentes visuais.

## 3) Convenções de frontend (Next.js + TypeScript)

- Usar TypeScript estrito e tipagem explícita para contratos de dados.
- Separar responsabilidades:
  - `content/`: fallback local e conteúdo estático.
  - `lib/services/`: acesso e transformação de dados externos.
  - `lib/terminal/`: engine e parser de comandos.
  - `components/`: renderização e interação de UI.
- Manter acessibilidade mínima:
  - foco visível,
  - navegação por teclado,
  - textos claros para ações de contato.

## 4) Dados e integração (Supabase)

- Nunca expor `secret key` no frontend.
- Usar somente chave publicável no `apps/web/.env.local`.
- Normalizar entradas vindas da base (URL com `https://`, e-mail com `mailto:`).
- Aplicar RLS em todas as tabelas e políticas explícitas para leitura pública.

## 5) Qualidade e validação

- Antes de commit em `apps/web`, executar:
  - `npm run lint`
  - `npm run test`
  - `npm run build`
- Corrigir avisos/erros introduzidos pela mudança antes de abrir PR.
- Incluir teste unitário sempre que alterar comportamento do engine de comandos.

## 6) Git e versionamento

- Trabalhar sempre em branch de feature (nunca direto em `main`).
- Commits pequenos e temáticos (uma intenção por commit).
- Seguir Conventional Commits, por exemplo:
  - `feat(web): adicionar botões de currículo pt/en`
  - `fix(web): normalizar linkedin sem protocolo`
  - `docs(project): registrar próximos passos`

## 7) Segurança e segredos

- Não versionar `.env.local`.
- Se credencial for exposta, rotacionar imediatamente.
- Evitar copiar tokens/senhas em issues, commits e chats.

## 8) Docker e ambientes

- Desenvolvimento local pode usar `docker compose` com Postgres local.
- Produção pode continuar com Supabase gerenciado para reduzir operação.
- Evitar divergência de schema:
  - manter scripts SQL versionados em documentação e revisados.
