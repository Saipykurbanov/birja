import React from 'react';
import CalendarList from './CalendarList';

const CalendarItem = () => {

    return (
        <div className="calendar_field">
            <div className="label"><span>ENTRY</span></div>
            <div className="calendar">
                <input type="date" />
                {/* <button>
                    <img src="/icons/calendar.png" alt="" />
                </button> */}
                {/* <CalendarList /> */}
            </div>
        </div>
    );
};

export default CalendarItem;