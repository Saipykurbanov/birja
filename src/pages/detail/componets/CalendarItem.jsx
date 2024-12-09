import React from 'react';
import CalendarList from './CalendarList';
import useCalendar from '../hooks/useCalendar';

const CalendarItem = ({currentDate, setCurrentDate}) => {

    const calendar = useCalendar(currentDate, setCurrentDate)

    return (
        <div className="calendar_field">
            <div className="label"><span>ENTRY</span></div>
            <div className={`calendar ${calendar.error ? 'error' : ''}`}>
                <input type="text" value={calendar.currentDate} onChange={(e) => calendar.change(e.target.value)}/>
                <button onClick={calendar.openPopUp}>
                    <img src="/icons/calendar.png" alt="" />
                </button>
                <CalendarList calendar={calendar}/>
            </div>
        </div>
    );  
};

export default CalendarItem;