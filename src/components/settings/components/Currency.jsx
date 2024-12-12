import React, { useState } from 'react';

const Currency = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        if(isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    return (
        <div className='accordeon'>
            <div className="title" onClick={toggle}>
                EUR - €
                <img src="/icons/arrow_down.svg" className={`arrow ${isOpen ? 'active' : ''}`} alt="" />
            </div>
            <div className={`accordeon_list ${isOpen ? 'open' : ''}`}>
                <div className="accord_wrapper">
                    <div className="accord_item active">EUR - €</div>
                    <div className="accord_item">RUB - ₽</div>
                    <div className="accord_item">USD - US$</div>
                    <div className="accord_item">AED - AED</div>
                    <div className="accord_item">CNY - CN¥</div>
                </div>
            </div>
        </div>
    );
};

export default Currency;