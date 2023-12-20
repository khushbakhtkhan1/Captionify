import React from 'react';
import '../styles/VibeSelector.css';

const VibeSelector = ({ onVibeSelection, vibe }) => (
  <section className="vibe-selection">
    <select value={vibe} onChange={onVibeSelection}>
      <option value="">Select a vibe</option>
      <option value="happy">Happy</option>
      <option value="sad">Sad</option>
      <option value="funny">Funny</option>
      <option value="sarcastic">Sarcastic</option>
    </select>
  </section>
);

export default VibeSelector;
