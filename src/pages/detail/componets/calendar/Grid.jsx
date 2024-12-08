import React from 'react';

const Grid = ({list, days, callback, date, parse}) => {
    return (
        <div className="calendar_grid">
            {days.map((el, i) => (
                <div className={`day ${el.weekend ? 'weekend' : ''}`}key={i}>
                    <p className="short">{el.name}</p>
                </div>
            ))}

            {list.map((el, i) => (
                <div key={i}>
                    {el === 0 ? <div className={`plug`}><span></span></div>
                    :<div onClick={(e) => callback(el)} className={`calendar_item ${el === parse.day && parse.month == date.month && parse.year == date.year ? 'active' : ''}`}>
                        <p>{el}</p>
                    </div>}
                </div>
            ))}

        </div>
    );
};

export default Grid;