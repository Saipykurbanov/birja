import React from 'react';

const StatusBlock = () => {
    return (
        <div className='status_block'>
            <div className="status_item green active"></div>
            <div className="status_item burgundy"></div>
            <div className="status_item blue"></div>
            <div className="status_item violet"></div>
        </div>
    );
};

export default StatusBlock;