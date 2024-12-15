import React, { useEffect, useRef, useState } from 'react';
import Line from '../../../../components/line/Line';
import Button from '../../../../components/button/Button';
import Store from '../../../../utils/Store';
import MainSlider from '../preview/MainSlider';
import HorizontalSlider from '../preview/HorizontalSlider';
import VerticalLots from '../preview/VerticalLots';

const Preview = ({statusid}) => {

    const main = useRef(null)
    const horiz = useRef(null)
    const [photos, setPhotos] = useState([])
    Store.useListener('previewPhotos', setPhotos)

    useEffect(() => {

        if(main.current && horiz.current) {
            main.current.sync(horiz.current.splide)
        }

    }, [main, horiz]);

    return (
        <div className="preview">
            
            <VerticalLots />

            <Line mode={'vertical'}/>

            <div className="preview_lot">

                <div className={`status color${statusid}`}></div>

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