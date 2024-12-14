import React, { useEffect, useRef, useState } from 'react';
import Line from '../../../components/line/Line';
import Button from '../../../components/button/Button';
import Api from '../../../utils/Api';
import MainSlider from './MainSlider';
import HorizontalSlider from './HorizontalSlider';
import { NavLink } from 'react-router-dom';
import VerticalLots from './VerticalLots';

const Preview = ({stockNumber, idPhoto, photos, statusid}) => {

    const main = useRef(null)
    const horiz = useRef(null)

    useEffect(() => {

        if(main.current && horiz.current) {
            main.current.sync(horiz.current.splide)
        }

    }, [main, horiz]);

    return (
        <div className="preview">
            
            <VerticalLots stockNumber={stockNumber}/>

            <Line mode={'vertical'}/>

            <div className="preview_lot">

                <div className={`status color${statusid}`} style={{background: '#1E3F05'}}></div>

                <MainSlider main={main} photos={photos}/>

                <HorizontalSlider horiz={horiz} photos={photos}/>

                <Button mode={'full'}>
                    <img src="/icons/Vimeo.svg" alt="" />
                </Button>
            </div>
        </div>
    );
};

export default Preview;