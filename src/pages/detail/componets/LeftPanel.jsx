import React, { useEffect, useState } from 'react';
import Input from '../../../components/input/Input';
import Line from '../../../components/line/Line';
import Button from '../../../components/button/Button';
import Calendar from './Calendar';
import { useParams } from 'react-router-dom';
import Api from '../../../utils/Api';
import useSales from '../hooks/useSales';

const LeftPanel = ({tab}) => {

    const sales = useSales()

    return (
        <div className={`left_panel ${tab === 1 ? 'open' : ''}`}>

            <Line mode={'mob'}/>

            <Calendar currentDate1={sales.info.entryDate} currentDate2={sales.info.outDate} change={sales.change}/>

            <Line />

            <div className="a">
                <Input type={'text'} label={'CONSIGNER'} />
                <Input type={'text'} label={'CONSIGNMENT'} value={sales.info.consigment} callback={(e) => sales.change(e.target.value, 'consigment')}/>
                <Input type={'text'} label={'COMMISSION'} value={sales.info.commission} callback={(e) => sales.change(e.target.value, 'commission')}/>
                <Input type={'text'} label={'STARTING PRICE'} />
                <Input type={'text'} label={'ESTIMATE'} value={sales.info.estimate} callback={(e) => sales.change(e.target.value, 'estimate')}/>
                <Input type={'text'} label={'RESERVE'} value={sales.info.reserve} callback={(e) => sales.change(e.target.value, 'reserve')}/>
            </div>
            <div className="b">
                <Input type={'text'} label={'HAMMER'} value={sales.info.hammer} callback={(e) => sales.change(e.target.value, 'hammer')}/>
                <Input type={'text'} label={'PAYMENT'} value={sales.info.payment} callback={(e) => sales.change(e.target.value, 'payment')}/>
            </div>

            <Line />

            <div className="b">
                <Input type={'text'} label={'BAYER'} value={sales.info.buyerId} callback={(e) => sales.change(e.target.value, 'buyerId')}/>
                <Input type={'text'} label={'INVOICE'} />
                <Input type={'text'} label={'COMMISSION'} value={sales.info.commission} callback={(e) => sales.change(e.target.value, 'commission')}/>
            </div>

            <div className="c">
                <Input type={'text'} label={'SHIPPING'} value={sales.info.shipping} callback={(e) => sales.change(e.target.value, 'shipping')}/>
                <Input type={'text'} label={'INSURANCE'} />
                <Input type={'text'} label={'EXTRAS'} value={sales.info.extras} callback={(e) => sales.change(e.target.value, 'extras')}/>
                <Input type={'text'} label={'PAYMENT'} value={sales.info.payment} callback={(e) => sales.change(e.target.value, 'payment')}/>
            </div>
            <Line />
            <div className="c">
                <Input type={'text'} label={'ASQUIRED'} value={sales.info.asquired} callback={(e) => sales.change(e.target.value, 'asquired')}/>
                <Input type={'text'} label={'INVOICE'} />
                <Input type={'text'} label={'SOLD'} />
                <Input type={'text'} label={'INVOICE'} />
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

            <Input type={'text'} label={'FREE TEXT'} value={sales.info.freeText} callback={(e) => sales.change(e.target.value, 'freeText')}/>
        </div>
    );
};

export default LeftPanel;