describe('Movie Search Application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the homepage', () => {
    cy.get('.container').should('be.visible');
  });

  it('performs a movie search', () => {
    cy.get('input[type="search"]').type('Matrix{enter}');
    cy.url().should('include', 'query=Matrix');
  });

  it('filters movies by genre', () => {
    cy.get('.genre-select').select('Action');
    cy.url().should('include', 'genre=Action');
  });

  it('sorts movies by title or release date', () => {
    cy.get('.sort-control').select('Title');
    cy.url().should('include', 'sortBy=title');

    cy.get('.sort-control').select('Release Date');
    cy.url().should('include', 'sortBy=release_date');
  });

  it('navigates to movie details page and back', () => {
    cy.get('.movie-tile').first().click();
    cy.url().should('include', '/movies/');
    cy.get('.movie-details-wrapper').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
