import React from 'react';
import CalendarItem from './CalendarItem';

const Calendar = ({currentDate1, currentDate2, change}) => {
    return (

        <div className="calendar_wrapper">
            <CalendarItem currentDate={currentDate1} setCurrentDate={change} field={'entryDate'}/>
            <CalendarItem currentDate={currentDate2} setCurrentDate={change} field={'outDate'}/>
        </div>
    );
};

export default Calendar;