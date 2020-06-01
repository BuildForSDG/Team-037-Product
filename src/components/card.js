import React from 'react';

import './card.css';
const Card = (props) => {
  return (
    <div className='card'>
      <div>
        <img className="imgDiv" src={props.image} />
      </div>
      <div>
        <h3>{props.header}</h3>
      </div>

      <div className='con'>
        <div className="returnDiv2">
          <h5>Return</h5>
          <h5>12%</h5>
        </div>

        <div className="durationDiv">
          <h5>Duration</h5>
          <h5>6months</h5>
        </div>

        <div className="logoDiv1">
          <h5 className="logoText1">Empower</h5>
          <h5>farmers</h5>
        </div>
      </div>
 
      <button className="buttonName2">Sponsor</button>
    </div>
  );
};

export default Card;
