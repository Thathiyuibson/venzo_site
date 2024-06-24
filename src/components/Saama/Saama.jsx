import React from 'react'
import './Saama.css'
import img1 from '../../images/saama.svg';
import img2 from '../../images/william.svg';

const Saama = () => {
  return (
    <div className='saama'>
            <div className='saama-left'>
        <img src= {img1} alt='surecomp' />
        <div className='saama-title'>
            <h1>
            Parternered with <br/ > <span className='black'>Saama</span>
            </h1>
        </div>
        <div className='saama-para'>
            <p>For over five years, our company has proudly partnered with leading banking software service providers Surecomp, delivering top-tier tech offshoring solutions that drive innovation and efficiency in the financial sector.</p>
        </div>
      </div>
      <div className='verticall-line'></div>
      <div className='saama-right'>
        <div className='double-quotes'>
            <h1>“ <br/ >
                <span className='proactive'>Their proactive and responsive approach has made them an invaluable extension of our team.</span>
            </h1>
        </div>
        <div className='william'>
            < img src= {img2} alt='odid' />
        </div>
      </div>
    </div>
  )
}

export default Saama
