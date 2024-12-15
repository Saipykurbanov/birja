import React from 'react';

const Currency = ({tab}) => {
    return (
        <div className={`tabs_window_item ${tab === 2 ? 'active' : ''}`}>
            <div className="currency_item">
                <div className="tw_item active">United State Dollar</div>
                <div className="tw_item grey">USD - US$</div>
            </div>
            <div className="currency_item">
                <div className="tw_item">Российский рубль</div>
                <div className="tw_item grey">RUB - ₽</div>
            </div>
            <div className="currency_item">
                <div className="tw_item">United Arab Emirates Dirham</div>
                <div className="tw_item grey">AED - AED</div>
            </div>
            <div className="currency_item">
                <div className="tw_item">Chinese Renminbi Yuan</div>
                <div className="tw_item grey">CNY - CN¥</div>
            </div>
            <div className="currency_item">
                <div className="tw_item">Euro</div>
                <div className="tw_item grey">EUR - €</div>
            </div>
        </div>
    );
};

export default Currency;