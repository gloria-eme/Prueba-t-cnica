import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import * as React from 'react';

import getData from '../api/getData';
import Filters from '../components/Filters';
// import Loading from '../../components/Loading';
// import TitleBar from '../../components/TitleBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData('movie').then((res) => setMovies(res));
  }, []);

  return (
    <>
      <div className="titleBar">
        <h1>Popular movies</h1>
        {/* <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} /> */}
      </div>
      {/* <Loading item={movies}/> */}
      <Filters param={movies} />
    </>
  );
};

export default Movies;
