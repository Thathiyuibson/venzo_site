import React from 'react';
import './Management.css';
import img1 from '../../images/Group 206.svg';
import img2 from '../../images/Group 207.svg';

const Management = () => {
  return (
    <div className='management'>
      <div className='main-heading'>
        <h1>End To End Management Of Your Software Needs</h1>
      </div>
      <div className='sub-heading'>
        <h3>We Start By Comprehensively Understanding Your Goals, Requirements, And Vision For The Software Project.</h3>
      </div>
      <div className='flow-images'>
      <div className='flow-img1'>
        <img src= {img1} alt='rowimg1' />
      </div>
      <div className='flow-img2'>
        <img src= {img2} alt='rowimg1' />
      </div>
      </div>
    </div>
  )
}

export default Management
