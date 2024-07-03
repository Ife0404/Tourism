import React from 'react';
import './DiscountCard.css';
import { BiDollar } from "react-icons/bi";

function DiscountCard({ save, number, story, discountImage, altText, backgroundColorClass, fontColorClass, dollarColor }) {
    return (
        <div className='discount-card'>
            <div className='discount-details'>
                <div className={`paragraph ${backgroundColorClass}`}>
                    <div className='paragraph-content'>
                        <div className='save-discount'>{save}</div>
                        <div className='number'>
                            <div className='dollar'>
                                <BiDollar style={{ color: dollarColor }} />
                            </div>
                            <div className={`number-discount ${fontColorClass}`}>{number}</div>
                        </div>
                        <div className='story-discount'>{story}</div>
                    </div>

                </div>

                <div className='discount-image'>
                    <img src={discountImage} alt={altText} />
                </div>
            </div>
        </div>
    )
}

export default DiscountCard
