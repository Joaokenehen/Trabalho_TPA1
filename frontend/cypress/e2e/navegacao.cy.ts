describe('RT4 - Fluxo de Navegação pelo Menu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Deve navegar corretamente entre as opções do menu', () => {
    cy.get('[data-testid="menu-sobre"]').click();
    cy.contains('h1', 'Sobre a Aplicação').should('be.visible');
    cy.get('[data-testid="menu-produtos"]').click();
    cy.contains('h1', 'Listagem de Produtos').should('be.visible');
  });
});