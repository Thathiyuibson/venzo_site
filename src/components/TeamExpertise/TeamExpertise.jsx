import React from 'react'
import './TeamExpertise.css'
import img1 from '../../images/discussion 1.svg'
import img2 from '../../images/premium 1.svg'
import img3 from '../../images/competence 1.svg'
import img4 from '../../images/transparency 1.svg'
import img5 from '../../images/task-list 1.svg'
import img6 from '../../images/image 234.svg'

const TeamExpertise = () => {
  return (
    <div className='team-expertise'>
        <div className='sub-team'>
            <div className='title-team'>
                <h1>Team's expertise</h1>
                <h3>Our team's expertise is diverse and extensive, encompassing technical skills, creative problem-solving, effective communication, and proactive adaptability, ensuring successful project outcomes consistently.</h3>
            </div>
            <div className='colorcard-holder'>
                <div className='color-card1'>
                    <div className='divi-1'></div>
                    <div className='tc-img'>
                        < img src= {img1} alt='tc' />
                    </div>
                    <div className='color-cardpara'>
                        <h1>Team Communication</h1>
                        <h3>Our seamless communication fosters collaboration, alignment, and synergy, driving projects forward efficiently and effectively at every stage.</h3>
                    </div>
                </div>
                <div className='color-card2'>
                    <div className='divi-2'></div>
                    <div className='pq-img'>
                        < img src= {img2} alt='pq' />
                    </div>
                    <div className='color-card2para'>
                        <h1>Premium Qulaity Standards</h1>
                        <h3>Our commitment to excellence ensures top-tier quality across all aspects, meeting and exceeding industry benchmarks consistently.</h3>
                    </div>
                </div>
                <div className='color-card3'>
                    <div className='divi-3'></div>
                    <div className='tp-img'>
                        < img src= {img3} alt='tp' />
                    </div>
                    <div className='color-card3para'>
                        <h1>Technical Proficiency</h1>
                        <h3>Our team demonstrates mastery in complex technical skills, enabling seamless execution of projects with precision and expertise.</h3>
                    </div>
                </div>
                <div className='color-card4'>
                    <div className='divi-4'></div>
                    <div className='ct-img'>
                        < img src= {img4} alt='ct' />
                    </div>
                    <div className='color-card4para'>
                        <h1>Complete Transparency</h1>
                        <h3>We uphold openness, sharing all information for trust, accountability, and collaborative decision-making.</h3>
                    </div>
                </div>
                <div className='color-card5'>
                    <div className='divi-5'></div>
                    <div className='rm-img'>
                        < img src= {img5} alt='rm' />
                    </div>
                    <div className='color-card5para'>
                        <h1>Requirements Mechanism</h1>
                        <h3>Our structured process ensures accurate, comprehensive requirement capture, enhancing clarity and driving project success.</h3>
                    </div>
                </div>
                <div className='color-card6'>
                    <div className='divi-6'></div>
                    <div className='bv-img'>
                        < img src= {img6} alt='bv' />
                    </div>
                    <div className='color-card5para'>
                        <h1>Best Value Proposition</h1>
                        <h3>We deliver exceptional quality at competitive prices, ensuring you receive maximum benefit for your investment.</h3>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default TeamExpertise
