describe('RT3 - Fluxo de Exclusão de Produto', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Deve excluir um produto existente', () => {
    cy.get('[data-testid="criar-produto-button"]').click();
    cy.get('[data-testid="produto-nome-input"]').type('Monitor LED 24');
    cy.get('[data-testid="produto-preco-input"]').type('800.00');
    cy.get('[data-testid="produto-categoria-input"]').type('Telas');
    cy.get('[data-testid="salvar-produto-button"]').click();

    cy.get('[data-testid="produto-row"]').should('have.length', 1);

    cy.get('[data-testid="excluir-produto-button"]').last().click();

    cy.get('[data-testid="produto-row"]').should('not.exist');
    cy.contains('Nenhum produto cadastrado.').should('be.visible');
  });
});