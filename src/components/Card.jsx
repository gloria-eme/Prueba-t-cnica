import React from 'react';
import Popup from 'reactjs-popup';

import HdosStyle from '../../ui/HdosStyle';

const Card = ({ item }) => (
  <Popup trigger={<HdosStyle>{item.title}</HdosStyle>} modal nested>
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          X
        </button>
        <div className="title"> {item.title} </div>
        <img className="imgPoster" src={item.images['Poster Art'].url} alt={item.name} />
        <div className="content">{item.description}</div>
        <div className="year">Year: {item.releaseYear}</div>
      </div>
    )}
  </Popup>
);

export default Card;
