import React from 'react';
import Input from '../../../components/input/Input';
import DropList from '../../../components/dropList/DropList';
import Button from '../../../components/button/Button';
import TextArea from '../../../components/textarea/TextArea';

const RightPanel = () => {
    return (
        <div className='right_panel'>
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
                <Input type={'text'} label={'SALE CHANNEL'}/>
                <Input type={'text'} label={'LOT'}/>
            </div>

            <div className="b">
                <DropList label={'CATEGORY'} value={'Category 1'} list={['Category 1', 'Category 2']}/>
                <DropList label={'REGION'} value={'Region 1'} list={['Region 1', 'Region 2']} mode={'right'}/>
                <DropList label={'DYNASTY & SO'} value={'Authority 1'} list={['Category 1', 'Category 2']}/>
                <DropList label={'AUTHORITY'} value={'Authority 1'} list={['Category 1', 'Category 2']} mode={'right'}/>
                <DropList label={'CITY/MINT'} value={'City/Mint 1'} list={['Category 1', 'Category 2']}/>
                <Input type={'text'} label={'DATE'}/>
                <Input type={'text'} label={'NOMINAL'}/>
                <DropList label={'METAL'} value={'AV'} list={['Category 1', 'Category 2']} mode={'right'}/>
            </div>

            <div className="c">
                <Input type={'text'} label={'DIAMETR'}/>
                <Input type={'text'} label={'WEIGHT'}/>
                <Input type={'text'} label={'HEIGHT'}/>
                <Input type={'text'} label={'ORIGIN'}/>
                <Input type={'text'} label={'HS CODE'}/>
            </div>

            <div className="c">
                <Input type={'text'} label={'REFERENCE 1'}/>
                <Input type={'text'} label={'REFERENCE 1'}/>
                <Input type={'text'} label={'REFERENCE 1'}/>
                <Input type={'text'} label={'REFERENCE 1'}/>
                <Input type={'text'} label={'REFERENCE 1'}/>
            </div>

            <div className="buttons">
                <Button mode={'blue_lite full'}>
                    HIGHLIGHTS
                </Button>
                <Button mode={'full brown white'}>
                    WITHDRAW
                </Button>
            </div>

            <Input type={'text'} label={'TITLE'}/>

            <Input type={'text'} mode={'mt'} label={'SHORT DESCRIPTION'}/>

            <TextArea />
        </div>
    );
};

export default RightPanel;