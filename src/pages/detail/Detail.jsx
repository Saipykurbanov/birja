import React, { useEffect, useState } from 'react';
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
import MobilePanel from './componets/MobilePanel';
import useCoin from './hooks/useCoin';
import Load from './componets/Load';

const Detail = () => {

    const detail = useDetail()
    const coin = useCoin()

    return (
        <div className='detail'>
            <Load load={coin.load}/>
            
            <Head lastTime={detail.lastTime} time={detail.time} saveNow={detail.saveNow}/>

            <div className="detail_wrapper">
                <Preview statusid={coin.info.statusId}/>
                <MobileHead tab={detail.tab} callback={detail.setTab}/>
                <LeftPanel tab={detail.tab}/>
                <Line mode={'vertical c'}/>
                <RightPanel changeStatus={coin.changeStatus} tab={detail.tab} coin={coin}/>
                <StatusBlock statusId={coin.info.statusId}/>

                <MobilePanel statusId={coin.info.statusId} stockNumber={coin.info.stockNumber}/>
            </div>

            <Line />
            <TimeLine />

        </div>
    );
};

export default Detail;