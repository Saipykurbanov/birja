import React, { useEffect, useRef, useState } from 'react';
import Line from '../../../components/line/Line';
import Button from '../../../components/button/Button';
import Api from '../../../utils/Api';
import MainSlider from './MainSlider';
import HorizontalSlider from './HorizontalSlider';
import { NavLink } from 'react-router-dom';

const Preview = ({stockNumber, idPhoto, photos, statusid}) => {

    const main = useRef(null)
    const horiz = useRef(null)
    const [coins, setCoins] = useState([])

    useEffect(() => {

        // (async () => {

        //     let res = await Api.asyncGet('api/coins')

        //     if(res !== 'error') {
        //         let index = res.findIndex(item => item.stockNumber === stockNumber)
        //         setCoins(res.slice(index - 3, index + 4))
        //     }

        // })()

        if(main.current && horiz.current) {
            main.current.sync(horiz.current.splide)
        }

    }, [main, horiz]);

    return (
        <div className="preview">
            
            <div className="vertical_lots">
                {coins?.length ?
                    coins.map((el, i) => (
                        <NavLink key={i} to={`/detail/${el.stockNumber}`}>
                            <img className={`${stockNumber === el.stockNumber ? 'current' : ''}`} src={`${Api.url2}20000/${idPhoto}`} alt="" />
                        </NavLink>
                    ))
                :<></>}
            </div>

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