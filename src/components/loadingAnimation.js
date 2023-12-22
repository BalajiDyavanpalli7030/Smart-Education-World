import React, { useEffect, useState } from 'react';

const LoadingAnimation = ({ category }) => {
  const [animationText, setAnimationText] = useState('');

  useEffect(() => {
    // Split the category name into an array of characters
    const characters = category.split('');

    // Create a span element for each character with a unique style
    const animatedText = characters
      .map(
        (char, index) =>
          `<span key=${index} style="color: ${getRandomColor()}; animation-delay: ${index * 0.1}s">${char}</span>`
      )
      .join('');

    setAnimationText(animatedText);
  }, [category]);

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return <div className="loading-animation" dangerouslySetInnerHTML={{ __html: animationText }} />;
};

export default LoadingAnimation;
