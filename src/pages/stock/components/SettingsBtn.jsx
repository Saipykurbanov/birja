import React from 'react';
import Store from '../../../utils/Store';

const SettingsBtn = () => {

    const openFilterPanel = (e) => {
        e.stopPropagation()
        document.body.className = 'hidden'
        Store.setListener('open_filter_panel', prev => prev = true)
    }

    return (
        <img src={'./icons/settings.svg'} alt="" className="settings" onMouseDown={(e) => openFilterPanel(e)}/>
    );
};

export default SettingsBtn;