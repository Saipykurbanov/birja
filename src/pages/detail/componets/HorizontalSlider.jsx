import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Api from '../../../utils/Api';

const HorizontalSlider = ({horiz, photos}) => {
    return (
        <div className="lot_images">
             <Splide 
                ref={horiz}
                options={ {
                rewind       : true,
                gap          : '6px',
                autoWidth    : true,
                autoHeight   : true,
                padding      : '0px',
                speed        : 1000,
                arrows       : false,
                drag: true,
                pagination: false,
                isNavigation: true,
                breakpoints: {
                    768: {
                        arrows: false,
                    }
                }
            } } 
            className='horiz_splider'
            aria-label="">
                
                {photos?.length && photos instanceof Array ? 
                    photos.map((el) => (
                        <SplideSlide>
                            <img src={`${Api.url2}20000/${el}`} alt="" />
                        </SplideSlide>
                    ))
                :<></>}
            </Splide>
        </div>
    );
};

export default HorizontalSlider;