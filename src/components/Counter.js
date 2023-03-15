import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialValue };
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('button', { onClick: this.decrement }, '-'),
      React.createElement('span', null, this.state.count),
      React.createElement('button', { onClick: this.increment }, '+')
    );
  }
}

export default Counter;
