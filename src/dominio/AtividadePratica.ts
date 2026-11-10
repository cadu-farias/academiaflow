import { Origem } from "./domain.model";
import { ItemAcademico } from "./ItemAcademico";

export class AtividadePratica extends ItemAcademico {
  private concluida: boolean;
  constructor(
    private dataLimite: Date,
    private origem: Origem,
    titulo: string,
    dataCriacao: Date,
    workspaceId: string,
    descricao: string,
    private linkEntrega?: string,
    private dataConclusao?: Date,
  ) {
    super(titulo, descricao, dataCriacao, workspaceId);
    this.dataLimite = dataLimite;
    this.concluida = false;
    this.origem = origem;
    this.linkEntrega = linkEntrega;
    this.dataConclusao = dataConclusao;
  }
  obterCategoria(): string {
    return "";
  }
  estaPendente(): boolean {
    return this.concluida === false;
  }
  obterExibicaoFormatada(): string {
    return "";
  }
  marcarComoConcluida() {
    this.dataConclusao = new Date();
    this.concluida = true;
  }
}
