import React from 'react';
import './ImageCard.css';

function ImageCard({ yourImage, altText, labelText }) {
  return (
    <div className='image-card'>
        <img src={yourImage} alt={altText} />
        <p>{labelText}</p>
    </div>
  )
}

export default ImageCard;