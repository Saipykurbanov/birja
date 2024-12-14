import React, { useState } from 'react';

const Lamguages = () => {

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
                Language
                <img src="/icons/arrow_down.svg" className={`arrow ${isOpen ? 'active' : ''}`} alt="" />
            </div>
            <div className={`accordeon_list ${isOpen ? 'open' : ''}`}>
                <div className="accord_wrapper">
                    <div className="accord_item active">English</div>
                    <div className="accord_item">Deutsch</div>
                    <div className="accord_item">Français</div>
                    <div className="accord_item">Português</div>
                    <div className="accord_item">Italiano</div>
                    <div className="accord_item">Español</div>
                    <div className="accord_item">中國人</div>
                    <div className="accord_item">日本語</div>
                </div>
            </div>
        </div>
    );
};

export default Lamguages;