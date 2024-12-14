import React from 'react';
import './css/detail.css';
import Head from './componets/Head';
import TimeLine from './componets/timeline/TimeLine';
import LeftPanel from './componets/wrapper/LeftPanel';
import RightPanel from './componets/wrapper/RightPanel';
import Line from '../../components/line/Line';
import StatusBlock from './componets/wrapper/StatusBlock';
import Preview from './componets/preview/Preview';
import MobileHead from './componets/wrapper/MobileHead';
import MobilePanel from './componets/wrapper/MobilePanel';
import useCoin from './hooks/useCoin';
import Load from './componets/Load';

const Detail = () => {

    const coin = useCoin()

    return (
        <div className='detail'>

            <Load load={coin.load}/>
            <Head timer={{time: coin.time, saveNow: coin.saveNow, updatedAt: coin.info.updatedAt}}/>

            <div className="detail_wrapper">

                <Preview statusid={coin.info.statusId}/>
                <MobileHead tab={coin.tab} callback={coin.setTab}/>
                <LeftPanel coin={coin}/>
                <Line mode={'vertical c'}/>
                <RightPanel coin={coin}/>
                <StatusBlock 
                    setInReady={coin.setInReady}
                    setInCheck={coin.setInCheck} 
                    nullStatus={coin.nullStatus} 
                    setInWork={coin.setInWork} 
                    statusId={coin.info.statusId}
                />
                <MobilePanel 
                    setInReady={coin.setInReady} 
                    setInCheck={coin.setInCheck} 
                    nullStatus={coin.nullStatus} 
                    setInWork={coin.setInWork} 
                    statusId={coin.info.statusId}
                />

            </div>

            <Line />
            <TimeLine />

        </div>
    );
};

export default Detail;