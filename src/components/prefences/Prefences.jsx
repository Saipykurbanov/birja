import React, { useEffect, useState } from 'react';
import './css/prefences.css';
import Language from './componets/Language';
import Currency from './componets/Currency';
import Store from '../../utils/Store';


const Prefences = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [tab, setTab] = useState(1)

    Store.useListener('prefences', (data) => {
        setIsOpen(data)
        document.body.style.overflow = 'hidden'
    })

    const close = () => {
        setIsOpen(false)
        document.body.style.overflow = 'visible'
    }

    useEffect(() => {

        window.addEventListener('click', close)

        return () => {
            window.removeEventListener('click', close)
        }

    }, [])

    if (!isOpen) return false

    return (
        <div className='prefences_wrapper'>
            <div className="prefences" onClick={(e) => e.stopPropagation()}>
                <div className="prefences_header">
                    <div className="title">
                        <h2>Select your preferences</h2>
                        <button onClick={close}>
                            <img src="/icons/cross.svg" alt="" />
                        </button>
                    </div>
                    <div className="tabs">
                        <div className={`tab_item ${tab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>Language</div>
                        <div className={`tab_item ${tab === 2 ? 'active' : ''}`} onClick={() => setTab(2)}>Currency</div>
                    </div>

                </div>
                <div className="tabs_window">
                    <Language tab={tab}/>
                    <Currency tab={tab}/>
                </div>
            </div>
        </div>
    );
};

export default Prefences;