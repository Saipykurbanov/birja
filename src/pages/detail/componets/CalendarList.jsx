import React from 'react';
import Head from './calendar/Head';
import Control from './calendar/Control';
import Grid from './calendar/Grid';

const CalendarList = ({calendar}) => {

    if(!calendar.isOpen) return null

    return (
        <div className="calendar_list_wrapper">
            <div className={`calendar_list`} onClick={(e) => e.stopPropagation()}>

                <Head date={calendar.currentDate}/>

                <Control 
                    months={calendar.months} 
                    num={calendar.date.month} 
                    year={calendar.date.year} 
                    prev={calendar.prevMonth} 
                    next={calendar.nextMonth}
                />

                <Grid 
                    list={calendar.calendarList} 
                    days={calendar.days} 
                    callback={calendar.changeDate} 
                    parse={calendar.parseDate} 
                    date={calendar.date}
                />
            </div>
        </div>
    );
};

export default CalendarList;