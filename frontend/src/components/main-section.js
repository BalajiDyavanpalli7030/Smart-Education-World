// MainSection.js
import {React,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import alphabets from '../images/alphabets/alphabets.jpg';
import numbers from '../images/numbers/numbers.jpg';
import animals from '../images/animals/animals.jpg';
import fruits from '../images/fruits/fruits.jpeg';
import vegetables from '../images/vegetables/vegetables.jpeg';
import colors from '../images/colors/colors.jpeg';
import shapes from '../images/shapes/shapes.jpg';
import vehicles from '../images/vehicles/vehicles.jpeg';
import bodyParts from '../images/body parts/bodyParts.png';
import weather from '../images/weathers/weather.jpg';
import instruments from '../images/instruments/instruments.jpeg';
import Sports from '../images/sports/Sports.png'
import countries from '../images/countries/countries.jpeg';
import professions from '../images/professions/professions.jpeg';
import food from '../images/foods/food.jpeg';
import festivals from '../images/festivals/festivals.jpeg';
import emotions from '../images/emotions/emotions.jpeg';
import nature from '../images/nature/nature.jpeg';
import space from '../images/space/space.jpeg';
import stories from '../images/magical-garden.jpeg';
import johnyImage from '../images/johnyImage.jpeg'
import Footer from './footer';
import '../style.css';
import speak from './speechUtils';
const categories = [
  { title: "Alphabets", path: "/alphabets", image: alphabets },
  { title: "Numbers", path: "/numbers", image:numbers },
  { title: "Shapes", path: "/shapes", image: shapes },
  { title: "Colors", path: "/colors", image: colors },
  { title: "Animals", path: "/animals", image: animals},
  { title: "Fruits", path: "/fruits", image: fruits },
  { title: "Vegetables", path: "/vegetables", image: vegetables },
  { title: "Vehicles", path: "/vehicles", image: vehicles},
  { title: "Body Parts", path: "/body parts", image: bodyParts },
  { title: "Weathers", path: "/weathers", image: weather },
  { title: "Instruments", path: "/instruments", image: instruments },
  { title: "Sports", path: "/sports", image: Sports },
  { title: "Countries", path: "/countries", image: countries },
  { title: "Professions", path: "/professions", image: professions },
  { title: "Foods", path: "/foods", image: food },
  { title: "Festivals", path: "/festivals", image: festivals },
  { title: "Emotions", path: "/emotions", image: emotions},
  { title: "Nature", path: "/nature", image: nature },
  { title: "Space", path: "/space", image: space },

];

  const MainSection = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
        <> 
          <Header/>
          <main className="category-container main-container">
            {categories.map((category, index) => (
              <Link to={category.path} key={index} style={{ textDecoration: 'none' }}>
                <div className='category-item  category-no-hover'  onClick={() => speak(category.title)}>
                  <img className='category-image main-container-image' src={category.image} alt={category.title} />
                  <h1 className="category-desc">{category.title}</h1>
                </div>
              </Link>
                ))}
              <Link to='./stories'>
                <div className='category-item  category-no-hover'  onClick={() => speak('Stories')}>
                  <img className='category-image main-container-image' src={stories} alt={'Stories'} />
                  <h1 className="category-desc">Stories</h1>
                </div>
              </Link>
              <Link to='./rhymes'>
                <div className='category-item  category-no-hover'  onClick={() => speak('Rhymes')}>
                  <img className='category-image main-container-image' src={johnyImage} alt={'Rhymes'} />
                  <h1 className="category-desc">Rhymes</h1>
                </div>
              </Link>
          </main>
          <Footer/>
        </>
    );
}

export default MainSection;
