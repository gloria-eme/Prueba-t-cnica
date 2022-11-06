import React from 'react';

import PosterStyle from '../../ui/PosterStyle';
import Card from './Card';

const Poster = ({ item }) => {
  return (
    <>
      <PosterStyle key={item.title}>
        <img className="imgPoster" src={item.images['Poster Art'].url} alt={item.name} />
        <Card item={item} />
      </PosterStyle>
    </>
  );
};

export default Poster;
