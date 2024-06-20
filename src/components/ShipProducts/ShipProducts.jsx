// import React, { useState, useEffect } from 'react';
// import './ShipProducts.css';
// import img1 from '../../images/image 47.svg';
// import img2 from '../../images/image 48.svg';

// const ShipProducts = () => {
//   const [activeCard, setActiveCard] = useState(1);

  
//   const handleScroll = () => {
//     const cardOne = document.querySelector('.card-one');
//     const cardTwo = document.querySelector('.card-two');
//     const cardThree = document.querySelector('.card-three');

//     const scrollPosition = window.scrollY + window.innerHeight / 3;

//     console.log(scrollPosition, window.scrollY, window.innerHeight)
    

//     if (cardOne && cardTwo && cardThree) {
//         const cardOneTop = cardOne.offsetTop;
//         const cardTwoTop = cardTwo.offsetTop;
//         const cardThreeTop = cardThree.offsetTop;

//     if (scrollPosition >= cardOneTop && scrollPosition < cardTwoTop) {
//       setActiveCard(1);
//       console.log('1')
//     } else if (scrollPosition >= cardTwoTop && scrollPosition < cardThreeTop) {
//       setActiveCard(2);
//       console.log('2')
//     } else if (scrollPosition >= cardThreeTop) {
//       setActiveCard(3);
//       console.log('3')
//     }
// }
//   };

//   useEffect(() => {
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   });

//   return (
//     <div className='shipproducts'>
//       <div className='heading-1'>
//         <h1>With Venzo You Can Ship Your Products</h1>
//       </div>
//       <div className='heading-2'>
//         <h1>3x Efficiency</h1>
//       </div>
//       <div className='sticky-div'>
//         <div className='left-head'>
//           <h1
//             className={`left-head1 ${activeCard === 1 ? 'active' : ''}`}
//             style={{ color: activeCard === 1 ? '#1C9EDC' : '#414141' }}
//           >
//             BUILD
//           </h1>
//           <h1
//             className={`left-head2 ${activeCard === 2 ? 'active' : ''}`}
//           >
//             OPERATE
//           </h1>
//           <h1
//             className={`left-head3 ${activeCard === 3 ? 'active' : ''}`}
//             style={{ color: activeCard === 3 ? 'blue' : '#1C9EDC' }}
//           >
//             TRANSFER
//           </h1>
//         </div>
//         <div className='threecard-container'>
//           <div className='card-scroll-wrapper'>
//             <div className='card-one'>
//               <div className='card-titleone'>01</div>
//               <div className='card-subtitleone'>
//                 <h1>Understanding Your Vision</h1>
//               </div>
//               <div className='card-descone'>
//                 <p>
//                   We start by comprehensively understanding your goals, requirements, and vision for the software project. This initial phase is crucial for aligning our strategies with your objectives.
//                 </p>
//               </div>
//               <div className='card-imgone'>
//                 <img src={img1} alt='img1' />
//               </div>
//             </div>
//             <div className='card-two'>
//               <div className='card-titletwo'>02</div>
//               <div className='card-subtitletwo'>
//                 <h1>Development & Testing</h1>
//               </div>
//               <div className='card-desctwo'>
//                 <p>
//                   Leveraging cutting-edge technologies and industry best practices, we embark on the development phase. Our iterative approach ensures constant feedback loops and rigorous testing to deliver high-quality, bug-free software.
//                 </p>
//               </div>
//               <div className='card-imgtwo'>
//                 <img src={img2} alt='img2' />
//               </div>
//             </div>
//             <div className='card-three'>
//               <div className='card-titlethree'>03</div>
//               <div className='card-subtitlethree'>
//                 <h1>Deployment & Launch</h1>
//               </div>
//               <div className='card-descthree'>
//                 <p>
//                   Once the development phase is complete, we handle the deployment of your software solution, ensuring a smooth transition to the operational phase. Our team manages all aspects of deployment, minimizing downtime and disruptions.
//                 </p>
//               </div>
//               <div className='card-imgthree'>
//                 <img src={img1} alt='img3' />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShipProducts;

