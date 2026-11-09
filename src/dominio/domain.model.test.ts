import { describe, expect, it } from "vitest";

/**
 * Teste de compilabilidade: garante que os contratos do domínio
 * estão em pé enquanto as tarefas são implementadas em paralelo.
 * Cada classe implementada terá seu próprio arquivo de testes (RD-XX).
 */
describe("domínio — fundações", () => {
  it("contratos definidos", async () => {
    const model = await import("./domain.model.js");
    expect(model).toBeDefined();
  });
});
