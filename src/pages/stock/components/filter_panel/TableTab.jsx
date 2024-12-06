import React from 'react';
import Button from '../../../../components/button/Button';
import TableCheckBox from './TableCheckBox';

const TableTab = ({ mode }) => {
    return (
        <div className={`table_tab ${mode}`}>
            <h3>Setting up data display</h3>

            <div className="check_box_container">
                <TableCheckBox label={'Stock qr'}/>
                <TableCheckBox label={'Authority'}/>
                <TableCheckBox label={'Media'}/>
                <TableCheckBox label={'Metal'}/>
                <TableCheckBox label={'Sales Channel'}/>
                <TableCheckBox label={'Nominal'}/>
                <TableCheckBox label={'Lot'}/>
                <TableCheckBox label={'Description'}/>
                <TableCheckBox label={'Category'}/>
                <TableCheckBox label={'Location'}/>
                <TableCheckBox label={'Region'}/>
                <TableCheckBox label={'Date'}/>
                <TableCheckBox label={'City/Mint'}/>
                <TableCheckBox label={'Status'}/>
            </div>

            <Button mode={'uppercase blue_lite bold full'}>Save</Button>
        </div>
    );
};

export default TableTab;