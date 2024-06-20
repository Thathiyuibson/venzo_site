import React from 'react'
import './Happymind.css'
import img1 from '../../images/Group 107.svg';
import img2 from '../../images/Group 106.svg';
import img3 from '../../images/announcement.svg';

const Happyminds = () => {
  return (
    <div className='happyminds'>
        <div className='background-div'>
            <div className='rowimg-1'>
                <img src= {img1} alt='row1' />
            </div>
            <div className='rowimg-2'>
                <img src= {img2} alt='row2' />
            </div>
            <div className='center-div'>
                <div className='center-txt'>
                    <span className='text-red'>Happy Minds</span> Build Great Products
                </div>
                <div className='center-txt2'>
                    <img src= {img3} alt='img3' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Happyminds
