describe('Movie List Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Searches for movies', () => {
    cy.get('.search input').type('Matrix').should('have.value', 'Matrix');

    cy.get('.search button').click();

    cy.get('.movie-list .movie-tile').should('have.length.greaterThan', 0);
  });

  it('Sorts movies by release date and title', () => {
    cy.get('.sort-control__select')
      .select('release_date')
      .should('have.value', 'release_date');

    cy.get('.sort-control__select')
      .select('title')
      .should('have.value', 'title');
  });

  it('Switches between genres', () => {
    cy.get('.genre-select').select('Action').should('have.value', 'Action');

    cy.get('.genre-select').select('Comedy').should('have.value', 'Comedy');
  });

  it('Selects a movie and returns back to search', () => {
    cy.get('.movie-list .movie-tile').first().click();

    cy.get('.movie-details').should('be.visible');

    cy.get('.movie-details__back-button').click();

    cy.get('.movie-details').should('not.be.visible');
  });
});
