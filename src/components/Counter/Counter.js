import React from 'react';
import './Counter.scss';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue || 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return React.createElement(
      'div',
      { className: 'counter' },
      React.createElement('button', { onClick: this.decrement }, '-'),
      React.createElement(
        'span',
        { className: 'counter-value' },
        this.state.count
      ),
      React.createElement('button', { onClick: this.increment }, '+')
    );
  }
}

Counter.propTypes = {
  initialValue: PropTypes.number,
};

export default Counter;
