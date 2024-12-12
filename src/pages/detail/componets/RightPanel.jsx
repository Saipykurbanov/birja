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
                <Input type={'text'} label={'SALE CHANNEL'} value={coin.info.saleChannel} callback={(e) => coin.change(e, 'saleChannel')}/>
                <Input type={'text'} label={'LOT'} value={coin.info.lotNumber} callback={(e) => coin.change(e, 'lotNumber')}/>
            </div>

            <div className="b">
                <DropList label={'CATEGORY'} value={'Category 1'} list={['Category 1', 'Category 2']}/>
                <DropList label={'REGION'} value={'Region 1'} list={['Region 1', 'Region 2']} mode={'right'}/>
                <DropList label={'DYNASTY & SO'} value={'Authority 1'} list={['Category 1', 'Category 2']}/>
                <DropList label={'AUTHORITY'} value={'Authority 1'} list={['Category 1', 'Category 2']} mode={'right'}/>
                <DropList label={'CITY/MINT'} value={'City/Mint 1'} list={['Category 1', 'Category 2']}/>
                <Input type={'text'} label={'DATE'} />
                <Input type={'text'} label={'NOMINAL'} value={coin.info.nominal} callback={(e) => coin.change(e, 'nominal')}/>
                <DropList label={'METAL'} value={'AV'} list={['Category 1', 'Category 2']} mode={'right'}/>
            </div>

            <div className="c">
                <Input type={'text'} label={'DIAMETR'} value={coin.info.diameterMM} callback={(e) => coin.change(e, 'diameterMM')}/>
                <Input type={'text'} label={'WEIGHT'} value={coin.info.weightGr} callback={(e) => coin.change(e, 'weightGr')}/>
                <Input type={'text'} label={'HEIGHT'} value={coin.info.height} callback={(e) => coin.change(e, 'height')}/>
                <Input type={'text'} label={'ORIGIN'} value={coin.info.origin} callback={(e) => coin.change(e, 'origin')}/>
                <Input type={'text'} label={'HS CODE'} value={coin.info.hsCode} callback={(e) => coin.change(e, 'hsCode')}/>
            </div>

            <div className="c">
                <Input type={'text'} label={'REFERENCE 1'} value={coin.info.reference1} callback={(e) => coin.change(e, 'reference1')}/>
                <Input type={'text'} label={'REFERENCE 1'} value={coin.info.reference2} callback={(e) => coin.change(e, 'reference2')}/>
                <Input type={'text'} label={'REFERENCE 1'} value={coin.info.reference3} callback={(e) => coin.change(e, 'reference3')}/>
                <Input type={'text'} label={'REFERENCE 1'} value={coin.info.reference4} callback={(e) => coin.change(e, 'reference4')}/>
                <Input type={'text'} label={'REFERENCE 1'} value={coin.info.reference5} callback={(e) => coin.change(e, 'reference5')}/>
            </div>

            <div className="buttons">
                <Button mode={'blue_lite full'}>
                    HIGHLIGHTS
                </Button>
                <Button mode={'full brown white'}>
                    WITHDRAW
                </Button>
            </div>

            <Input type={'text'} label={'TITLE'} value={coin.info.title} callback={(e) => coin.change(e, 'title')}/>

            <Input type={'text'} mode={'mt'} label={'SHORT DESCRIPTION'} value={coin.info.shortDescription} callback={(e) => coin.change(e, 'shortDescription')}/>

            <TextArea label={'DESCRIPTION'} rows={13} value={coin.info.description} callback={(e) => coin.change(e, 'description')}/>
            <TextArea label={'AI DESCRIPTION'} rows={7}/>
            <TextArea label={'INFO'} rows={5} value={coin.info.info} callback={(e) => coin.change(e, 'info')}/>
        </div>
    );
};

export default RightPanel;