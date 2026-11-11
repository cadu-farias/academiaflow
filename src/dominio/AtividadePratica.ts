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
  getDataLimite(): Date {
    return this.dataLimite;
  }
  getDataConclusao(): Date {
    return this.dataConclusao!;
  }
  getOrigem(): string {
    return this.origem;
  }
  getLinkEntrega(): string {
    return this.linkEntrega!;
  }
  obterCategoria(): string {
    return "Atividade Prática";
  }
  estaPendente(): boolean {
    return !this.concluida;
  }
  obterExibicaoFormatada(): string {
    return `Título: ${this.getTitulo()} \nDescrição: ${this.getDescricao()}\nData de criação: ${this.getDataCriacao().getDate()}/${this.getDataCriacao().getMonth() + 1}/${this.getDataCriacao().getFullYear()}\nWorkspace Id:${this.getWorkspaceId()}\nData limite:${this.getDataLimite()}\nData de conclusão:${this.getDataConclusao()}\nOrigem:${this.getOrigem()}\nLink de entrega:${this.getLinkEntrega()}\nCategoria:${this.obterCategoria()}\nPendente:${this.estaPendente() ? "SIM" : "NÃO"}`;
  }
  marcarComoConcluida() {
    this.dataConclusao = new Date();
    this.concluida = true;
  }
  verificarSeAtrasada(): boolean {
    console.log(this.dataLimite.getTime());
    return this.estaPendente() && this.dataLimite.getTime() < Date.now();
  }
}
