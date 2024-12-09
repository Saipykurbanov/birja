import React, { useState } from 'react';
import CalendarItem from './CalendarItem';

const Calendar = () => {

    const [currentDate1, setCurrentDate1] = useState('05.10.2024') 
    const [currentDate2, setCurrentDate2] = useState('') 

    return (

        <div className="calendar_wrapper">
            <CalendarItem currentDate={currentDate1} setCurrentDate={setCurrentDate1}/>
            <CalendarItem currentDate={currentDate2} setCurrentDate={setCurrentDate2}/>
        </div>
    );
};

export default Calendar;