import React from 'react';
import './css/button.css';


const Button = ({mode, callback, children}) => {
    return (
        <button className={`main_button ${mode}`} onClick={callback}>
            {children}
        </button>
    );
};

export default Button;