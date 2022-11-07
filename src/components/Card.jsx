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
        <img className="imgCard" src={item.images['Poster Art'].url} alt={item.name} />
        <ul className="ulCard">
          <li className="titleCard"> Título: {item.title} </li>
          <li className="contentCard"><strong>Descripción:</strong> {item.description}</li>
          <li className="yearCard"><strong>Año:</strong> {item.releaseYear}</li>
        </ul>
      </div>
    )}
  </Popup>
);

export default Card;
