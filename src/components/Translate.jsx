import React, { useState } from 'react';
import '../styles/Translate.css';

const Translate = ({ text }) => {
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('en'); // Default language code

  const handleLanguageChange = async (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    translateText(text, selectedLanguage);
  };

  const translateText = async (textToTranslate, targetLanguage) => {
    // Call to translation API (e.g., Google Translate)
    // This should be done in a secure environment (server-side)
    // For demonstration, we'll just mock this function
    setTranslatedText(`Translated ${textToTranslate} to ${targetLanguage}`);
  };

  return (
    <section className="translation-section">
      <select value={language} onChange={handleLanguageChange}>
        {/* Add language options here */}
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        {/* More languages */}
      </select>
      <p>{translatedText}</p>
    </section>
  );
};

export default Translate;
