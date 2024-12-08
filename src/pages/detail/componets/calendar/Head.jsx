import React from 'react';

const Head = ({date}) => {
    return (
        <div className="head">
        <p>{date}</p>
        <img src="/icons/calendar.png" alt="" />
    </div>
    );
};

export default Head;