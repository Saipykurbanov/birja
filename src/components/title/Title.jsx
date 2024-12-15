import React from 'react';
import './css/title.css';

const Title = ({ children }) => {
    return (
        <h2 className='main_title'>
            {children}
        </h2>
    );
};

export default Title;