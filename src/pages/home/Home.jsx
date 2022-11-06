import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Tus series y pelis favoritas</h1>
      <div>
        <Link to={`/series`}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6209/6209965.png"
            alt="series"
          />
        </Link>
        <Link to={`/movies`}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6209/6209965.png"
            alt="series"
          />
        </Link>
      </div>
    </>
  );
};

export default Home;
