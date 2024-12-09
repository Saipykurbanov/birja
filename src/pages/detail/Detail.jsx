import React from 'react';
import './css/detail.css';
import Head from './componets/Head';
import TimeLine from './componets/TimeLine';
import LeftPanel from './componets/LeftPanel';
import RightPanel from './componets/RightPanel';
import Line from '../../components/line/Line';
import StatusBlock from './componets/StatusBlock';
import Preview from './componets/Preview';
import MobileHead from './componets/MobileHead';
import useDetail from './hooks/useDeatil';


const Detail = () => {

    const detail = useDetail()

    return (
        <div className='detail'>
            
            <Head />

            <div className="detail_wrapper">
                <Preview />
                <MobileHead tab={detail.tab} callback={detail.setTab}/>
                <LeftPanel tab={detail.tab}/>
                <Line mode={'vertical c'}/>
                <RightPanel tab={detail.tab}/>
                <StatusBlock />
            </div>

            <Line />
            <TimeLine />

        </div>
    );
};

export default Detail;