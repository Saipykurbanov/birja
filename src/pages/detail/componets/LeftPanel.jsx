import React from 'react';
import Input from '../../../components/input/Input';
import Line from './Line';
import Button from '../../../components/button/Button';
import Calendar from './Calendar';
import Preview from './Preview';

const LeftPanel = () => {
    return (
        <div className='left_panel'>
            
            <Preview />

            <Line />

            <Calendar />

            <Line />

            <div className="a">
                <Input type={'text'} label={'CONSIGNER'}/>
                <Input type={'text'} label={'CONSIGNMENT'}/>
                <Input type={'text'} label={'COMMISSION'}/>
                <Input type={'text'} label={'STARTING PRICE'}/>
                <Input type={'text'} label={'ESTIMATE'}/>
                <Input type={'text'} label={'RESERVE'}/>
            </div>
            <div className="b">
                <Input type={'text'} label={'HAMMER'}/>
                <Input type={'text'} label={'PAYMENT'}/>
            </div>

            <Line />

            <div className="b">
                <Input type={'text'} label={'BAYER'}/>
                <Input type={'text'} label={'INVOICE'}/>
                <Input type={'text'} label={'COMMISSION'}/>
            </div>

            <div className="c">
                <Input type={'text'} label={'SHIPPING'}/>
                <Input type={'text'} label={'INSURANCE'}/>
                <Input type={'text'} label={'EXTRAS'}/>
                <Input type={'text'} label={'PAYMENT'}/>
            </div>
            <Line />
            <div className="c">
                <Input type={'text'} label={'ASQUIRED'}/>
                <Input type={'text'} label={'INVOICE'}/>
                <Input type={'text'} label={'SOLD'}/>
                <Input type={'text'} label={'INVOICE'}/>
            </div>

            <div className="b button_block">
                <Button mode={'full'}>
                    AUCTION
                </Button>
                <Button mode={'full'}>
                    ONLINE
                </Button>
                <Button mode={'blue full'}>
                    STORE
                </Button>
            </div>

            <Input type={'text'} label={'FREE TEXT'}/>
        </div>
    );
};

export default LeftPanel;