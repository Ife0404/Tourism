import React from 'react';
import './ProductCard.css';

function ProductCard({ productImage, altText, productName, price, properties, ratings, onClick, type, text }) {
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={productImage} alt={altText} />
      </div>
      <div className='product-name'>{productName}</div>
      <div className='product-price'>{price}</div>
      <div className='product-char'>{properties}</div>
      <div className='product-ratings'>{ratings}</div>
      <div className='product-button'>
        <button onClick={onClick} type={type}>
          {text}
        </button>
      </div>
    </div>
  )
}

export default ProductCard