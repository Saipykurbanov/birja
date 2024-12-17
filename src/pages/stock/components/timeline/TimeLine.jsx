import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import './css/timeline.css';

const TimeLine = () => {

    const [isOpen, setIsOpen] = useState(true)

    const openTimeLine = () => {
        setIsOpen(prev => prev === true ? false : true)
    }

    return (
        <div className={`timeline ${isOpen ? 'open' : ''}`}>

            <div className="timeline_title" onClick={openTimeLine}>
                <h3>Timeline</h3>

                <img src={'/icons/arrow_up.svg'} alt=""/>
            </div>

            <div className="line"></div>

            <div className="timeline_list_wrapper">

                <div className="timeline_header">
                    <div className="name">Name <img src="/icons/filter2.svg" alt="" /></div>

                    <div className="action">Action <img src="/icons/filter2.svg" alt="" /></div>

                    <div className="ip_state">Ip State <img src="/icons/filter2.svg" alt="" /></div>

                    <div className="time">Time <img src="/icons/filter2.svg" alt="" /></div>
                </div>

                <div className="timeline_list">
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                </div>

            </div>
        </div>
    );
};

export default TimeLine;