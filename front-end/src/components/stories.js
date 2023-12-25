
import { useEffect } from 'react';
import sparrow from '../images/Sparrow.png';
import magicalGarden from '../images/magical-garden.jpeg';
import speak from './speechUtils';
function Stories() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <div className="navbar">
        <h1 onClick={() => speak('Stories')}>Stories</h1>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>

      <div className="story-main-container">
        <div className="story-container">
          <h1>The Kind Sparrow</h1>
          <img src={sparrow} alt="The Kind Sparrow" />
          <p>
            Once upon a time, in a lush green forest, there lived a kind sparrow
            named <span className="character-name">Ruby</span>. Ruby was known for
            her generosity and willingness to help others.
          </p>
          <p>
            One day, a tired and hungry crow named{' '}
            <span className="character-name">Charlie</span> arrived in the forest.
            He had flown a long distance and was desperate for food. Ruby, noticing
            Charlie's plight, decided to share her food with him. She offered seeds
            and water, and Charlie was grateful.
          </p>
          <p>
            As days passed, Ruby and Charlie became good friends. Ruby continued to
            help other animals in need, teaching them the value of kindness. The
            forest became a harmonious place where animals lived in peace and shared
            resources.
          </p>
          <p>
            The <span className="moral">moral of the story</span> is that kindness
            can create a positive ripple effect, making the world a better place for
            everyone.
          </p>
        </div>

        <div className="story-container">
          <h1>The Magical Garden</h1>
          <img src={magicalGarden} alt="The Magical Garden" />
          <p>
            In a small village, there was a mysterious garden known as the "Magical
            Garden." The plants in this garden had special powers. One day, a curious
            group of children decided to explore the garden.
          </p>
          <p>
            As they wandered through the enchanted flowers and trees, they discovered
            that each plant had a unique ability. The{' '}
            <span className="character-name">Sunflower</span> could absorb sunlight
            and glow in the dark, while the{' '}
            <span className="character-name">Moonlit Lily</span> could only bloom
            under the light of the moon.
          </p>
          <p>
            The children observed the wonders of nature and learned about
            photosynthesis, the process that allows plants to convert sunlight into
            energy. They marveled at the biodiversity in the Magical Garden and gained
            a newfound appreciation for the environment.
          </p>
          <p>
            The adventure taught the children the importance of preserving nature and
            understanding the science behind the magical phenomena they witnessed.
          </p>
          <p>
            The <span className="moral">moral of the story</span> is that exploring
            nature can be a magical and educational journey.
          </p>
        </div>
      </div>
    </>
  );
}

export default Stories;
