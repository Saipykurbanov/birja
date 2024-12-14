import React from 'react';
import Input from '../../../../components/input/Input';
import DropList from '../../../../components/dropList/DropList';
import Button from '../../../../components/button/Button';
import TextArea from '../../../../components/textarea/TextArea';

const RightPanel = ({coin}) => {

    return (
        <div className={`right_panel ${coin.tab === 2 ? 'open' : ''}`}>
            <div className="a">
                <div className="qr">
                    <label htmlFor=""><span>STOCK</span></label>
                    <div className="stock_field">
                        <input disabled={coin.disabled} type="text" value={coin.info.stockNumber} onChange={(e) => coin.change(e.target.value, 'stockNumber')}/>
                        <div className="code">
                            <img src="/images/qr-code.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <Input disabled={coin.disabled} type={'text'} label={'SALE CHANNEL'} value={coin.info.saleChannel} callback={(e) => coin.change(e.target.value, 'saleChannel')}/>
                <Input disabled={coin.disabled} type={'text'} label={'LOT'} value={coin.info.lotNumber} callback={(e) => coin.change(e.target.value, 'lotNumber')}/>
            </div>

            <div className="b">
                <DropList disabled={coin.disabled} label={'CATEGORY'} value={coin.info.category} list={coin.categories} callback={coin.change} field={'category'}/>
                <DropList disabled={coin.disabled} label={'REGION'} value={coin.info.region} list={coin.region} mode={'right'} callback={coin.change} field={'region'}/>
                <DropList disabled={coin.disabled} label={'DYNASTY & SO'} value={coin.info.dynastyAndCo} list={coin.dynastyandco} callback={coin.change} field={'dynastyAndCo'}/>
                <DropList disabled={coin.disabled} label={'AUTHORITY'} value={coin.info.authority} list={coin.authorities} mode={'right'} callback={coin.change} field={'authority'}/>
                <DropList disabled={coin.disabled} label={'CITY/MINT'} value={coin.info.cityMint} list={coin.citymint} callback={coin.change} field={'cityMint'}/>
                <DropList disabled={coin.disabled} label={'DATE'} value={coin.info.mintCoin} list={coin.years} mode={'right'}  callback={coin.change} field={'mintCoin'}/>

                <Input disabled={coin.disabled} type={'text'} label={'NOMINAL'} value={coin.info.nominal} callback={(e) => coin.change(e.target.value, 'nominal')}/>
                <DropList disabled={coin.disabled} label={'METAL'} value={coin.info.metal} list={['Category 1', 'Category 2']} mode={'right'} callback={coin.change} field={'metal'}/>
            </div>

            <div className="c">
                <Input disabled={coin.disabled} type={'text'} label={'DIAMETR'} value={coin.info.diameterMM} callback={(e) => coin.change(e.target.value, 'diameterMM')}/>
                <Input disabled={coin.disabled} type={'text'} label={'WEIGHT'} value={coin.info.weightGr} callback={(e) => coin.change(e.target.value, 'weightGr')}/>
                <Input disabled={coin.disabled} type={'text'} label={'HEIGHT'} value={coin.info.height} callback={(e) => coin.change(e.target.value, 'height')}/>
                <Input disabled={coin.disabled} type={'text'} label={'ORIGIN'} value={coin.info.origin} callback={(e) => coin.change(e.target.value, 'origin')}/>
                <Input disabled={coin.disabled} type={'text'} label={'HS CODE'} value={coin.info.hsCode} callback={(e) => coin.change(e.target.value, 'hsCode')}/>
            </div>

            <div className="c">
                <Input disabled={coin.disabled} type={'text'} label={'REFERENCE 1'} value={coin.info.reference1} callback={(e) => coin.change(e.target.value, 'reference1')}/>
                <Input disabled={coin.disabled} type={'text'} label={'REFERENCE 1'} value={coin.info.reference2} callback={(e) => coin.change(e.target.value, 'reference2')}/>
                <Input disabled={coin.disabled} type={'text'} label={'REFERENCE 1'} value={coin.info.reference3} callback={(e) => coin.change(e.target.value, 'reference3')}/>
                <Input disabled={coin.disabled} type={'text'} label={'REFERENCE 1'} value={coin.info.reference4} callback={(e) => coin.change(e.target.value, 'reference4')}/>
                <Input disabled={coin.disabled} type={'text'} label={'REFERENCE 1'} value={coin.info.reference5} callback={(e) => coin.change(e.target.value, 'reference5')}/>
            </div>

            {coin.role === 'admin' ? 
            <div className="buttons">
                <Button mode={'blue_lite full fz22'}>
                    HIGHLIGHTS
                </Button>
                <Button mode={`full fz22 ${coin.info.statusId === 6 ? 'brown white' : ''}`} callback={coin.changeStatus}>
                    WITHDRAW
                </Button>
            </div>:<></>}

            <Input disabled={coin.disabled} type={'text'} label={'TITLE'} value={coin.info.title} callback={(e) => coin.change(e.target.value, 'title')}/>

            <Input disabled={coin.disabled} type={'text'} mode={'mt'} label={'SHORT DESCRIPTION'} value={coin.info.shortDescription} callback={(e) => coin.change(e.target.value, 'shortDescription')}/>

            <TextArea disabled={coin.disabled} label={'DESCRIPTION'} rows={13} value={coin.info.description} callback={(e) => coin.change(e.target.value, 'description')}/>
            <TextArea disabled={coin.disabled} label={'AI DESCRIPTION'} rows={7}/>
            <TextArea disabled={coin.disabled} label={'INFO'} rows={5} value={coin.info.info} callback={(e) => coin.change(e.target.value, 'info')}/>
        </div>
    );
};

export default RightPanel;