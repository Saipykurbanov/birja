import React from 'react';
import './css/line.css'

const Line = ({mode}) => {
    return (
        <div className={`line ${mode}`}></div>
    );
};

export default Line;