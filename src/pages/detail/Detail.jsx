import React, { useState } from 'react';
import './css/detail.css';
import Head from './componets/Head';
import TimeLine from './componets/TimeLine';
import LeftPanel from './componets/LeftPanel';
import RightPanel from './componets/RightPanel';
import Line from './componets/Line';
import StatusBlock from './componets/StatusBlock';
import Preview from './componets/Preview';
import MobileHead from './componets/MobileHead';


const Detail = () => {

    const [tab, setTab] = useState(1)

    return (
        <div className='detail'>
            
            <Head />

            <div className="detail_wrapper">
                <Preview />
                <MobileHead tab={tab} callback={setTab}/>
                <LeftPanel tab={tab}/>
                <Line mode={'vertical c'}/>
                <RightPanel tab={tab}/>
                <StatusBlock />
            </div>

            <Line />

            <TimeLine />

        </div>
    );
};

export default Detail;