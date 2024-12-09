import React from 'react';
import Line from '../../../components/line/Line';
import Button from '../../../components/button/Button';

const Preview = () => {
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

                <div className="status" style={{background: '#1E3F05'}}></div>
                <div className="main_window">
                    <img src="/images/main.jpg" alt="" />
                </div>

                <div className="lot_images">
                    <img src="/images/v-lot.jpg" alt="" />
                    <img src="/images/v-lot.jpg" alt="" />
                    <img src="/images/v-lot.jpg" alt="" />
                    <img src="/images/v-lot.jpg" alt="" />
                    <img src="/images/v-lot.jpg" alt="" />
                </div>

                <Button mode={'full'}>
                    <img src="/icons/Vimeo.svg" alt="" />
                </Button>
            </div>
        </div>
    );
};

export default Preview;