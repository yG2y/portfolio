# Worklog e Próximas Etapas

Documento vivo para registrar progresso e organizar entregas incrementais.

## Entregas já concluídas

## 2026-04-28

- Criação da base frontend em `Next.js` (`apps/web`) com TypeScript e Tailwind.
- Implementação de terminal interativo com comandos:
  - `help`, `about`, `projects`, `skills`, `contact`, `resume`, `clear`.
- Histórico de comandos por teclado e autocomplete com `Tab`.
- Seções de fallback e páginas dedicadas:
  - `/sobre`, `/projetos`, `/contato`, `/curriculo`.
- Integração com Supabase via camada de serviço com fallback local.
- Normalização de dados de contato (URLs e e-mail).
- Botão de cópia de e-mail em múltiplos pontos da interface.
- Currículos PT/EN como links online (GitHub Pages), sem arquivo físico versionado.
- Scaffold Docker para `web + api + postgres` em ambiente local.
- Workflow de qualidade (`lint`, `typecheck`, `test`, `build`) no GitHub Actions.

## Próximas etapas sugeridas (ordem recomendada)

1. **Consolidar dados no Supabase**
   - alinhar `profile` e `projects` com dados reais do currículo.
   - validar RLS e políticas de leitura.

2. **Evoluir UX do terminal**
   - adicionar comandos por idioma (`resume-pt`, `resume-en`).
   - suportar aliases (`cv`, `linkedin`, `github`).

3. **Melhorar observabilidade**
   - adicionar tracking básico de erro no frontend.
   - registrar métricas simples de uso de comandos.

4. **Preparar trilha de API**
   - definir contrato inicial do backend em `apps/api`.
   - planejar extração incremental para Node/Go/Kotlin.

5. **Pipeline e release**
   - definir checklist de release.
   - configurar deploy automático de preview por PR.

## Estratégia de commits (sugestão)

Separar em commits menores por tema:

1. `docs(project): adicionar guia de práticas de desenvolvimento`
2. `docs(project): registrar worklog e próximas etapas`
3. `feat(web): aprimorar integração e UX de currículos online`
4. `fix(web): normalizar dados de contato e cópia de email`

Se preferir menos granularidade, usar 2 commits:

1. `feat(web): atualizar curriculos online e fluxo de contato`
2. `docs(project): adicionar guias de desenvolvimento e roadmap`
