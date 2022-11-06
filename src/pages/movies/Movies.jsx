import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import * as React from 'react';

import getData from '../../api/getData';
import Filters from '../../components/Filters';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData('movie').then((res) => setMovies(res));
  }, []);

  return (
    <>
      {/* <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} /> */}
      <Filters param={movies} />
    </>
  );
};

export default Movies;
