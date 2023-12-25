import {React,useEffect} from "react";
import johnyImage from '../images/johnyImage.jpeg';
import twinkleImage from '../images/twinkleImage.jpeg';
import speak from './speechUtils';
function Rhymes(){
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return <>
    <div className="navbar">
        <h1 onClick={() => speak('Rhymes')}>Rhymes</h1>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
      <div className="story-main-container">
      <div className="story-container">
      <img className="rhyme-image" src={johnyImage} alt="Johny Johny Yes Papa" />
      <h1 className="rhyme-title " onClick={() => speak('Johny Johny Yes Papa')}>Johny Johny Yes Papa</h1>
      <div className="stanza">
        <p>
          Johny, Johny,{' '}
          <span className="rhyme-line">Yes, Papa,</span>
          <br/>
          Eating sugar?{' '}
          <span className="rhyme-line">No, Papa.</span>
        </p>
        <p>
          Telling lies?{' '}
          <span className="rhyme-line">No, Papa.</span>
          <br/>
          Open your mouth!{' '}
          <span className="rhyme-line">Ha, ha, ha!</span>
        </p>
      </div>
    </div>

    <div className="story-container">
      <img className="rhyme-image" src={twinkleImage} alt="Twinkle, twinkle, little star" />
      <h1 onClick={() => speak('Twinkle, twinkle, little star')}>Twinkle, Twinkle, Little Star</h1>
      <div className="stanza">
        <p >
            Twinkle, twinkle, little star,
            <br />
            <span className="rhyme-line">How I wonder what you are!</span>
            <br />
            <span >Up above the world so high,</span>
            <br />
            <span className="rhyme-line">Like a diamond in the sky.</span>
        </p>

      </div>
    </div>
  
      </div>
    </>
}

export default Rhymes