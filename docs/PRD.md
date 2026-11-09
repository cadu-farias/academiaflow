# AcademiaFlow — PRD (Documento de Requisitos do Produto)

**Sistema de Organização de Atividades e Lembretes Acadêmicos**
Disciplina: Programação Orientada a Objetos · Linguagem: TypeScript · Prof. Iallen Gábio

---

## 1. Visão do Produto

O AcademiaFlow é uma aplicação de produtividade para estudantes de ADS que organizam seu semestre letivo em **Workspaces por Disciplina**. Cada disciplina é um espaço de trabalho isolado onde o aluno registra, acompanha e prioriza:

- **Atividades práticas** (passadas pelo professor ou de autoestudo)
- **Trabalhos em grupo** (com divisão de etapas entre colegas)
- **Lembretes acadêmicos** (avisos de provas, materiais, recados)

O produto **não** armazena boletins nem calcula notas: o foco é o gerenciamento de demandas da rotina de estudos.

## 2. Personas

| Persona | Descrição |
|---|---|
| Estudante ADS | Cursa ~6 disciplinas por semestre; precisa acompanhar prazos de múltiplas fontes (Classroom, WhatsApp, professores) |
| Estudante organizado / monitor | Usa autoestudo com metas próprias e quer métricas de progresso |

## 3. Escopo

### 3.1 Nesta fase (Domínio — camada de POO)

- Modelagem completa das classes do domínio em TypeScript (tipagem estrita, **sem `any`**)
- Herança + polimorfismo via hierarquia `ItemAcademico`
- Coleções protegidas (encapsulamento) e agregação via `Workspace`
- Consultas: filtros, ordenações, busca textual, dashboard
- Dados iniciais realistas para demonstração
- Validação do comportamento via driver de execução no console (`npm start`)

### 3.2 Fora do escopo desta fase (Camada de Visão)

- Interface web (HTML/CSS/JS de renderização), LocalStorage e modais
- Serão implementados **posteriormente, com apoio de ferramentas de IA**, consumindo a API do domínio (permitido e incentivado pelo professor — seções 6.1 e 6.2 do enunciado)

## 4. Requisitos Funcionais

### Workspaces (RF-01 … RF-03)

- **RF-01 — CRUD de Workspace:** criar, buscar, remover e listar workspaces com `codigo`, `nome`, `professor`, `salaOuLink?`, `horario?`.
- **RF-02 — Gerenciar itens do workspace:** adicionar, buscar, remover e listar itens (coleção protegida; acesso somente por métodos).
- **RF-03 — Consultas por disciplina:** itens pendentes, concluídos e em atraso; total de atividades e taxa percentual de conclusão.

### Hierarquia de itens (RF-04 … RF-08)

- **RF-04 — Cadastrar `AtividadePratica`:** título, descrição, `dataLimite`, `origem` (`PROFESSOR` | `AUTOESTUDO`), `checklist` opcional, `linkEntrega` opcional.
- **RF-05 — Concluir atividade:** `marcarComoConcluida()` registra `dataConclusao`; calcular dias restantes e detectar atraso (`verificarSeAtrasada()`).
- **RF-06 — Cadastrar `TrabalhoEmGrupo`:** `colegasDeEquipe`, `papelDoAluno`, `etapas` (título/responsável/entregue); marcar etapas individuais como entregues e progresso percentual da equipe.
- **RF-07 — Cadastrar `Lembrete`:** `dataAviso?`, `fixado`, `etiqueta`; `alternarFixacao()`.
- **RF-08 — Registro unificado:** todo item herda identificador `id`, `dataCriacao` e `workspaceId` da base abstrata `ItemAcademico`; manipulação polimórfica **sem `if/switch/instanceof`** no consumo da hierarquia.

### Consultas globais (RF-09 … RF-12)

- **RF-09 — Filtros:** apenas atividades pendentes; apenas concluídas; apenas lembretes fixados.
- **RF-10 — Ordenações:** por prazo mais próximo; por data de cadastro; por origem (professor vs. autoestudo).
- **RF-11 — Busca textual:** por palavras-chave em título e descrição.
- **RF-12 — Dashboard do estudante:** próximos prazos (7 dias, todos os workspaces), atividades em atraso (alerta), mural de lembretes fixados, contadores (concluídas na semana/mês, pendentes por disciplina).

### Persistência (RF-13)

- **RF-13 — dados-iniciais.json:** cenário com ≥ 4 disciplinas ADS, 3–4 itens cada (misturando os 3 tipos) e situações diversas: pendentes nos próximos dias, concluídas e **pelo menos 1 em atraso**.

## 5. Regras de Negócio

- **RN-01:** `codigo` e `nome` do workspace são obrigatórios (não vazios, não só espaços).
- **RN-02:** título e descrição de itens são validados na base (não vazios/só espaços).
- **RN-03:** `AtividadePratica.nova` inicia `concluida = false`; ao concluir, `dataConclusao = agora`.
- **RN-04:** atividade está em **atraso** se `concluida === false` e `dataLimite < agora`.
- **RN-05:** `TrabalhoEmGrupo` está pendente enquanto nenhuma etapa estiver 100% entregue.
- **RN-06:** `Lembrete.estaPendente()` retorna `false` por padrão (não é entrega), salvo `dataAviso` futura **e** não arquivado.
- **RN-07:** itens fixados aparecem sempre no topo do workspace.
- **RN-08:** coleções de itens são privadas; qualquer listagem devolve cópia (`readonly`) preservando a integridade do agregado.
- **RN-09:** o domínio é 100% isolado: nada de `document`, `window`, `localStorage`, `alert` dentro de `src/dominio/`.
- **RN-10:** a visão delega as decisões ao domínio (ex.: atraso, ordenação) e apenas exibe o resultado.

## 6. Arquitetura

```
src/dominio/            ← camada pura (entidades, regras, coleções)
src/visao/              ← futuro frontend com IA (fora do escopo atual)
```

Pilares aplicados: Encapsulamento + invariantes (RN-01/02/08), Herança + Polimorfismo (hierarquia `ItemAcademico`), Composição/Agregação (`Workspace` gerencia o ciclo de vida dos itens; `Estudante` agrega workspaces).

## 7. Entregáveis

1. Repositório Git público com histórico de commits e `README.md` (`npm install` + `npm start`)
2. Diagrama UML em PlantUML (`docs/uml/classes.puml` + imagem exportada)
3. `dados-iniciais.json`
4. Driver de demonstração via console (`src/dominio/demo.ts`, `npm start`)

## 8. Critérios de Aceite

- [x] `tsc` compila com `strict: true` sem `any`
- [x] Nenhuma referência a DOM/localStorage no domínio
- [x] Hierarquia consumida polimorficamente (sem `instanceof` no código de consumo)
- [x] Todos os RFs demonstráveis via chamadas do domínio/console
- [x] UML fiel ao código (atributos, visibilidade, métodos, relacionamentos)
- [x] Cada integrante explica integralmente a própria classe (arguição individual)

## 9. Métricas de Sucesso

- Dashboard reflete < 100% dos prazos corretamente = bug crítico (0 tolerância; validar com testes)
- demonstração 100% executável a partir de `dados-iniciais.json`
- Zero duplicação de lógica de decisão de status entre subclasses
