import React from 'react';
import useCalendar from '../hooks/useCalendar';

const CalendarList = () => {

    const calendar = useCalendar()

    return (
        <div className='calendar_list'>
            <div className="head">
                <p>01.10.2024</p>
                <img src="/icons/calendar.png" alt="" />
            </div>

            <div className="months">Июль 2024</div>

            <div className="calendar_grid" ref={calendar.calendarRef}>
                {calendar.days.map((el, i) => (
                    <div className={`day ${el.weekend ? 'weekend' : ''}`}key={i}>
                        <p className="short">{el.name}</p>
                    </div>
                ))}

                {calendar.calendarList.map((el, i) => (
                    <div key={i}>
                        {el === 0 ? <div className={`plug`}><span></span></div>
                        :<div className={`calendar_item ${calendar.date.currentDay === el && calendar.date.month === calendar.date.currentMonth && calendar.date.year == calendar.date.currentYear ? 'active' : ''}`}>
                            <p>{el}</p>
                        </div>}
                    </div>
                ))}

            </div>
        </div>
    );
};

export default CalendarList;