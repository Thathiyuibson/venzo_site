import React from 'react'
import './Announcement.css'
import Hero from './Hero GIF.json';
import lottie from 'lottie-react';
import img1 from '../../images/Group 141.svg';
import img2 from '../../images/announcement.svg';
import img3 from '../../images/Mask group.svg';
import img4 from '../../images/component 23.svg';
import Lottie from 'lottie-react';

const Announcement = () => {
  return (
    <div className='announcement'>
    <div className='announcement1'>
        <img src= {img1} alt='announcement' />
    </div>
    <div className='announcement2'>
        <img src={img2} alt='announcement2' />
    </div>
    <div className='gs-btn'>
        <button className='get-started'>Get Started</button>
    </div>
    <div className='oval-img'>
        <Lottie animationData={Hero} />
    </div>

    </div>
  )
}

export default Announcement
