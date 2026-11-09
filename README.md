# AcademiaFlow

**Sistema de Organização de Atividades e Lembretes Acadêmicos** — Trabalho Final de Programação Orientada a Objetos (TypeScript).

Estudante organiza o semestre letivo em **Workspaces de Disciplina**, cada um com atividades práticas, trabalhos em grupo e lembretes — com dashboard global de prazos, atrasos e produtividade.

## Equipe

| Membro | Papel / Classes | Revisor |
|---|---|---|
| CADU | `ItemAcademico` (base), `Estudante` + Dashboard | Elryan / Igor |
| Luan | `AtividadePratica` + Filtros/Ordenação/Busca | CADU / Felipe |
| Igor | `TrabalhoEmGrupo` + `dados-iniciais.json` + CI | Luan / CADU |
| Felipe | `Lembrete` + UML + README | Igor / Elryan |
| Elryan | `Workspace` | Felipe / CADU |

## Execução

```bash
npm install
npm start      # demo/driver do domínio
npm run test   # testes unitários
npm run typecheck
```

## Estrutura

```
src/dominio/   ← camada pura: entidades e regras de negócio (zero DOM/localStorage)
src/visao/     ← futuro frontend (fora do escopo desta fase)
dados-iniciais.json
docs/PRD.md    ← requisitos e regras de negócio
docs/PLANO.md  ← plano por etapas + matriz de revisão
docs/uml/      ← diagrama de classes (PlantUML)
```

## Fluxo de contribuição

1. Publicar em uma issue (`RD-XX`) e mover para `In Progress` no Kanban
2. Branch `feat/RD-XX-descricao`; commits `RD-XX: descrição`
3. PR para `main`; revisor designado aprova; merge resolve a issue
