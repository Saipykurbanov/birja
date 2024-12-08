import React from 'react';
import './css/detail.css';
import Head from './componets/Head';
import TimeLine from './componets/TimeLine';
import LeftPanel from './componets/LeftPanel';
import RightPanel from './componets/RightPanel';
import Line from './componets/Line';


const Detail = () => {
    return (
        <div className='detail'>
            
            <Head />

            <div className="detail_wrapper">
                <LeftPanel />
                <Line mode={'vertical'}/>
                <RightPanel />
            </div>

            <TimeLine />

        </div>
    );
};

export default Detail;