import Speak from 'speak-tts';

const speak = (text) => {
  const speakEngine = new Speak();

  speakEngine.init().then(() => {
    speakEngine
      .speak({
        text,
        queue: false,
      })
  });
};

export default speak;