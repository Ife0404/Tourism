import React from 'react';
import './PaymentCard.css';

function PaymentCard({ paymentImage, altText }) {
    return (
        <div className='payment-card'>
            <img src={paymentImage} alt={altText} />
        </div>
    )
}

export default PaymentCard