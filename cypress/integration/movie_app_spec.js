describe('Movie App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Opens Add Movie dialog with empty form', () => {
    cy.get('[data-testid="add-movie-link"]').click();
    cy.get('.dialog').should('be.visible');
    cy.get('.dialog #title').should('have.value', '');
    cy.get('.dialog #poster_path').should('have.value', '');
  });

  it('Opens Edit Movie dialog with pre-populated details', () => {
    cy.get('[data-testid="movie-tile"]').first().rightclick();
    cy.get('[data-testid="edit-movie"]').click();
    cy.get('.dialog').should('be.visible');
    cy.get('.dialog #title').should('not.have.value', '');
    cy.get('.dialog #poster_path').should('not.have.value', '');
  });

  it('Adds a new movie and verifies it appears in the list after', () => {
    const movieTitle = 'Test Movie';
    const movieUrl = 'https://testmovieurl.com';

    cy.get('[data-testid="add-movie-link"]').click();
    cy.get('.dialog #title').type(movieTitle);
    cy.get('.dialog #poster_path').type(movieUrl);
    cy.get('.dialog button[type="submit"]').click();
    cy.wait(2000);
    cy.get('[data-testid="movie-tile"]')
      .contains(movieTitle)
      .should('be.visible');
  });
});
