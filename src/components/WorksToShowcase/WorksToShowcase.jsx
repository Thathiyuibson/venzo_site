import React from 'react'
import './WorksToShowcase.css'
import img1 from '../../images/Frame 29.svg';
import img2 from '../../images/object.svg';

const WorksToShowcase = () => {
  return (
    <div className='workstoshowcase'>
      <div className='showcase-heading'>
        <h1>Some Works To Showcase</h1>
      </div>
      <div className='healthcare'>
        <div className='webapp'>
            <img src= {img1} alt='webapp' />
        </div>
        <div className='healthcare-head'>
            <h1>Remote monitoring of healthcare IOT Sensors</h1>
        </div>
        <div className='performances'>
            <h1>100%</h1>
            <h2>Overall Performance</h2>
        </div>
        <div className='successs'>
            <h1>98%</h1>
            <h2>Success In 1 Month</h2>
        </div>
        <div className='vertical-line'></div>
        <div className='lap-img'>
        <img src= {img2} alt='lap-img' />
      </div>
      </div>
    </div>
  )
}

export default WorksToShowcase
