import React from 'react';

const StatusBlock = ({statusId}) => {
    return (
        <div className='status_block'>
            <div className={`status_item green ${statusId == 4 ? 'active' : ''}`}></div>
            <div className={`status_item burgundy ${statusId == 1 ? 'active' : ''}`}></div>
            <div className={`status_item blue ${statusId == 1 ? 'active' : ''}`}></div>
            <div className={`status_item violet ${statusId == 1 ? 'active' : ''}`}></div>
        </div>
    );
};

export default StatusBlock;