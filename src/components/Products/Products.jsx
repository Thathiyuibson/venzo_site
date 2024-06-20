import React from 'react';
import './Product.css';
import img1 from '../../images/Group 95.svg';
import img2 from '../../images/healthcare.svg';
import img3 from '../../images/Component 22.svg';
import img4 from '../../images/Frame 29.svg';
import img5 from '../../images/Group 81.svg';
import img6 from '../../images/Component 21.svg';
import img7 from '../../images/Group 88.svg';
import img8 from '../../images/Frame 29.svg';

const Products = () => {
  return (
  <div className='products'>
    <div className='product1'>
      <div className='main-div'>
        <div className='laptop'>
          <img src= {img1} alt='laptop' />
        </div>
        <div className='healthcare-text'>
          <img src= {img2} alt='healthcare' />
        </div>
        <div className='rotating-circle'>
          <img className='rotate-circle' src= {img3} alt='casestudy' />
        </div>
        <div className='heading'>
          <h1>Remote Monitoring Of Healthcare IOT Sensors</h1>
        </div>
        <div className='performance'>
          <h1>100%</h1>
          <h2>Overall Performance</h2>
        </div>
        <div className='success'>
          <h1>98%</h1>
          <h2>Success In 1 Month</h2>
        </div>
        <div className='webapp'>
          <img src= {img4} alt='webapp' />
        </div>
      </div>
    </div>
    <div className='product2'>
      <div className='mains-div'>
        <div className='mobile'>
          <img src= {img7} alt='mobile' />
        </div>
        <div className='logistics-text'>
          <img src= {img5} alt='logistics' />
        </div>
        <div className='rotating-circle2'>
          <img className='rotate-circle2' src= {img6} alt='casestudy' />
        </div>
        <div className='heading2'>
          <h1>Centralized Fleet Management For Trucks And Shippers</h1>
        </div>
        <div className='performance2'>
          <h1>100%</h1>
          <h2>Overall Performance</h2>
        </div>
        <div className='success2'>
          <h1>98%</h1>
          <h2>Success In 1 Month</h2>
        </div>
        <div className='mobileweb'>
          <img src= {img8} alt='mobileweb' />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Products;
