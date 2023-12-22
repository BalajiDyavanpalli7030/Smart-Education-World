import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DynamicFontSizeHeading from './DynamicFontSizeHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import speak from './speechUtils';
import LoadingAnimation from './loadingAnimation';

const CategoryPage = () => {
  const { category } = useParams();
  const [currentCategoryImages, setCurrentCategoryImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     import(`../images/${category.toLowerCase()}/${category.toLowerCase()}.js`).then((module) => {
  //       setCurrentCategoryImages(module.default || []);
  //       setIsLoading(false);
  //       // speak(module.default[0].description); // Speak the description of the first item
  //     });
  //   }, 1000);

  //   return () => clearTimeout(delay);
  // }, [category]);
  useEffect(() => {
    const delay = setTimeout(() => {
      fetch(`http://127.0.0.1:5000/get_data?category=${category}`)
        .then(response => response.json())
        .then(data => {
          setCurrentCategoryImages(data);
          setIsLoading(false);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, 1000);
  
    return () => clearTimeout(delay);
  }, [category]);

  // const handleKeyDown = (event) => {
  //   if (event.key === 'ArrowRight' || event.key === 'PageUp') {
  //     const nextIndex = (currentIndex + 1) % currentCategoryImages.length;
  //     setCurrentIndex(nextIndex);
  //     speak(currentCategoryImages[nextIndex].description);
  //   }
  // };

  return (
    <>
      <div className="navbar">
        <h1 onClick={() => speak(category)}>{category}</h1>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
      {isLoading ? (
        <LoadingAnimation category={category} />
      ) : (
        // <div
        //   className="category-container category-items"
        //   tabIndex="0"
        //   onKeyDown={handleKeyDown} // Listen for arrow key events
        // >
        //   <div className="category-item" onClick={() => speak(currentCategoryImages[currentIndex].description)}>
        //     <img className="category-image" src={`data:image/jpeg;base64,${currentCategoryImages[currentIndex].image}`} alt={currentCategoryImages[currentIndex].description} />
        //     <DynamicFontSizeHeading text={currentCategoryImages[currentIndex].description} />
        //     <FontAwesomeIcon size="2x" icon={faVolumeUp} style={{ color: '#530ae4' }} />
        //   </div>
        // </div>
        <div className='category-container category-items'>
          {currentCategoryImages.map((item, index) => (
            <div
              className='category-item'
              key={index}
              onClick={() => {
                speak(item.description);
                console.log(item.image); // Call the function to upload data
              }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <img className='category-image' src={`data:image/jpeg;base64,${item.image}`} alt={item.description} />
              <DynamicFontSizeHeading text={item.description} />
              {isHovered === index && (
                <div className="icon-container">
                <FontAwesomeIcon size="2x" icon={faVolumeUp} style={{ color: '#530ae4' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryPage;
