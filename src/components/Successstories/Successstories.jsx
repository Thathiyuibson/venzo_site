

import React from 'react';
import './Successstories.css';
import img1 from '../../images/Component 26.svg';
import img2 from '../../images/Component 8.svg';
import img3 from '../../images/Component 27.svg';
import img4 from '../../images/Component 28.svg';
import img5 from '../../images/Component 29.svg';
import img6 from '../../images/Group 73.svg';

const Successstories = () => {
  return (
    <div className='successstories'>
      <div className='img-layout'>
        <img src={img1} alt='img-layout'/>
      </div>
      <div className='hover-text1'>
        <span className='blue-text'>Few</span>
      </div>
      <div className='hover-text2'>
        <span className='red'>Success</span>
      </div>
      <div className='hover-text3'>
        <span className='red'>Stories</span>
      </div>
      <div className='group-73'>
        <img src={img6} alt='group73' />
      </div>
      <div className='showAltImages'>
      <div className='alt-img1'>
        <img src = {img2} alt='' />
      </div>
      <div className='alt-img2'>
        <img src = {img3} alt='' />
      </div>
      <div className='alt-img3'>
        <img src = {img4} alt='' />
      </div>
      <div className='alt-img4'>
        <img src = {img5} alt='' />
      </div>
      </div>
    </div>
  );
};

export default Successstories;
