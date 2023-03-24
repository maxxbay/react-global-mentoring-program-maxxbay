describe('GenreSelect', () => {
  beforeEach(() => {
    cy.visit('/movies');
  });

  it('renders all genres passed in props', () => {
    const genres = ['Action', 'Comedy', 'Drama'];
    genres.forEach(genre => {
      cy.get('select[name="genre"]').contains(genre);
    });
  });

  it('selects the initial genre passed in props', () => {
    cy.get('select[name="genre"]').should('have.value', 'Drama');
  });

  it('updates the selected genre and calls onSelect when a new genre is selected', () => {
    cy.document().then(doc => {
      cy.wrap(doc).as('doc');
      doc.addEventListener('genreSelected', e => {
        const genre = e.detail.genre;
        cy.wrap(genre).as('selectedGenre');
      });
    });

    cy.get('select[name="genre"]').select('Comedy');
    cy.get('@selectedGenre').should('equal', 'Comedy');
  });
});
