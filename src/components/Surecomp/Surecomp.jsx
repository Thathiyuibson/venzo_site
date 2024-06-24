import React from 'react'
import './Surecomp.css'
import img1 from '../../images/surecomp.svg';
import img2 from '../../images/odid.svg';

const Surecomp = () => {
  return (
    <div className='surecomp'>
      <div className='surecomp-left'>
        <img src= {img1} alt='surecomp' />
        <div className='surecomp-title'>
            <h1>
            Parternered with <br/ > <span className='black'>Surecomp</span>
            </h1>
        </div>
        <div className='surecomp-para'>
            <p>For over five years, our company has proudly partnered with leading banking software service providers Surecomp, delivering top-tier tech offshoring solutions that drive innovation and efficiency in the financial sector.</p>
        </div>
      </div>
      <div className='verticall-line'></div>
      <div className='surecomp-right'>
        <div className='double-quotes'>
            <h1>“ <br/ >
                <span className='proactive'>Their proactive and responsive approach has made them an invaluable extension of our team.</span>
            </h1>
        </div>
        <div className='odid'>
            < img src= {img2} alt='odid' />
        </div>
      </div>
      
    </div>
  )
}

export default Surecomp
