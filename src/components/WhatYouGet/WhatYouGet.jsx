import React from 'react'
import './WhatYouGet.css'
import img1 from '../../images/Vector 28.svg';
import img2 from '../../images/Rectangle 122.svg';
import CardComponent from '../CardComponents.jsx/CardComponent';

const WhatYouGet = () => {
  return (
    <div className='whatyouget'>
        <div className='secondary-div'>
            <div className='whatyouget-head'>
                <h1>What You Get ?</h1>
            </div>
            <div className='whatyouget-vector'>
                <img src= {img1} alt='arrowvector' />
            </div>
            <div className='Rectangle122'>
                <img src= {img2} alt='oval-img' />
            </div>
            <CardComponent/>
        </div>
      
    </div>
  )
}

export default WhatYouGet;
