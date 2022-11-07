import * as React from 'react';
import { useEffect, useState } from 'react';
import getData from '../api/getData';
import Filters from '../components/Filters';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getData('series').then((res) => setSeries(res));
  }, []);

  return (
    <>
      <div className="titleBar">
        <h1>Popular series</h1>
        {/* <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} /> */}
      </div>
      {/* {series.forEach((item) => {
        if (item.releaseYear == filter) { */}
          <Filters param={series} />;
        {/* }
      })} */}
    </>
  );
};

export default Series;
