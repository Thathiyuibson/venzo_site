import React from 'react'
import './Footers.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img1 from '../../images/Venzo png 1.svg';
import img2 from '../../images/score.svg';

const Footers = () => {
  return (
    <div className='footers'>
      <div className='horizontal-linee1'></div>
      <div className='horizontal-linee2'></div>
      <div className='horizontal-linee3'></div>
      <div className='q-links'>
        <div className='qlinks-title'>
            <h1>Quick Links <ArrowForwardIcon className='forward'/> </h1>
        </div>
        <div className='qlinks-opt'>
            <h3>Home</h3>
            <h3>Software Development</h3>
            <h3>Tech Offshoring</h3>
            <h3>QA Services</h3>
            <h3>Company</h3>
            <h3>Contact</h3>
        </div>
      </div>
      <div className='connect'>
        <div className='connect-title'>
            <h1>Connect with us <ArrowForwardIcon className='arroww'/></h1>
        </div>
        <div className='connect-opt'>
            <h3>Instagram</h3>
            <h3>Youtube</h3>
            <h3>LinkedIn</h3>
            <h3>X</h3>
        </div>
      </div>
      <div className='venzoo'>
        < img src= {img1} alt='logo'/>
        <h3>Venzo Technologies' website embodies sustainability, optimizing resources and promoting eco-friendly practices for a greener digital footprint.</h3>
        <div className='score'>
        < img className='score' src= {img2} alt='score' />
        </div>

      </div>
    </div>
  )
}

export default Footers
