import React from 'react';
import Lamguages from './components/Lamguages';
import './css/settings.css';
import Currency from './components/Currency';


const Settings = () => {

    return (
        <div className='settings'>
            <Lamguages />
            <Currency />
        </div>
    );
};

export default Settings;