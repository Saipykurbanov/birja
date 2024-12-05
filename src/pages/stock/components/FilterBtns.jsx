import React from 'react';
import Button from '../../../components/button/Button';

const FilterBtns = () => {
    return (
        <div className='filter_buttons'>
            <Button mode={'full uppercase brown white'}>Total 310</Button>
            <Button mode={'full uppercase blue2 white'}>Free 310</Button>
            <Button mode={'full uppercase burgundy white'}>Progress 310</Button>
            <Button mode={'full uppercase green2 white'}>Ready 310</Button>
            <Button mode={'full uppercase violet white'}>Sold 310</Button>
            <img src={'./icons/settings.svg'} alt="" className="settings" />
        </div>
    );
};

export default FilterBtns;