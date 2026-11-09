/**
 * domain.model.ts — Contratos e tipos compartilhados do Domínio.
 *
 * Arquivo de referência para TODAS as classes implementadas do projeto
 * ( fonte: docs/PRD.md + docs/PLANO.md ). Nenhum comportamento aqui:
 * só tipos, para que cada integrante implemente a própria classe.
 *
 * REGRA DE OURO (RN-09): este pacote NÃO pode importar/bombar DOM,
 * window, document, localStorage ou alert.
 */

/** Origem da atividade: pedida pelo professor ou meta do próprio aluno. */
export type Origem = "PROFESSOR" | "AUTOESTUDO";

/** Item opcional de checklist de uma AtividadePratica. */
export interface ItemChecklist {
  readonly descricao: string;
  feita: boolean;
}

/** Etapa de um TrabalhoEmGrupo. */
export interface EtapaTrabalho {
  readonly titulo: string;
  readonly responsavel: string;
  entregue: boolean;
}

/** Dados obrigatórios para instanciar a base ItemAcademico. */
export interface DadosItemAcademico {
  id: string;
  titulo: string;
  descricao: string;
  dataCriacao: Date;
  workspaceId: string;
}

/**
 * Contrato da classe Base — CadU (Etapa 1).
 * Métodos abstratos obrigatórios das subclasses:
 *   obterCategoria(): string
 *   estaPendente(): boolean
 *   obterExibicaoFormatada(): string
 * Métodos concretos disponíveis na base:
 *   validarTitulo(titulo: string): void   → RN-02
 *   validarDescricao(descricao: string): void → RN-02
 *   getId(): string | getTitulo(): string | getWorkspaceId(): string (ver contrato da task RD-04)
 *   resumo(): string
 */
export interface IItemAcademico {
  obterCategoria(): string;
  estaPendente(): boolean;
  obterExibicaoFormatada(): string;
}

/**
 * Contrato — AtividadePratica — Luan (Etapa 2, RD-05).
 * Atributos: dataLimite, concluida, dataConclusao?, origem, checklist?, linkEntrega?
 * Métodos: marcarComoConcluida(), verificarSeAtrasada(), calcularDiasRestantes()
 */
export interface IAtividadePratica extends IItemAcademico {
  marcarComoConcluida(): void;
  verificarSeAtrasada(): boolean;
  calcularDiasRestantes(): number;
}

/**
 * Contrato — TrabalhoEmGrupo — Igor (Etapa 2, RD-06).
 * Atributos: dataLimite, concluida, dataConclusao?, colegasDeEquipe, papelDoAluno, etapas
 * Métodos: marcarEtapaComoEntregue(titulo: string), progressoPercentual(): number
 * RN-05: pendente até 100% das etapas entregue.
 */
export interface ITrabalhoEmGrupo extends IItemAcademico {
  marcarEtapaComoEntregue(tituloEtapa: string): void;
  progressoPercentual(): number;
}

/**
 * Contrato — Lembrete — Felipe (Etapa 2, RD-07).
 * Atributos: dataAviso?, fixado, etiqueta
 * Métodos: alternarFixacao()
 * RN-06: estaPendente() → false por padrão; true se dataAviso futura E não arquivado.
 */
export interface ILembrete extends IItemAcademico {
  alternarFixacao(): void;
}
