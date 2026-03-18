describe('RT3 - Fluxo de Exclusão de Produto', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Deve excluir um produto existente', () => {

    const nomeExclusao = 'Monitor para Excluir';
    
    cy.get('[data-testid="criar-produto-button"]').click();
    cy.get('[data-testid="produto-nome-input"]').type(nomeExclusao);
    cy.get('[data-testid="produto-preco-input"]').type('800.00');
    cy.get('[data-testid="produto-categoria-input"]').type('Telas');
    cy.get('[data-testid="salvar-produto-button"]').click();

    cy.get('[data-testid="produto-row"]').last().should('contain', nomeExclusao);

    cy.get('[data-testid="produto-row"]').last().find('[data-testid="excluir-produto-button"]').click();

    cy.contains('body', nomeExclusao).should('not.exist');
  });
});