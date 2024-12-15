import React from 'react';
import Button from '../../../components/button/Button';
import SettingsBtn from './SettingsBtn';

const FilterBtns = () => {
    return (
        <div className='filter_buttons'>
            <Button mode={'full uppercase brown white bold'}>Total 310</Button>
            <Button mode={'full uppercase blue2 white bold'}>Free 310</Button>
            <Button mode={'full uppercase burgundy white bold'}>Progress 310</Button>
            <Button mode={'full uppercase green2 white bold'}>Ready 310</Button>
            <Button mode={'full uppercase violet white bold'}>Sold 310</Button>
            
            <SettingsBtn />
        </div>
    );
};

export default FilterBtns;