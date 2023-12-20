import React, { useState } from 'react';
import '../styles/CaptionGenerator.css';
import CopyToClipboardButton from './CopyToClipboardButton.jsx';


const CaptionGenerator = ({ image, vibe }) => {
  const [caption, setCaption] = useState('');
  const [reGeneratedCaption, setReGeneratedCaption] = useState('');
  const [error, setError] = useState('');

  const generateCaption = async () => {
    setError('');
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('vibe', vibe);

      const response = await fetch('your-api-endpoint/generate', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Error generating caption');
      
      const data = await response.json();
      setCaption(data.caption);
    } catch (err) {
      setError(err.message);
    }
  };

  const reGenerateCaption = async () => {
    setError('');
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('vibe', vibe);

      const response = await fetch('your-api-endpoint/regenerate', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Error regenerating caption');
      
      const data = await response.json();
      setReGeneratedCaption(data.caption);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="caption-generation">
      <button onClick={generateCaption} disabled={!image || !vibe}>
        Generate Caption
      </button>
      {caption && (
        <div className="caption-box">
          <p>{caption}</p>
          <CopyToClipboardButton text={caption} /> {/* Use the new component */}
        </div>
      )}
      <button onClick={reGenerateCaption} disabled={!caption}>
        Re-generate Caption
      </button>
      {reGeneratedCaption && (
        <div className="caption-box">
          <p>{reGeneratedCaption}</p>
          <CopyToClipboardButton text={reGeneratedCaption} /> {/* Use the new component */}
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </section>
  );
};

export default CaptionGenerator;
