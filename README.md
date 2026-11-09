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

## Pré-requisitos

- Node.js LTS (node + npm)
- Git

## Execução

```bash
npm install          # baixa parcel e typescript
npm start            # Parcel: servidor em http://localhost:1234 (saída no console do navegador, F12)
npm run build        # build de produção em dist
npm run typecheck    # valida tipagem estrita, zero any
```

## Estrutura de arquivos (organização do repo)

```
AcademiaFlow/
│
├── index.html                     ← runner do domínio (npm start); o frontend completo vem depois
│
├── src/
│   ├── dominio/                   ← ⚠️ CAMADA PURA — nada de DOM/localStorage/alert aqui
│   │   ├── domain.model.ts        ← tipos/contratos compartilhados (não editar sem issue)
│   │   ├── ItemAcademico.ts       ← classe base abstrata        (CADU)
│   │   ├── AtividadePratica.ts    ← subclasse                    (Luan)
│   │   ├── TrabalhoEmGrupo.ts     ← subclasse                    (Igor)
│   │   ├── Lembrete.ts            ← subclasse                    (Felipe)
│   │   ├── Workspace.ts           ← agregado/disciplina          (Elryan)
│   │   ├── Estudante.ts           ← dashboard global             (CADU)
│   │   ├── consultas.ts           ← filtros + ordenação + busca  (Luan)
│   │   └── demo.ts                ← driver de demonstração (npm start) — todos atualizam
│   └── visao/                     ← FUTURO frontend com IA (não criar arquivos agora)
│
├── dados-iniciais.json            ← cenário de demonstração (Igor)
│
├── docs/
│   ├── PRD.md                     ← requisitos (RF/RN) e critérios de aceite
│   ├── PLANO.md                   ← etapas, tarefas por membro e matriz de revisão
│   └── uml/
│       ├── classes.puml           ← diagrama de classes (Felipe mantém)
│       └── classes.png            ← imagem exportada (entregável do professor)
│
├── .github/                       ← templates de issue/PR + CI (não mexer sem issue)
└── package.json / tsconfig.json   ← toolchain (não mexer sem issue)
```

### Convenções combinadas

1. **Um arquivo por classe**, com o nome da classe em PascalCase (`ItemAcademico.ts`). Exceções: `domain.model.ts` (só tipos) e `consultas.ts` (serviço de consultas).
2. **Não crie pastas/arquivos novos** fora dessa árvore sem abrir issue antes — a organização do repo conta pontos na valiação de produto.
3. **Todo arquivo de domínio começa com comentário** de 2–3 linhas explicando o papel da classe (facilita sua arguição e a revisão do colega).
4. **Revisão altera código do outro só via comentário no PR** — quem implementa corrige (evita conflito de entendimento).
5. **`dados-iniciais.json` é a fonte da demonstração**: se sua classe mudar de formato, atualize o JSON no mesmo PR.
6. `src/visao/` fica bloqueado até o domínio fechar; IA entra lá na fase 2.

## Fluxo de contribuição

1. Publicar em uma issue (`RD-XX`) e mover para `In Progress` no Kanban
2. Branch `feat/RD-XX-descricao`; commits `RD-XX: descrição`
3. PR para `main`; revisor designado aprova; merge resolve a issue
