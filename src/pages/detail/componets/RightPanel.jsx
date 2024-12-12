import React from 'react';
import Input from '../../../components/input/Input';
import DropList from '../../../components/dropList/DropList';
import Button from '../../../components/button/Button';
import TextArea from '../../../components/textarea/TextArea';
import useCoin from '../hooks/useCoin';

const RightPanel = ({tab, role}) => {

    const coin = useCoin(role)

    return (
        <div className={`right_panel ${tab === 2 ? 'open' : ''}`}>
            <div className="a">
                <div className="qr">
                    <label htmlFor=""><span>STOCK</span></label>
                    <div className="stock_field">
                        <input type="text" />
                        <div className="code">
                            <img src="/images/qr-code.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <Input type={'text'} label={'SALE CHANNEL'} value={coin.info.saleChannel} callback={(e) => coin.change(e.target.value, 'saleChannel')}/>
                <Input type={'text'} label={'LOT'} value={coin.info.lotNumber} callback={(e) => coin.change(e.target.value, 'lotNumber')}/>
            </div>

            <div className="b">
                <DropList label={'CATEGORY'} value={coin.info.category} list={['Category 1', 'Category 2']} callback={coin.change} field={'category'}/>
                <DropList label={'REGION'} value={coin.info.region} list={['Region 1', 'Region 2']} mode={'right'} callback={coin.change} field={'region'}/>
                <DropList label={'DYNASTY & SO'} value={coin.info.dynastyAndCo} list={['Category 1', 'Category 2']} callback={coin.change} field={'dynastyAndCo'}/>
                <DropList label={'AUTHORITY'} value={coin.info.authority} list={['Category 1', 'Category 2']} mode={'right'} callback={coin.change} field={'authority'}/>
                <DropList label={'CITY/MINT'} value={coin.info.cityMint} list={['Category 1', 'Category 2']} callback={coin.change} field={'cityMint'}/>
                <Input type={'text'} label={'DATE'} />
                <Input type={'text'} label={'NOMINAL'} value={coin.info.nominal} callback={(e) => coin.change(e.target.value, 'nominal')}/>
                <DropList label={'METAL'} value={coin.info.metal} list={['Category 1', 'Category 2']} mode={'right'} callback={coin.change} field={'metal'}/>
            </div>

            <div className="c">
                <Input type={'text'} label={'DIAMETR'} value={coin.info.diameterMM} callback={(e) => coin.change(e.target.value, 'diameterMM')}/>
                <Input type={'text'} label={'WEIGHT'} value={coin.info.weightGr} callback={(e) => coin.change(e.target.value, 'weightGr')}/>
                <Input type={'text'} label={'HEIGHT'} value={coin.info.height} callback={(e) => coin.change(e.target.value, 'height')}/>
                <Input type={'text'} label={'ORIGIN'} value={coin.info.origin} callback={(e) => coin.change(e.target.value, 'origin')}/>
                <Input type={'text'} label={'HS CODE'} value={coin.info.hsCode} callback={(e) => coin.change(e.target.value, 'hsCode')}/>
            </div>

            <div className="c">
                <Input type={'text'} label={'REFERENCE 1'} value={coin.info.reference1} callback={(e) => coin.change(e.target.value, 'reference1')}/>
                <Input type={'text'} label={'REFERENCE 1'} value={coin.info.reference2} callback={(e) => coin.change(e.target.value, 'reference2')}/>
                <Input type={'text'} label={'REFERENCE 1'} value={coin.info.reference3} callback={(e) => coin.change(e.target.value, 'reference3')}/>
                <Input type={'text'} label={'REFERENCE 1'} value={coin.info.reference4} callback={(e) => coin.change(e.target.value, 'reference4')}/>
                <Input type={'text'} label={'REFERENCE 1'} value={coin.info.reference5} callback={(e) => coin.change(e.target.value, 'reference5')}/>
            </div>

            <div className="buttons">
                <Button mode={'blue_lite full'}>
                    HIGHLIGHTS
                </Button>
                <Button mode={'full brown white'}>
                    WITHDRAW
                </Button>
            </div>

            <Input type={'text'} label={'TITLE'} value={coin.info.title} callback={(e) => coin.change(e.target.value, 'title')}/>

            <Input type={'text'} mode={'mt'} label={'SHORT DESCRIPTION'} value={coin.info.shortDescription} callback={(e) => coin.change(e.target.value, 'shortDescription')}/>

            <TextArea label={'DESCRIPTION'} rows={13} value={coin.info.description} callback={(e) => coin.change(e.target.value, 'description')}/>
            <TextArea label={'AI DESCRIPTION'} rows={7}/>
            <TextArea label={'INFO'} rows={5} value={coin.info.info} callback={(e) => coin.change(e.target.value, 'info')}/>
        </div>
    );
};

export default RightPanel;