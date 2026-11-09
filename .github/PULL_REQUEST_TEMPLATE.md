## Checklist do PR

- [ ] `npm run typecheck` passa (tipagem estrita, zero `any`)
- [ ] Nenhuma referência a `document` / `window` / `localStorage` / `alert` em `src/dominio/` (RN-09)
- [ ] A lógica de decisão de status mora no domínio, não é duplicada na tela (RN-10)
- [ ] UML (docs/uml/classes.puml) atualizado, se assinaturas mudaram
- [ ] Revisor designado da matriz (docs/PLANO.md) foi marcado para review

Closes #
