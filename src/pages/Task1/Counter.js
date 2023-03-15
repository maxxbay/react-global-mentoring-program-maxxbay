import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter Page</h1>
      <h2>Counter: {count}</h2>
      <div className="counter">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
        <br />
        <Button onClick={() => navigate('/')}>Go Back</Button>
      </div>
    </div>
  );
};

export default Counter;
