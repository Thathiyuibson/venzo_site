import React from 'react';
import './Footer.css';
import img1 from '../../images/Rectangle 166.svg';
import img2 from '../../images/Rectangle 167.svg';
import img3 from '../../images/Venzo png 1.svg';
import img4 from '../../images/div1.svg';
import img5 from '../../images/Rectangle 169.svg';
import img6 from '../../images/div2.svg';
import img7 from '../../images/QUICK LINKS.svg';
import img8 from '../../images/socialmedia.svg';
import img9 from '../../images/mediaheading.svg';
import img10 from '../../images/copyrights.svg';
import img11 from '../../images/Group 140.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='bg-img'>
            <img src= {img1} alt='blue-bg' />
        </div>
        <div className='div1'>
            <img src= {img2} alt='rectangle' />
            <img className='venzopng' src= {img3} alt='venzo' />
            <img className='venodesc' src= {img4} alt='venzodesc' />
        </div>
        <div className='div2'>
            <img  className='div2' src= {img5} alt='div2' />
            <img className='home' src= {img6} alt='home' />
            <img  className='quicklinks' src= {img7} alt='home' />
        </div>
        <div className='div3'>
            <img  className= 'div3'src={img5} alt='' />
            <img  className= 'socialmedia'src={img8} alt='socialmedia' />
            <img  className= 'mediaheading'src={img9} alt='mediaheading' />

        </div>
        <div className='copyrights'>
            <img src= {img10} alt='copyrights' />
        </div>
        <div className='terms'>
            <img src= {img11} alt='terms' />
        </div>
    </div>
    
  )
}

export default Footer;
