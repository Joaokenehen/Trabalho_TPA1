describe('RT1 - Fluxo de Criação de Produto', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Deve criar um novo produto com sucesso', () => {
    cy.get('[data-testid="criar-produto-button"]').click();
    
    cy.get('[data-testid="produto-nome-input"]').type('Teclado Mecânico Gamer');
    cy.get('[data-testid="produto-preco-input"]').type('350.50');
    cy.get('[data-testid="produto-categoria-input"]').type('Periféricos');
    cy.get('[data-testid="salvar-produto-button"]').click();

    // Valida que a tabela tem pelo menos 1 item
    cy.get('[data-testid="produto-row"]').should('have.length.at.least', 1);

    // Usa o .last() porque o item recém-criado vai para o final da lista!
    cy.get('[data-testid="produto-row"]').last().should('contain', 'Teclado Mecânico Gamer');
    cy.get('[data-testid="produto-row"]').last().should('contain', 'R$ 350.50');
    cy.get('[data-testid="produto-row"]').last().should('contain', 'Periféricos');
  });
});