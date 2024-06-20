import React from 'react';
import './CardComponent.css';
import img1 from '../../images/Group 97.svg';
import img2 from '../../images/Group 96.svg';
import img3 from '../../images/Group 98.svg';


const CardComponent = () => {
    return (
      <div className="card-container">
        <div className="card card1">
          <img src={img1} alt="Card 1" />
        </div>
        <div className="card card2">
          <img src={img2} alt="Card 2" />
        </div>
        <div className="card card3">
          <img src={img3} alt="Card 3" />
        </div>
      </div>
    );
  }
  
  export default CardComponent;
  
