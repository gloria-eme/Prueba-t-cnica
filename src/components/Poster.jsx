import React from 'react';
import PosterStyle from '../../ui/PosterStyle';
import Card from './Card';
import Image from './Image';

const Poster = ({ item }) => {
  return (
    <>
      <PosterStyle key={item.title}>
        <Image item={ item }/>
        <Card item={item} />
      </PosterStyle>
    </>
  );
};

export default Poster;

          