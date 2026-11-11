export abstract class ItemAcademico {
  private id: string;
  private dataCriacao: Date

  constructor(
    private titulo: string,
    private descricao: string,
    private workspaceId: string,
  ) {
    if (!this.validarTitulo(titulo)) {
      throw new Error("Titulo inválido");
    }
    if (!this.validarDescricao(descricao)) {
      throw new Error("Descrição inválida");
    }

    this.id = `i-${Date.now()}`;
    this.titulo = titulo;
    this.descricao = descricao;
    this.workspaceId = workspaceId;
    this.dataCriacao = new Date();
  }

  validarTitulo(titulo: string): boolean {
    return titulo.trim().length > 3 ? true : false;
  }

  validarDescricao(descricao: string): boolean {
    return descricao.trim().length > 3 ? true : false;
  }

  getId(): string {
    return this.id;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getDescricao(): string {
    return this.descricao;
  }
  getDataCriacao(): Date {
    return this.dataCriacao;
  }

  getWorkspaceId(): string {
    return this.workspaceId;
  }

  abstract obterCategoria(): string;
  abstract estaPendente(): boolean;
  abstract obterExibicaoFormatada(): string;
}
