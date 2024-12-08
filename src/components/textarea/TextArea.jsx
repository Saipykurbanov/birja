import React from 'react';
import './css/textarea.css';


const TextArea = ({label, value, changeValue, placeholder, name, rows, mode}) => {
    return (
        <div className='text_area_field'>
            <label htmlFor=""><span>{label}</span></label>
            <textarea 
                value={value} 
                onChange={(e) => changeValue(name, e.target.value)} 
                name="" 
                className={mode} 
                id="" placeholder={placeholder} rows={rows}>
            </textarea>
        </div>
    );
};

export default TextArea;