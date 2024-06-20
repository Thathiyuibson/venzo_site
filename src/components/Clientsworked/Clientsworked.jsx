import React from 'react';
import './Clientsworked.css';
import img1 from '../../images/Group 132.svg';
import img2 from '../../images/Group 133.svg';
import img3 from '../../images/image 30.svg';
import img4 from '../../images/image 33.svg';
import img5 from '../../images/image 34.svg';
import img6 from '../../images/image 28.svg';
import img7 from '../../images/Rapidloops.svg';
import img8 from '../../images/image 32.svg';
import img9 from '../../images/image 37.svg';

const Clientsworked = () => {
  return (
    <div className='clients'>
      <div className='client-heading'>
        <h1>Clients We Worked</h1>
      </div>
      <div className='client-layout'>
        <img src= {img1} alt='fintech' />
      </div>
      <div className='fintech'>
        <div className='fintech-head'>
        <h1>Fintech & Offshoring</h1>
        </div>
        <div className='fintech-img'>
            <img src={img2} alt='fintech' />
        </div>
      </div>
      <div className='custom-erp'>
        <div className='custom-head'>
            <h1>Custom ERP Solutions</h1>
        </div>
        <div className='custom-img'>
            <img className='custom-3' src= {img3} alt='img3'/>
            <img className='custom-4' src= {img4} alt='img4'/>
            <img className='custom-5' src= {img5} alt='img5'/>
        </div>
      </div>
      <div className='logistics'>
        <div className='logistics-head'>
            <h1>Logistics</h1>
        </div>
        <div className='logistics-img'>
            <img  className= 'logistic-6' src= {img6} alt='img6' />
            <img className= 'logistic-7' src= {img7} alt='img7' />
        </div>
      </div>
      <div className='education'>
        <div className='education-head'>
            <h1>Education</h1>
        </div>
        <div className='education-img'>
            <img className='education-8' src={img8} alt='img8' />
            <img className='education-9' src={img9} alt='img9' />
        </div>
      </div>
      <div className='Ecommerce'>
        <div className='ecommerce-head'>
            <h1>Ecommerce</h1>
        </div>
      </div>
      <div className='other'>
        <div className='other-head'>
            <h1>Other Domains</h1>
        </div>
      </div>
    </div>
  )
}

export default Clientsworked
