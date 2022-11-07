import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Popular Titles</h1>
      <div className="divHome">
        <Link to={`/series`}>
          <div className="div2">Series</div>
        </Link>
        <Link to={`/movies`}>
          <div className="div2">Movies</div>
        </Link>
      </div>
    </>
  );
};

export default Home;
