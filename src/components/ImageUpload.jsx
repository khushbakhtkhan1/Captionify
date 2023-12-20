import React, { useState } from 'react';
import '../styles/ImageUpload.css';

const ImageUpload = ({onImageUpload}) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <section className="upload-section">
       <input type="file" onChange={onImageUpload} accept="image/*" />
      {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
    </section>
  );
};

export default ImageUpload;
