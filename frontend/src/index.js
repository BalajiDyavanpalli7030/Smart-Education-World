import {React, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainSection from './components/main-section';
import CategoryPage from './components/categoryPage';
import './style.css'
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import Stories from './components/stories';
import Rhymes from './components/rhymes';
import Error from './components/error';

function Main (){
  useEffect(() => {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = function() {
        };
    }

    return () => {
              };
  }, []);

  return <>
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<MainSection />} />
          <Route path="/:category" element={<CategoryPage />} />    
          <Route path="/about-us" element={<AboutUs />} />      
          <Route path="/contact-us" element={<ContactUs />} />    
          <Route path='/stories' element={<Stories/>}/>
          <Route path='/rhymes' element={<Rhymes/>}/>
          <Route  path="*" element={<Error/>}/> 
        </Routes>
      </div>
    </Router>
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);
