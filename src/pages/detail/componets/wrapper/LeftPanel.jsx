import React from 'react';
import Input from '../../../../components/input/Input';
import Line from '../../../../components/line/Line';
import Button from '../../../../components/button/Button';
import Calendar from '../calendar/Calendar';

const LeftPanel = ({coin}) => {

    return (
        <div className={`left_panel ${coin.tab === 1 ? 'open' : ''}`}>

            <Line mode={'mob'}/>

            <Calendar currentDate1={coin.infoSales.entryDate} currentDate2={coin.infoSales.outDate} change={coin.changeSales}/>

            <Line />

            <div className="a">
                <Input type={'text'} label={'CONSIGNER'} />
                <Input type={'text'} label={'CONSIGNMENT'} value={coin.infoSales.consigment} callback={(e) => coin.changeSales(e.target.value, 'consigment')}/>
                <Input type={'text'} label={'COMMISSION'} value={coin.infoSales.commission} callback={(e) => coin.changeSales(e.target.value, 'commission')}/>
                <Input type={'text'} label={'STARTING PRICE'} />
                <Input type={'text'} label={'ESTIMATE'} value={coin.infoSales.estimate} callback={(e) => coin.changeSales(e.target.value, 'estimate')}/>
                <Input type={'text'} label={'RESERVE'} value={coin.infoSales.reserve} callback={(e) => coin.changeSales(e.target.value, 'reserve')}/>
            </div>
            <div className="b">
                <Input type={'text'} label={'HAMMER'} value={coin.infoSales.hammer} callback={(e) => coin.changeSales(e.target.value, 'hammer')}/>
                <Input type={'text'} label={'PAYMENT'} value={coin.infoSales.payment} callback={(e) => coin.changeSales(e.target.value, 'payment')}/>
            </div>

            <Line />

            <div className="b">
                <Input type={'text'} label={'BAYER'} value={coin.infoSales.buyerId} callback={(e) => coin.changeSales(e.target.value, 'buyerId')}/>
                <Input type={'text'} label={'INVOICE'} />
                <Input type={'text'} label={'COMMISSION'} value={coin.infoSales.commission} callback={(e) => coin.changeSales(e.target.value, 'commission')}/>
            </div>

            <div className="c">
                <Input type={'text'} label={'SHIPPING'} value={coin.infoSales.shipping} callback={(e) => coin.changeSales(e.target.value, 'shipping')}/>
                <Input type={'text'} label={'INSURANCE'} />
                <Input type={'text'} label={'EXTRAS'} value={coin.infoSales.extras} callback={(e) => coin.changeSales(e.target.value, 'extras')}/>
                <Input type={'text'} label={'PAYMENT'} value={coin.infoSales.payment} callback={(e) => coin.changeSales(e.target.value, 'payment')}/>
            </div>
            <Line />
            <div className="c">
                <Input type={'text'} label={'ASQUIRED'} value={coin.infoSales.asquired} callback={(e) => coin.changeSales(e.target.value, 'asquired')}/>
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

            <Input type={'text'} label={'FREE TEXT'} value={coin.infoSales.freeText} callback={(e) => coin.changeSales(e.target.value, 'freeText')}/>
        </div>
    );
};

export default LeftPanel;