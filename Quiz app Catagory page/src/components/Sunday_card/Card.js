/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./style.scss";


function Card(props) {
    return (
      <div className="card">
        
        <img src={props.img} className="card__img"/>
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <button className="card__btn">Start Exam</button>
        </div>
      </div>
    );
  }

export default Card;