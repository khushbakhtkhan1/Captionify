// App.jsx
import React, { useState } from 'react';
import ImageUpload from "./components/ImageUpload";
import VibeSelector from './components/VibeSelector';
import CaptionGenerator from './components/CaptionGenerator';
import Translate from './components/Translate';
import './styles/App.css';

const App = () => {
  const [image, setImage] = useState(null);
  const [vibe, setVibe] = useState('');
  const [caption, setCaption] = useState('');

  return (
    <div>
      <header>
        <h1>Captionify</h1>
      </header>
      <main>
        <ImageUpload onImageUpload={(event) => {
          const file = event.target.files[0];
          if (file) {
            setImage(file);
          }
        }} />

        <VibeSelector vibe={vibe} onVibeSelection={(event) => setVibe(event.target.value)} />

        <CaptionGenerator image={image} vibe={vibe} setCaption={setCaption} />
        <Translate text={caption} />
      </main>
    </div>
  );
};

export default App;
