import React from 'react';
import img1 from '../../images/Group 147.svg';
import img2 from '../../images/Group 145.svg';
import './VenzoSoftware.css'

const VenzoSoftware = () => {
  return (
    <div className='venzosoftware'>
      <div className='group147'>
        <img className='laptop-147' src= {img1} alt='grp147' />
      </div>
      <div className='group145'>
      <img className='mobile-145' src= {img2} alt='grp147' />
      </div>
      <div className='venzosoftware-text'>
        <h1>Are you looking to build a custom software ? </h1>
      </div>
      <div className='venzosoftware-text2'>
        <h3> Certified Solution Heroes, Break-Down And Translate Your Requirements Flawlessly </h3>
      </div>
      <div>
        <button className='buildyourapp'>Build your app with us today</button>
      </div>
    </div>
  )
}

export default VenzoSoftware
