import React from 'react';

const CustomInput = ({ label, icon, value, callback, placeholder }) => {
    return (
        <div className='custom_input'>
            <label htmlFor="">{label}</label>

            <div className="custom_input_wrapper">

                <img src={icon} alt="" />

                <input 
                    type="text" 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={callback}
                />

            </div>
        </div>
    );
};

export default CustomInput;