# AcademiaFlow — Plano de Implementação por Etapas

**Time:** CADU · Luan · Igor · Felipe · Elryan (5 integrantes)
**Foco desta fase:** Camada de Domínio em TypeScript (a Visão/Frontend vem depois, com IA)

---

## Legenda de status

| Ícone | Significado |
|---|---|
| :heavy_minus_sign: | Backlog / To Do |
| :construction: | In Progress |
| :mag_right: | In Review |
| :white_check_mark: | Done |

## Etapa 0 — Fundações

- [x] Estrutura do projeto, `package.json`, `tsconfig`, `.gitignore`, README, CI
- [x] Contratos (`domain.model.ts`) e UML de referência
- [x] Repo GitHub + Kanban + Issues

## Etapa 1 — Classe Base (desbloqueia o time)

| # | Task | Responsável | Revisor | Status |
|---|---|---|---|---|
| 1.1 | `ItemAcademico` (classe abstrata: id, titulo, descricao, dataCriacao, workspaceId + validação + métodos abstratos `obterCategoria()`, `estaPendente()`, `obterExibicaoFormatada()`) | **CADU** | Elryan | :construction: |

> Ninguém avança para as subclasses antes desta base ser aprovada (é o contrato de herança de todos).

## Etapa 2 — Subclasses (paralela)

| # | Task | Responsável | Revisor | Status |
|---|---|---|---|---|
| 2.1 | `AtividadePratica` — dataLimite, concluida/dataConclusao, origem, checklist, linkEntrega; `marcarComoConcluida()`, `verificarSeAtrasada()`, `calcularDiasRestantes()` | **Luan** | CADU | :heavy_minus_sign: |
| 2.2 | `TrabalhoEmGrupo` — colegasDeEquipe, papelDoAluno, etapas; marcar etapas entregues + progresso %; pendente até 100% | **Igor** | Luan | :heavy_minus_sign: |
| 2.3 | `Lembrete` — dataAviso?, fixado, etiqueta; `alternarFixacao()`; regra de pendência (RN-06) | **Felipe** | Igor | :heavy_minus_sign: |

## Etapa 3 — Agregado

| # | Task | Responsável | Revisor | Status |
|---|---|---|---|---|
| 3.1 | `Workspace` — dados da disciplina, coleção protegida (RN-08), adicionar/buscar/remover/listar, pendentes/concluídos/atraso, total e taxa de conclusão, ordenações e fixados no topo | **Elryan** | Felipe | :heavy_minus_sign: |

## Etapa 4 — Integração e Entregáveis (paralela)

| # | Task | Responsável | Revisor | Status |
|---|---|---|---|---|
| 4.1 | `Estudante` + Dashboard — próximos prazos 7 dias, atrasos, mural de fixados, contadores de produtividade | **CADU** | Igor | :heavy_minus_sign: |
| 4.2 | Serviço de Filtros/Ordenação/Busca textual (RF-09/10/11) | **Luan** | Felipe | :heavy_minus_sign: |
| 4.3 | UML PlantUML final + README de execução + export da imagem | **Felipe** | Elryan | :heavy_minus_sign: |
| 4.4 | `dados-iniciais.json` (4 disciplinas, ≥3 itens cada, 1 atraso) + CI verde | **Igor** | CADU | :heavy_minus_sign: |

## Matriz de Revisão (ciclo fechado)

```
CADU    implementa → Elryan revisa
Elryan  implementa → Felipe revisa
Felipe  implementa → Igor   revisa
Igor    implementa → Luan   revisa
Luan    implementa → CADU   revisa
```

Cada PR precisa de **1 aprovação do revisor designado** antes do merge.

## Fluxo de trabalho (kanban)

1. Mover a issue para **In Progress** só quando for começar
2. Branch: `feat/RD-XX-nome-da-task`
3. Commits: `RD-XX: descrição curta`
4. Abrir PR para `main`; checklist do template; marcar review no revisor designado
5. Para 1 blocked > 1 dia: comentar na issue ou avisar o CADU no grupo

## Milestones

| Milestone | Conteúdo |
|---|---|
| `Status Report 1` | Etapa 0 + 1 completa (base abstrata funcionando) |
| `Status Report 2` | Etapa 2 completa (3 subclasses + revisões feitas) |
| `Status Report 3` | Etapa 3 (workspace consolidado) |
| `Entrega Final` | Etapa 4 + UML + dados-iniciais + apresentação |

## Definição de Pronto (DoD) por task de domínio

- [ ] `strict` sem `any`, sem erros de `tsc --noEmit`
- [ ] Comportamento demonstrável via driver/console (`npm start`)
- [ ] Zero referência a DOM/localStorage no domínio (RN-09)
- [ ] UML atualizado caso a classe/assinatura mudar
- [ ] Revisão aprovada pelo revisor designado
