import React from 'react';

const TimelineItem = () => {
    return (
        <div className="timeline_item">
            <div className="name">Alexandr Ovchinnikov</div>

            <div className="action"> <div className="mob_title">Action</div> Added description Added description Added description </div>

            <div className="ip_state"> <div className="mob_title">IP State</div> 192.168.123.132 RU</div>

            <div className="time">
                <div className="day">10 days ago</div> 
                
                <div className="t">11:25 PM</div>
            </div>
        </div>
    );
};

export default TimelineItem;