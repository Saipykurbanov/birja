import React from 'react';
import Line from '../../../components/line/Line';
import Button from '../../../components/button/Button';
import Api from '../../../utils/Api';

const Preview = ({idPhoto, photos, statusid}) => {
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
                <div className="main_window">
                    <img src={`${Api.url2}20000/${idPhoto}`} alt="" />
                </div>

                <div className="lot_images">
                    {photos?.length ? 
                        photos.map((el) => (
                            <img src={`${Api.url2}20000/${el}`} alt="" />
                        ))
                    :<></>}
                </div>

                <Button mode={'full'}>
                    <img src="/icons/Vimeo.svg" alt="" />
                </Button>
            </div>
        </div>
    );
};

export default Preview;