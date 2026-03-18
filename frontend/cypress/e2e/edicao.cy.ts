describe('RT2 - Fluxo de Edição de Produto', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Deve editar um produto existente', () => {
    cy.get('[data-testid="criar-produto-button"]').click();
    cy.get('[data-testid="produto-nome-input"]').type('Mouse Antigo');
    cy.get('[data-testid="produto-preco-input"]').type('50.00');
    cy.get('[data-testid="produto-categoria-input"]').type('Acessórios');
    cy.get('[data-testid="salvar-produto-button"]').click();

    cy.get('[data-testid="editar-produto-button"]').last().click();

    cy.get('[data-testid="produto-nome-input"]').clear().type('Mouse Óptico Sem Fio');
    cy.get('[data-testid="produto-preco-input"]').clear().type('120.00');
    
    cy.get('[data-testid="salvar-produto-button"]').click();

    cy.get('[data-testid="produto-row"]').should('have.length', 1);
    cy.get('[data-testid="produto-row"]').first().should('contain', 'Mouse Óptico Sem Fio');
    cy.get('[data-testid="produto-row"]').first().should('contain', 'R$ 120.00');
    cy.get('[data-testid="produto-row"]').first().should('not.contain', 'Mouse Antigo');
  });
});