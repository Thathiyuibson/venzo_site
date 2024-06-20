import React from 'react'
import './EveryIndustry.css'
import img1 from '../../images/orange.svg';
import img2 from '../../images/Frame 73.svg';
import img3 from '../../images/Frame 74.svg';
import img4 from '../../images/Vector 36.svg';


const EveryIndustry = () => {
  return (
    <div className='EveryIndustry'>
        <div className='everyindustry-head'>
            <h1>
                Our Capabilities In <span className='highlight'>Every Industry</span>
            </h1>
        </div>
        <div className='group167'>
            <h1>
                50+<br /> <span className='cs'>Customer Softwares</span>
            </h1>
            <h1>
                20+<br /> <span className='ca'>Customer Applications</span>
            </h1>
            <h1>
                98%<br /> <span className='cr'>Customer Retention</span>
            </h1>
        </div>
        <div className='certified'>
            <h3 className='thanioruvan'>Certifies Solution Heroes, Break-Down And Translate Your Requirements Flawlessly</h3>
        </div>
        <div className='orange-wheel'>
            <img src= {img1} alt='orange wheel/' />
        </div>
        <div>
            <img className='vector-36' src= {img4} alt='vector 36' />
        </div>
        <div className='companies-worked'>
        <div className='ltr'>
            <img src= {img2} alt='ltr'/>
        </div>
        <div className='rtl'>
            <img src= {img3} alt='rtl'/>
        </div>
        </div>
        <div className='dotted-line'></div>
    </div>
  )
}

export default EveryIndustry;
