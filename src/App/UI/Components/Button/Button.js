import React from 'react';
import './Button.css';

function Button({onClick, type, text}) {
  return (
    <button onClick={onClick} type={type} className='button'>
        {text}
    </button>
  )
}

export default Button;