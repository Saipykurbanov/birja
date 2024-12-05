import React from 'react';
import TimelineItem from './TimelineItem';

const TimeLine = () => {
    return (
        <div className='timeline'>

            <div className="timeline_title">
                <h3>Timeline</h3>

                <img src={'./icons/arrow_up.svg'} alt="" />
            </div>

            <div className="line"></div>

            <div className="timeline_list_wrapper">

                <div className="timeline_header">
                    <div className="name">Name <img src="./icons/filter2.svg" alt="" /></div>

                    <div className="action">Action <img src="./icons/filter2.svg" alt="" /></div>

                    <div className="ip_state">Ip State <img src="./icons/filter2.svg" alt="" /></div>

                    <div className="time">Time <img src="./icons/filter2.svg" alt="" /></div>
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