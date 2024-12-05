import React from 'react';
import './css/input.css';

const Input = ({ label, mode, placeholder, value, callback, maxWidth }) => {
    return (
        <div className={`main_input`} style={{maxWidth: `${maxWidth}px`}}>
            <label htmlFor="">{label}</label>

            <input 
                className={mode}
                type='text' 
                value={value} 
                placeholder={placeholder}
                onChange={callback}
            />
        </div>
    );
};

export default Input;