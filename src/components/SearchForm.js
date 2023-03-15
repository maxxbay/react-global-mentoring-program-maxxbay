import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { query: props.initialValue };
  }

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.query);
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('input', {
        type: 'text',
        value: this.state.query,
        onChange: this.handleInputChange,
        onKeyPress: this.handleKeyPress,
      }),
      React.createElement('button', { onClick: this.handleSearch }, 'Search')
    );
  }
}

export default SearchForm;
