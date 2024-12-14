import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Api from '../../../utils/Api';


const MainSlider = ({main, photos}) => {
    return (
        <div className='main_window'>
            <Splide 
                ref={main}
                options={ {
                rewind       : true,
                gap          : '5px',
                autoplay     : false,
                autoWidth    : true,
                autoHeight   : true,
                perPage      : 1,
                perMove: 1,
                padding      : '0px',
                speed        : 1000,
                arrows       : true,
                drag: true,
                pagination: false,
                breakpoints: {
                    768: {
                        arrows: false,
                    }
                }
            } } 
            className='main_splider'
            aria-label="">
                
                {photos?.length && photos instanceof Array ? 
                    photos?.map((el) => (
                        <SplideSlide>
                            <img src={`${Api.url2}20000/${el}`} alt="" />
                        </SplideSlide>
                    ))
                :<img src='/images/noimage.jpeg' alt=''/>}
            </Splide>
        </div>
    );
};

export default MainSlider;