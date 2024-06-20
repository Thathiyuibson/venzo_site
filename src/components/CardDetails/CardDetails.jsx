import React, { useState } from 'react';
import './CardDetails.css';
import card1 from '../../images/card1.svg';
import card2 from '../../images/card2.svg';
import card3 from '../../images/card3.svg';

const CardDetails = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  const handleCardClick = (cardNumber) => {
    setSelectedCard(cardNumber);
  };

  return (
    <div className='CardDetails'>
      <div className='CardDetails-head'>
        <h1>Complete Range Of Tailored Software Development Services</h1>
      </div>
      <div className='card-selector'>
        <span onClick={() => handleCardClick(1)} className={selectedCard === 1 ? 'selected' : ''}>1.  Solution Engineering</span>
        <div className='horizontal-line'></div>
        <span onClick={() => handleCardClick(2)} className={selectedCard === 2 ? 'selected' : ''}>2.  Build</span>
        <div className='horizontal-line'></div>
        <span onClick={() => handleCardClick(3)} className={selectedCard === 3 ? 'selected' : ''}>3. Quality Assurance</span>
      </div>
      <div className='card-display'>
        <img src={card1} alt='Card 1' className={selectedCard === 1 ? 'top-card' : ''} />
        <img src={card2} alt='Card 2' className={selectedCard === 2 ? 'top-card' : ''} />
        <img src={card3} alt='Card 3' className={selectedCard === 3 ? 'top-card' : ''} />
      </div>
    </div>
  );
}

export default CardDetails;


