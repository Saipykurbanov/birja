import React from 'react';

const Control = ({months, num, year, prev, next}) => {
    return (
        <div className="control">
            <div className="months">{months[num]} {year}</div>
            <div className="button_control">
                <button onClick={prev}><img src="/icons/prev.svg" alt="" /></button>
                <button onClick={next}><img src="/icons/next.svg" alt="" /></button>
            </div>
        </div>
    );
};

export default Control;