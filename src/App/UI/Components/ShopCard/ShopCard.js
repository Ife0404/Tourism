import React from 'react'

function ShopCard({ title, description, shopImage, altText }) {
  return (
    <div className='shop-card'>
        <div className='shop-details'>
            <div className='shop-paragraph'>
                <div className='paragraph-details'>
                    <div className='shop-title'>{title}</div>
                    <div className='shop-desc'>{description}</div>
                </div>
            </div>
            <div className='shop-image'>
                <img src={shopImage} alt={altText} />
            </div>
        </div>
    </div>
  )
}

export default ShopCard