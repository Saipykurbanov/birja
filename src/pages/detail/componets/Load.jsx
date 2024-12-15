import React from 'react';

const Load = ({load}) => {
    return (
        <div className={`detail_load ${load ? 'open' : ''}`}>
            <svg className='circle' width={'50px'} height={'50px'} xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" />
            </svg>
        </div>
    );
};

export default Load;