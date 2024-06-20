import React from 'react'
import './Venzoworks.css'
import img1 from '../../images/orange.svg';
import ImageGallery from '../ImageGallery/ImageGallery';

const Venzoworks = () => {
  return (
    <div className='venzoworks'>
        <div className='orange'>
            <img src= {img1} alt='orange wheel' />
        </div>
        <ImageGallery/>
    </div>
  )
}

export default Venzoworks;

