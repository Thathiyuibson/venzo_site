import React from 'react'
import './OffshoringSolution.css'
import img1 from '../../images/businessanalyst.svg';
import img2 from '../../images/businessconsultant.svg';
import img3 from '../../images/developers.svg';
import img4 from '../../images/designers.svg';

const OffshoringSolutions = () => {
  return (
    <div className='offshoring-solutions'>
      <div className='offshore-title'>
        <h1>
        Unlock Global Talent with Our Tech <br/ >
        <span className='bold-txt'>Offshoring Solutions</span>
        </h1>
      </div>
      <div className='offshore-sub'>
        <h3>certified solution heroes, break-down and translate your requirements flawlessly</h3>
      </div>
      <div>
        <button className='solution-btn'>Build your apps with us today</button>
      </div>
      <div className='profiles'>
      <div className='businessanalyst'>
        < img src= {img1} alt='businessanalyst' />
      </div>
      <div className='businessconsultant'>
        < img src= {img2} alt='businessconsultant' />
      </div>
      <div className='developers'>
        < img src= {img3} alt='developers' />
      </div>
      <div className='designers'>
        < img src= {img4} alt='designers' />
      </div>
      </div>
      <div className='trusted'>
        <h1>Trusted Partners in Tech Offshoring</h1>
      </div>
      <div className='leaders'>
        <h1>partnered with industry leaders Surecomp & Saama</h1>
      </div>
    </div>
  )
}

export default OffshoringSolutions
