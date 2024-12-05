import React from 'react';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';

const TabelFilters = () => {
    return (
        <div className='table_filters'>

            <div className="button_flex">
                <Button mode={'small'}>50</Button>
                <Button mode={'small'}>100</Button>
                <Button mode={'small'}>150</Button>
            </div>

            <Input 
                mode={'grey'}
                placeholder={'Your number'}
                maxWidth={'202'}
            />

            <Button mode={'blue_lite uppercase full blue_lite'}>Show</Button>
        </div>
    );
};

export default TabelFilters;