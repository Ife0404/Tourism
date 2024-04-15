import React from 'react';
import './BrandCard.css';

function BrandCard({ brandImage, altText, title, desc }) {
    return (
        <div className='brand-card'>
            <div className='brand-main'>
                <div className='brand-image'>
                    <img src={brandImage} alt={altText} />
                </div>

                <div className='brand-details'>
                    <h2 className='brand-title'>{title}</h2>
                    <p className='brand-desc'>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default BrandCard