import React from 'react';

const Load = ({load}) => {
    return (
        <div className={`detail_load ${load ? 'open' : ''}`}>
            <p>Loading...</p>
        </div>
    );
};

export default Load;