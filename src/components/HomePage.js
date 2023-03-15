import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>React global mentoring program - Task 1</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/search-form">Search Form</Link>
        </li>
        <li>
          <Link to="/genre-search">Search Film Genre</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