import React, { useState, useEffect } from 'react';
import './ShipProducts.css';
import img1 from '../../images/image 47.svg';
import img2 from '../../images/image 48.svg';

const ShipProducts = () => {
  const [activeCard, setActiveCard] = useState(1);

  const handleScroll = () => {
    const wrapper = document.querySelector('.card-scroll-wrapper');
    const cardOne = document.querySelector('.card-one');
    const cardTwo = document.querySelector('.card-two');
    const cardThree = document.querySelector('.card-three');

    if (wrapper && cardOne && cardTwo && cardThree) {
      const scrollPosition = wrapper.scrollTop + wrapper.clientHeight / 3;

      const cardOneTop = cardOne.offsetTop;
      const cardTwoTop = cardTwo.offsetTop;
      const cardThreeTop = cardThree.offsetTop;

      if (scrollPosition >= cardOneTop && scrollPosition < cardTwoTop) {
        setActiveCard(1);
      } else if (scrollPosition >= cardTwoTop && scrollPosition < cardThreeTop) {
        setActiveCard(2);
      } else if (scrollPosition >= cardThreeTop) {
        setActiveCard(3);
      }
    }
  };

  useEffect(() => {
    const wrapper = document.querySelector('.card-scroll-wrapper');
    if (wrapper) {
      wrapper.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (wrapper) {
        wrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className='shipproducts'>
      <div className='heading-1'>
        <h1>With Venzo You Can Ship Your Products</h1>
      </div>
      <div className='heading-2'>
        <h1>3x Efficiency</h1>
      </div>
      <div className='sticky-div'>
        <div className='left-head'>
          <h1
            className={`left-head1 ${activeCard === 1 ? 'active' : ''}`}
            style={{ color: activeCard === 1 ? '#1C9EDC' : '#414141' }}
          >
            BUILD
          </h1>
          <h1
            className={`left-head2 ${activeCard === 2 ? 'active' : ''}`}
            style={{ color: activeCard === 2 ? '#1C9EDC' : '#414141' }}
          >
            OPERATE
          </h1>
          <h1
            className={`left-head3 ${activeCard === 3 ? 'active' : ''}`}
            style={{ color: activeCard === 3 ? '#1C9EDC' : '#414141' }}
          >
            TRANSFER
          </h1>
        </div>
        <div className='threecard-container'>
          <div className='card-scroll-wrapper'>
            <div className='card-one'>
              <div className='card-titleone'>01</div>
              <div className='card-subtitleone'>
                <h1>Understanding Your Vision</h1>
              </div>
              <div className='card-descone'>
                <p>
                  We start by comprehensively understanding your goals, requirements, and vision for the software project. This initial phase is crucial for aligning our strategies with your objectives.
                </p>
              </div>
              <div className='card-imgone'>
                <img src={img1} alt='img1' />
              </div>
            </div>
            <div className='card-two'>
              <div className='card-titletwo'>02</div>
              <div className='card-subtitletwo'>
                <h1>Development & Testing</h1>
              </div>
              <div className='card-desctwo'>
                <p>
                  Leveraging cutting-edge technologies and industry best practices, we embark on the development phase. Our iterative approach ensures constant feedback loops and rigorous testing to deliver high-quality, bug-free software.
                </p>
              </div>
              <div className='card-imgtwo'>
                <img src={img2} alt='img2' />
              </div>
            </div>
            <div className='card-three'>
              <div className='card-titlethree'>03</div>
              <div className='card-subtitlethree'>
                <h1>Deployment & Launch</h1>
              </div>
              <div className='card-descthree'>
                <p>
                  Once the development phase is complete, we handle the deployment of your software solution, ensuring a smooth transition to the operational phase. Our team manages all aspects of deployment, minimizing downtime and disruptions.
                </p>
              </div>
              <div className='card-imgthree'>
                <img src={img1} alt='img3' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipProducts;

