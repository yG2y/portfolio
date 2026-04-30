# Arquitetura do Portfolio

## Visão geral

- `apps/web`: frontend em Next.js com UI terminal e páginas fallback.
- `apps/api`: backend placeholder para futura extração de serviços.
- `infra/docker`: Dockerfiles e compose para execução local integrada.

## Estratégia de evolução para microsserviços

1. Começar com backend único (modular monolith).
2. Extrair serviços por domínio:
   - `contact-service` (Node),
   - `analytics-service` (Go),
   - `integration-service` (Kotlin).
3. Introduzir um BFF/Gateway para manter contrato estável com o frontend.

## Banco de dados e integração

- Banco principal: Supabase (Postgres gerenciado).
- Fase inicial: frontend pode ler dados locais e, se disponível, usar Supabase via REST.
- Fase evolutiva: serviços acessam Supabase com roles específicas por domínio.

## Contratos sugeridos do Supabase (V1)

### Tabela `profile`

- `id` uuid pk
- `name` text
- `role` text
- `location` text
- `short_bio` text
- `github_url` text
- `linkedin_url` text
- `email_url` text
- `resume_url` text
- `skills` text[]

### Tabela `projects`

- `id` uuid pk
- `name` text
- `description` text
- `url` text
- `stack` text[]
- `featured` boolean
- `order_index` int
