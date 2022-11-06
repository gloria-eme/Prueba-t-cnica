import './series.css';

import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import * as React from 'react';

import getData from '../../api/getData';
import Filters from '../../components/Filters';

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getData('series').then((res) => setSeries(res));
  }, []);

  return (
    <>
      {/* <input className="filter" type="select" value={filter}
          onChange={(e) => setFilter(e.target.value)}/> */}
      <Filters param={series} />
    </>
  );
};

export default Series;
