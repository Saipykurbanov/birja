import React from 'react';
import './css/textarea.css';


const TextArea = ({disabled, label, value, callback, placeholder, name, rows, mode}) => {
    return (
        <div className='text_area_field'>
            <label htmlFor=""><span>{label}</span></label>
            <textarea 
                disabled={disabled}
                value={value} 
                onChange={callback} 
                name="" 
                className={mode} 
                id="" placeholder={placeholder} rows={rows}>
            </textarea>
        </div>
    );
};

export default TextArea;