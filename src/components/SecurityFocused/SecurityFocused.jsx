import React from 'react'
import './SecurityFocused.css'
import img1 from '../../images/shield.svg'
import img2 from '../../images/leftsecurity.svg'
import img3 from '../../images/rightsecurity.svg'
import img4 from '../../images/Line 1.svg'

const SecurityFocused = () => {
  return (
    <div className='security-focused'>
      <div className='security-title'>
        <h1>Security-Focused Engineering Navigation</h1>
      </div>
      <div className='shield'>
        < img src= {img1} alt='shield' />
      </div>
      <div className='left-security'>
        < img src= {img2} alt='left-security' />
      </div>
      <div className='right-security'>
      < img src= {img3} alt='right-security' />
      </div>
      <div className='gradient-line'>
      < img src= {img4} alt='line-gradient' />
      </div>
    </div>
  )
}

export default SecurityFocused
