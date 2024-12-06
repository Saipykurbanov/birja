import React from 'react';

const CheckBox = ({label}) => {
    return (
        <label htmlFor={label} className='custom_check_box'>
            <input type="checkbox"  id={label}/>
            <span>{label}</span>
        </label>
    );
};

export default CheckBox;