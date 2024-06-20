// 

// import React, { useState, useRef, useEffect } from 'react';
// import './ScrollEffect.css';
// import img1 from '../../images/Rectangle 67.svg';
// import img2 from '../../images/Group 90.svg';
// import img3 from '../../images/Group 91.svg';
// import img4 from '../../images/Group 92.svg';
// import img5 from '../../images/Group 93.svg';

// const ImageGallery = () => {
//   const [expandedCount, setExpandedCount] = useState(0);
//   const [heading, setHeading] = useState('Precise Requirement Translation');
//   const [description, setDescription] = useState('Certified Solution Heroes');
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const container = containerRef.current;
//       const scrollPosition = container.scrollTop;
//       const containerHeight = container.offsetHeight;
//       const contentHeight = container.scrollHeight;
//       const imagesExpanded = Math.floor(scrollPosition / (contentHeight / 5));

//       if (imagesExpanded > expandedCount) {
//         setExpandedCount(imagesExpanded);

//         // Update heading and description based on expandedCount
//         switch (imagesExpanded) {
//           case 1:
//             setHeading('Precise Requirement Translation');
//             setDescription('Certified Solution heroes');
//             break;
//           case 2:
//             setHeading('Building Blocks');
//             setDescription('Our technical Architects');
//             break;
//           case 3:
//             setHeading('Rigorous Quality Assurance');
//             setDescription('We weave AI and human');
//             break;
//           case 4:
//             setHeading('Intellegent Code');
//             setDescription('Our Bug-Hunters make sure every');
//             break;
//           case 5:
//             setHeading('Launch And Success');
//             setDescription('Bi-Weekly progress updates');
//             break;
//           default:
//             break;
//         }
//       }
//     };

//     const container = containerRef.current;
//     container.addEventListener('scroll', handleScroll);

//     return () => {
//       container.removeEventListener('scroll', handleScroll);
//     };
//   }, [expandedCount]);

//   return (
//     <div className="gallery-container" ref={containerRef}>
//       <h2 style={{ opacity: expandedCount > 0 ? 1 : 0 }}>{heading}</h2>
//       <div className="image-grid">
//         <img
//           src={img1}
//           alt="Image 1"
//           className={expandedCount >= 1 ? 'expanded' : ''}
//         />
//         <img
//           src={img2}
//           alt="Image 2"
//           className={expandedCount >= 2 ? 'expanded' : ''}
//         />
//         <img
//           src={img3}
//           alt="Image 3"
//           className={expandedCount >= 3 ? 'expanded' : ''}
//         />
//         <img
//           src={img4}
//           alt="Image 4"
//           className={expandedCount >= 4 ? 'expanded' : ''}
//         />
//         <img
//           src={img5}
//           alt="Image 5"
//           className={expandedCount >= 5 ? 'expanded' : ''}
//         />
//       </div>
//       <p style={{ opacity: expandedCount > 0 ? 1 : 0 }}>{description}</p>
//     </div>
//   );
// };

// export default ImageGallery;


import React, { useState, useEffect } from 'react';
import img1 from '../../images/Rectangle 67.svg';
import img2 from '../../images/Group 90.svg';
import img3 from '../../images/Group 91.svg';
import img4 from '../../images/Group 92.svg';
import img5 from '../../images/Group 93.svg';

const ImageGallery = () => {
  // State to keep track of the currently active image index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle scroll event
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollPosition = window.scrollY + windowHeight;

    // Determine if the next image should be shown based on scroll position
    if (scrollPosition > totalHeight * 0.75) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Render images with conditional styling based on activeIndex
  return (
    <div style={{ overflowY: 'auto', maxHeight: '300px', border: '1px solid black' }}>
      {[img1, img2, img3, img4, img5].map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index}`}
          style={{
            transition: 'transform 0.5s ease',
            transform: `scale(${index <= activeIndex? 1.2 : 1})`,
            opacity: index <= activeIndex? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
