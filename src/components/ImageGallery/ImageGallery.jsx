// import React, { useRef, useEffect, useState } from 'react';
// import './ImageGallery.css';
// import img1 from '../../images/Rectangle 67.svg';
// import img2 from '../../images/Group 90.svg';
// import img3 from '../../images/Group 91.svg';
// import img4 from '../../images/Group 92.svg';
// import img5 from '../../images/Group 93.svg';

// const images = [
//   { id: 1, src: img1, heading: "Precise Requirement Translation", description: "Certified solution heroes, break-down and translate your requirements flawlessly" },
//   { id: 2, src: img2, heading: "Building Blocks", description: "Certified solution heroes, break-down and translate your requirements flawlessly" },
//   { id: 3, src: img3, heading: "Rigorous quality assurance", description: "Certified solution heroes, break-down and translate your requirements flawlessly" },
//   { id: 4, src: img4, heading: "Intelligent code", description: "Certified solution heroes, break-down and translate your requirements flawlessly" },
//   { id: 5, src: img5, heading: "Launch and success", description: "Certified solution heroes, break-down and translate your requirements flawlessly" },
// ];

// function MyComponent() {
//   const divRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleScroll = () => {
//     const node = divRef.current;
//     if (node) {
//       const scrollLeft = node.scrollLeft;
//       const scrollWidth = node.scrollWidth - node.clientWidth;
//       const newIndex = Math.min(Math.floor((scrollLeft / scrollWidth) * images.length), images.length - 1);
//       setCurrentIndex(newIndex);
//     }
//   };

//   useEffect(() => {
//     const node = divRef.current;
//     if (node) {
//       node.addEventListener('scroll', handleScroll);
//     }
//     return () => {
//       if (node) {
//         node.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   const currentImage = images[currentIndex];

//   return (
//     <div className="container">
//       <div className="sticky-container">
//         <div className="precise-requirements-count">{currentImage.id}</div>
//         <div className="mb-precise-requirement">{currentImage.heading}</div>
//         <div className="mb-carousal" style={{ backgroundImage: `url(${currentImage.src})` }}></div>
//         <div className="mb-precise-description">{currentImage.description}</div>
//       </div>
//       <div ref={divRef} className="scrollable-content">
//         {images.map((image, index) => (
//           <div key={index} className="scroll-item">
//             <p>Scroll to view image {index + 1}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyComponent;

// import React, { useRef, useEffect, useState } from 'react';
// import './ImageGallery.css';
// import img1 from '../../images/Rectangle 67.svg';
// import img2 from '../../images/Group 90.svg';
// import img3 from '../../images/Group 91.svg';
// import img4 from '../../images/Group 92.svg';
// import img5 from '../../images/Group 93.svg';

// const images = [
//   { id: 1, src: img1, heading: "Precise Requirement Translation", description: "Certified solution heroes, break-down and translate your requirements flawlessly" },
//   { id: 2, src: img2, heading: "Building Blocks", description: "Certified solution heroes, break-down and translate your requirements flawlessly" },
//   { id: 3, src: img3, heading: "Rigorous quality assurance", description: "Certified solution heroes, break-down and translate your requirements flawlessly" },
//   { id: 4, src: img4, heading: "Intelligent code", description: "Certified solution heroes, break-down and translate your requirements flawlessly" },
//   { id: 5, src: img5, heading: "Launch and success", description: "Certified solution heroes, break-down and translate your requirements flawlessly" },
// ];

// function MyComponent() {
//   const divRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleScroll = () => {
//     const node = divRef.current;
//     if (node) {
//       const scrollTop = node.scrollTop;
//       const scrollHeight = node.scrollHeight - node.clientHeight;
//       const newIndex = Math.min(Math.floor((scrollTop / scrollHeight) * images.length), images.length - 1);
//       setCurrentIndex(newIndex);
//     }
//   };

//   useEffect(() => {
//     const node = divRef.current;
//     if (node) {
//       node.addEventListener('scroll', handleScroll);
//     }
//     return () => {
//       if (node) {
//         node.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   const currentImage = images[currentIndex];

//   return (
//     <div className="container">
//       <div className="sticky-container">
//         <div className="precise-requirements-count">{currentImage.id}</div>
//         <div className="mb-precise-requirement">{currentImage.heading}</div>
//         <div className="mb-carousal" style={{ backgroundImage: `url(${currentImage.src})` }}></div>
//         <div className="mb-precise-description">{currentImage.description}</div>
//       </div>
//       <div ref={divRef} className="scrollable-content">
//         {images.map((image, index) => (
//           <div key={index} className="scroll-item">
//             <p>Scroll to view image {index + 1}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyComponent;

import React, { useState } from 'react';
import './ImageGallery.css';
import img1 from '../../images/Rectangle 67.svg';
import img2 from '../../images/Group 90.svg';
import img3 from '../../images/Group 91.svg';
import img4 from '../../images/Group 92.svg';
import img5 from '../../images/Group 93.svg';

const images = [
  { id: 1, src: img1, heading: "Precise Requirement Translation", description: "Certified solution heroes, break-down and translate your requirements flawlessly" },
  { id: 2, src: img2, heading: "Building Blocks", description: "Our Technical Architects Have Already Created Some Frames, To Get Started Quick!" },
  { id: 3, src: img3, heading: "Rigorous quality assurance", description: "We Weaved AI And Human Insights Into Our Code For Unparalleled Efficiency" },
  { id: 4, src: img4, heading: "Intelligent code", description: "Our Bug-Hunters(Your Friends) Make Sure Every Release Is A Solid Win For You" },
  { id: 5, src: img5, heading: "Launch and success", description: "Bi-Weekly Progress Updated, We Collect Early Feedback And Course Correct" },
];

function ImageGallery() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="gallery-container">
      <div className="image-display">
        {images.map((image) => (
          <div
            key={image.id}
            className={`image-wrapper ${currentImage.id === image.id ? 'highlight' : ''}`}
            onMouseEnter={() => setCurrentImage(image)}
          >
            <div className="top-content">
              <div className="precise-requirements-count">{image.id}</div>
              <div className="mb-precise-requirement">{image.heading}</div>
            </div>
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="gallery-image"
            />
            <div className="get-quote-button">Get Free Quotes</div>
            <div className="bottom-content">
              <div className="mb-precise-description">{image.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;





