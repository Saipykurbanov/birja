import React from 'react';
import CheckBox from './CheckBox';
import Button from '../../../../components/button/Button';

const DataTab = ({mode}) => {
    return (
        <div className={`data_tab ${mode}`}>
            <h3>Unloading data (lots) from the table</h3>

            <div className="check_box_container">
                <CheckBox label={'Stock qr'}/>
                <CheckBox label={'Authority'}/>
                <CheckBox label={'Media'}/>
                <CheckBox label={'Metal'}/>
                <CheckBox label={'Sales Channel'}/>
                <CheckBox label={'Nominal'}/>
                <CheckBox label={'Lot'}/>
                <CheckBox label={'Description'}/>
                <CheckBox label={'Category'}/>
                <CheckBox label={'Location'}/>
                <CheckBox label={'Region'}/>
                <CheckBox label={'Date'}/>
                <CheckBox label={'City/Mint'}/>
                <CheckBox label={'Status'}/>
            </div>

            <Button mode={'uppercase blue_lite bold full'}>Upload data</Button>

            <h3>Loading data (lots) from table</h3>

            <Button mode={'uppercase blue_lite bold full'}>Loading</Button>

            <div className="link_block">
                <a href="#" className="file_link">Download template cvs file</a>
                <a href="#" className="file_link">Download template xlsx file</a>
            </div>
        </div>
    );
};

export default DataTab;