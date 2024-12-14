import React from 'react';
import './css/input.css';

const Input = ({ label, mode, placeholder, value, callback, maxWidth, type, disabled }) => {
    return (
        <div className={`main_input ${mode}`} style={{maxWidth: `${maxWidth}px`}}>
            <label title={label} htmlFor=""><span>{label}</span></label>

            <input 
                type={type} 
                value={value} 
                placeholder={placeholder}
                onChange={callback}
                disabled={disabled}
            />
        </div>
    );
};

export default Input;