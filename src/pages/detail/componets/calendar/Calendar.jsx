import React from 'react';
import CalendarItem from './CalendarItem';

const Calendar = ({currentDate1, currentDate2, change}) => {
    return (

        <div className="calendar_wrapper">
            <CalendarItem label={'ENTRY'} currentDate={currentDate1} setCurrentDate={change} field={'entryDate'}/>
            <CalendarItem label={'OUT'} currentDate={currentDate2} setCurrentDate={change} field={'outDate'}/>
        </div>
    );
};

export default Calendar;