import React, { useState } from 'react';
import CalendarList from './CalendarList';
import useCalendar from '../hooks/useCalendar';

const CalendarItem = () => {

    const calendar = useCalendar()

    return (
        <div className="calendar_field">
            <div className="label"><span>ENTRY</span></div>
            <div className="calendar">
                <div className="date_input">
                    <input type="number" max={31} min={0}  value={calendar.date.currentDay} onChange={(e) => calendar.change(e.target.value, 'currentDay')} onBlur={(e) => calendar.blur(e.target.value, 'currentDay')}/>.
                    <input type="number" max={12} min={0} value={calendar.date.currentMonth} onChange={(e) => calendar.change(e.target.value, 'currentMonth')} onBlur={(e) => calendar.blur(e.target.value, 'currentMonth')}/>.
                    <input className='year' min={0} value={calendar.date.currentYear} type="number" onChange={(e) => calendar.change(e.target.value, 'currentYear')}/>
                </div>
                <button onClick={calendar.openPopUp}>
                    <img src="/icons/calendar.png" alt="" />
                </button>
                <CalendarList calendar={calendar}/>
            </div>
        </div>
    );  
};

export default CalendarItem;