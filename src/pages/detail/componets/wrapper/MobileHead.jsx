import React from 'react';

const MobileHead = ({tab, callback}) => {

    return (
        <div className='mobile_head'>
            <div className={`tab ${tab === 1 ? 'active' : ''}`} onClick={() => callback(1)}>
                <span>Accounting</span>
            </div>
            <div className={`tab ${tab === 2 ? 'active' : ''}`} onClick={() => callback(2)}>
                <span>Description</span>
            </div>
        </div>
    );
};

export default MobileHead;