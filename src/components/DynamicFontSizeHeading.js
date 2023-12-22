// DynamicFontSizeHeading.js
import React, { useEffect, useRef } from 'react';

const DynamicFontSizeHeading = ({ text  }) => {
  const descriptionRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      const description = descriptionRef.current;
      const containerWidth = description.offsetWidth;
      const textWidth = description.scrollWidth;

      // Define a base scale factor
      let scaleFactor = 0.05;

      // Adjust the scale factor based on the screen width
      if (window.innerWidth < 400) {
        scaleFactor = 2;
      } else if (window.innerWidth < 700) {
        scaleFactor = 2.5;
      } else if (window.innerWidth < 1000) {
        scaleFactor = 3;
      }else{
        scaleFactor = 3;
      }

      if (textWidth > containerWidth || description ==='Space Exploration' ) {
        // Calculate the new font size based on the ratio of container width and text width
        const newFontSize = (containerWidth / textWidth) * scaleFactor + 'rem';
        description.style.fontSize = newFontSize;
      } else {
        // Reset font size when it fits in a single line
        description.style.fontSize =(scaleFactor+1)+'rem';
      }
    };
    

    // Call the function when the window is resized
    window.addEventListener('resize', adjustFontSize);

    // Call the function initially
    adjustFontSize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, [text]); // Re-run effect when the text changes

  return (
    <div>
    <h1 ref={descriptionRef} className="category-desc">
      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#530ae4' }}>
        {text}
      </span>
    </h1>
  </div>
  );
};

export default DynamicFontSizeHeading;
