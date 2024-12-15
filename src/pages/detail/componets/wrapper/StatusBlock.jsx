import React from 'react';

const StatusBlock = ({statusId, setInWork, nullStatus, setInCheck, setInReady}) => {
    return (
        <div className='status_block'>
            <div className={`status_item green ${statusId == 4 ? 'active' : ''}`} onClick={setInReady}></div>
            <div className={`status_item burgundy ${statusId == 3 ? 'active' : ''}`} onClick={setInCheck}></div>
            <div className={`status_item blue ${statusId == 2 ? 'active' : ''}`} onClick={setInWork}></div>
            <div className={`status_item violet ${statusId == 1 ? 'active' : ''}`} onClick={nullStatus}></div>
        </div>
    );
};

export default StatusBlock;