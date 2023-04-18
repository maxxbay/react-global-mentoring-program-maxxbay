describe('Movie Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('submits a new movie', () => {
    cy.get('.add').click();
    cy.get('#title').type('Test Movie');
    cy.get('#movieUrl').type('https://example.com/test-movie');
    cy.get('#releaseDate').type('2023-01-01');
    cy.get('#rating').type('8');
    cy.get('.genre-select select').select('Action');
    cy.get('#runtime').type('120');
    cy.get('#overview').type('A test movie for end-to-end testing.');

    cy.get('.movie-form__actions .button[type="submit"]').click();

    cy.contains('Test Movie').should('exist');
  });

  it('resets the form when the "Reset" button is clicked', () => {
    cy.get('.add').click();
    cy.get('#title').type('Test Movie');
    cy.get('.movie-form__actions .button[type="button"]').click();

    cy.get('#title').should('have.value', '');
  });
});
