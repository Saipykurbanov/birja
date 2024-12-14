import React from 'react';
import Button from '../../../../components/button/Button';
import TableCheckBox from './TableCheckBox';

const TableTab = ({ mode, isShow, setIsShow, saveShowFilters }) => {
    return (
        <div className={`table_tab ${mode}`}>
            <h3>Setting up data display</h3>

            <div className="check_box_container">
                <TableCheckBox isShow={isShow} name={'stock'} setIsShow={setIsShow} label={'Stock qr'}/>
                <TableCheckBox isShow={isShow} name={'authority'} setIsShow={setIsShow} label={'Authority'}/>
                <TableCheckBox isShow={isShow} name={'media'} setIsShow={setIsShow} label={'Media'}/>
                <TableCheckBox isShow={isShow} name={'metal'} setIsShow={setIsShow} label={'Metal'}/>
                <TableCheckBox isShow={isShow} name={'salesChanel'} setIsShow={setIsShow} label={'Sales Channel'}/>
                {/* <TableCheckBox isShow={isShow} name={''} setIsShow={setIsShow} label={'Nominal'}/> */}
                <TableCheckBox isShow={isShow} name={'lot'} setIsShow={setIsShow} label={'Lot'}/>
                <TableCheckBox isShow={isShow} name={'description'} setIsShow={setIsShow} label={'Description'}/>
                <TableCheckBox isShow={isShow} name={'category'} setIsShow={setIsShow} label={'Category'}/>
                <TableCheckBox isShow={isShow} name={'location'} setIsShow={setIsShow} label={'Location'}/>
                <TableCheckBox isShow={isShow} name={'region'} setIsShow={setIsShow} label={'Region'}/>
                <TableCheckBox isShow={isShow} name={'date'} setIsShow={setIsShow} label={'Date'}/>
                <TableCheckBox isShow={isShow} name={'cityMint'} setIsShow={setIsShow} label={'City/Mint'}/>
                <TableCheckBox isShow={isShow} name={'status'} setIsShow={setIsShow} label={'Status'}/>
            </div>

            <Button callback={saveShowFilters} mode={'uppercase blue_lite bold full'}>Save</Button>
        </div>
    );
};

export default TableTab;