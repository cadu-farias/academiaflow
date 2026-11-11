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
    private linkEntrega?: string | undefined,
    private dataConclusao?: Date | undefined,
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
  getDataConclusao(): Date | undefined {
    return this.dataConclusao;
  }
  getOrigem(): string {
    return this.origem;
  }
  getLinkEntrega(): string | undefined {
    return this.linkEntrega;
  }
  obterCategoria(): string {
    return "Atividade Prática";
  }
  estaPendente(): boolean {
    return !this.concluida;
  }
  obterExibicaoFormatada(): string {
    const dataConclusao =
      this.getDataConclusao()?.toLocaleDateString("pt-BR") ??
      "Ainda não concluída";

    const linkEntrega = this.getLinkEntrega() || "Sem link de entrega";

    return `Título: ${this.getTitulo()} \nDescrição: ${this.getDescricao()}\nData de criação: ${this.getDataCriacao().getDate()}/${this.getDataCriacao().getMonth() + 1}/${this.getDataCriacao().getFullYear()}\nWorkspace Id:${this.getWorkspaceId()}\nData limite:${this.getDataLimite()}\nData de conclusão:${dataConclusao}\nOrigem:${this.getOrigem()}\nLink de entrega:${linkEntrega}\nCategoria:${this.obterCategoria()}\nPendente:${this.estaPendente() ? "SIM" : "NÃO"}`;
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
