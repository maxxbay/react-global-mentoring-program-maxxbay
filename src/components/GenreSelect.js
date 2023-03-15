import React, { Component } from 'react';

class GenreSelect extends Component {
  handleSelect = genre => {
    this.props.onSelect(genre);
  };

  render() {
    const genres = this.props.genres.map(genre => {
      const className = genre === this.props.selected ? 'selected' : '';
      return React.createElement(
        'button',
        {
          key: genre,
          className: className,
          onClick: () => this.handleSelect(genre),
        },
        genre
      );
    });
    return React.createElement('div', { className: 'genre-select' }, ...genres);
  }
}

export default GenreSelect;
