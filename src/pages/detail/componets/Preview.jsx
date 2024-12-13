import React, { useEffect, useRef } from 'react';
import Line from '../../../components/line/Line';
import Button from '../../../components/button/Button';
import Api from '../../../utils/Api';
import MainSlider from './MainSlider';
import HorizontalSlider from './HorizontalSlider';

const Preview = ({idPhoto, photos, statusid}) => {

    const main = useRef(null)
    const horiz = useRef(null)

    useEffect(() => {
        if(main.current && horiz.current) {
            main.current.sync(horiz.current.splide);
        }
    }, [main, horiz]);

    return (
        <div className="preview">
            
            <div className="vertical_lots">
                <img src="/images/v-lot.jpg" alt="" />
                <img src="/images/v-lot.jpg" alt="" />
                <img src="/images/v-lot.jpg" alt="" />
                <img className='current' src="/images/v-lot.jpg" alt="" />
                <img src="/images/v-lot.jpg" alt="" />
                <img src="/images/v-lot.jpg" alt="" />
                <img src="/images/v-lot.jpg" alt="" />
            </div>

            <Line mode={'vertical'}/>

            <div className="preview_lot">

                <div className={`status color${statusid}`} style={{background: '#1E3F05'}}></div>

                <MainSlider main={main} photos={['1', '2', '3']}/>

                <HorizontalSlider horiz={horiz} photos={['1', '2', '3']}/>

                <Button mode={'full'}>
                    <img src="/icons/Vimeo.svg" alt="" />
                </Button>
            </div>
        </div>
    );
};

export default Preview;