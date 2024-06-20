import React from 'react';
import './HoverText.css';
import img1 from '../../images/Vector 16.svg';
import img2 from '../../images/Vector 18.svg';
import img3 from '../../images/Vector 17.svg';

const HoverText = () => {
  return (
    <div className="hover-container">
      <div className="hover-space">
        <div className="hover-text-left">
          <span className='red-text'>We Do</span> Things ???
        </div>
        <div className="hover-text-bottom">How</div>
      </div>
      <div className='line-img'>
        <img src= {img1} alt='line' />
      </div>
      <div className='layer'>
        <img className='vector18' src= {img2} alt='vector' />
      </div>
      <div className='layer2'>
        <img className='vector2' src= {img3} alt='vector2'/>
      </div>
      <div className='certifiedsolution'>
        <p className='text'>
          Certified Solution Heroes, Break-Down And Translate Your Requirements Flawlesslycertified Solution Heroes,
          Break-Down And Translate Your Requirements Flawlesslycertified Solution Heroes, Break-Down And Translate Your
          Requirements Flawlessly
        </p>
      </div>
    </div>
  );
};

export default HoverText;

