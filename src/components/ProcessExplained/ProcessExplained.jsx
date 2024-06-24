import React, { useState } from 'react';
import './ProcessExplained.css';
import img1 from '../../images/process1.svg';
import img2 from '../../images/process2.svg';
import img3 from '../../images/process3.svg';
import img4 from '../../images/process4.svg';
import img5 from '../../images/process5.svg';
import img6 from '../../images/Group 251.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProcessExplained = () => {
  const [currentProcess, setCurrentProcess] = useState(0);
  const [transition, setTransition] = useState('');

  const processContent = [
    {
      number: '01.',
      title: 'Tell your requirements',
      description: 'Provide us with your augmentation requirements, detailing your tech stack, desired team size, and project duration. The more specific your information, the quicker we can match you with the perfect candidates.',
      img: img1,
    },
    {
      number: '02.',
      title: 'Choose Team',
      description: 'Boost your team with our expert professionals for seamless project execution. Scale your workforce efficiently with top-tier talent tailored to your needs.',
      img: img2,
    },
    {
      number: '03.',
      title: 'Onboard Team',
      description: 'Seamlessly integrate new team members with our efficient onboarding solutions. Ensure a smooth transition and quick productivity with our tailored onboarding process.',
      img: img3,
    },
    {
      number: '04.',
      title: 'Lead Extended Team',
      description: 'Guide your extended team with our expert leadership services for optimal performance. Ensure alignment, productivity, and success with our dedicated leadership support.',
      img: img4,
    },
    {
      number: '05.',
      title: 'Achieve Your Project Goals',
      description: 'Achieve your project goals with our dedicated extended team solutions. Leverage specialized expertise and seamless integration to ensure your projects success.',
      img: img5,
    },
  ];

  const handleNext = () => {
    setTransition('fade-out');
    setTimeout(() => {
      setCurrentProcess((prev) => (prev + 1) % processContent.length);
      setTransition('fade-in');
    }, 300);
  };

  const handlePrev = () => {
    setTransition('fade-out');
    setTimeout(() => {
      setCurrentProcess((prev) => (prev - 1 + processContent.length) % processContent.length);
      setTransition('fade-in');
    }, 300);
  };

  return (
    <div className='process-explained'>
      <div className='horizontal-dotted'></div>
      <div className='op'>
        <h1>Our Process</h1>
        <h2>We provide top-tier talent tailored to your needs, enhancing your team’s capabilities and Enabling you to scale efficiently with expert support.</h2>
      </div>
      <hr className='horizontal-straight' />
      <hr className='vertical-straight' />
      <div className={`process-holder ${transition}`}>
        <div className='process1-left'>
          <h1>{processContent[currentProcess].number}</h1>
          <h2>{processContent[currentProcess].title}</h2>
          <p>{processContent[currentProcess].description}</p>
        </div>
        <div className='process1-right'>
          <img src={processContent[currentProcess].img} alt={`process${currentProcess + 1}`} />
        </div>
      </div>
      <div className='arrowforward' onClick={handleNext}>
        <ArrowForwardIcon style={{ marginLeft: '5px', marginTop: '5px', color: "white" }} />
      </div>
      <div className='arrowbackward' onClick={handlePrev}>
        <ArrowBackIcon style={{ marginLeft: '5px', marginTop: '5px', color: "white" }} />
      </div>
    </div>
  );
};

export default ProcessExplained;
