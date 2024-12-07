import React from 'react';

const CalendarList = ({calendar}) => {


    return (
        <div className={`calendar_list ${calendar.isOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="head">
                <p>{calendar.date.currentDay}.{calendar.date.currentMonth}.{calendar.date.currentYear}</p>
                <img src="/icons/calendar.png" alt="" />
            </div>

            <div className="control">
                <div className="months">{calendar.months[calendar.date.month]} {calendar.date.year}</div>
                <div className="button_control">
                    <button onClick={calendar.prevMonth}><img src="/icons/prev.svg" alt="" /></button>
                    <button onClick={calendar.nextMonth}><img src="/icons/next.svg" alt="" /></button>
                </div>
            </div>

            <div className="calendar_grid" ref={calendar.calendarRef}>
                {calendar.days.map((el, i) => (
                    <div className={`day ${el.weekend ? 'weekend' : ''}`}key={i}>
                        <p className="short">{el.name}</p>
                    </div>
                ))}

                {calendar.calendarList.map((el, i) => (
                    <div key={i}>
                        {el === 0 ? <div className={`plug`}><span></span></div>
                        :<div onClick={(e) => calendar.changeDate(el)} className={`calendar_item ${calendar.date.currentDay === el && calendar.date.month === Number(calendar.date.currentMonth) && calendar.date.year === calendar.date.currentYear ? 'active' : ''}`}>
                            <p>{el}</p>
                        </div>}
                    </div>
                ))}

            </div>
        </div>
    );
};

export default CalendarList;