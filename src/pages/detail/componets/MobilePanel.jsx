import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const MobilePanel = ({statusId, stockNumber}) => {

    const [isOpen, setIsOpen] = useState(false)

    const close = () => {
        setIsOpen(false)
        document.body.className = ''
    }

    const toggle = (e) => {
        e.stopPropagation()
        if(isOpen) {
            setIsOpen(false)
            document.body.className = ''
        }
        else {
            setIsOpen(true)
            document.body.className = 'hidden'
        }
    }

    useEffect(() => {

        window.addEventListener('click', close)

        return () => {
            window.removeEventListener('click', close)
        }

    }, [])


    return (
        <div className='mobile_panel'>
            <NavLink to={`/detail/${stockNumber}`}><img src="/icons/arrow_left_b.svg" alt="" /></NavLink>
            <button onClick={toggle}><img src="/icons/burger.svg" alt="" /></button>
            <NavLink to={`/detail/${stockNumber}`}><img src="/icons/arrow_right_b.svg" alt="" /></NavLink>

            <div className={`mobile_panel_popup ${isOpen ? 'open' : ''}`}>
                <div className="buttons">
                    <button className='active'>Duplicate</button>
                    <button>Delete</button>
                    <button>Print</button>
                </div>
                <div className="status_block">
                    <div className="status_item green active"></div>
                    <div className="status_item burgundy"></div>
                    <div className="status_item blue"></div>
                    <div className="status_item violet"></div>
                </div>
            </div>
        </div>
    );
};

export default MobilePanel;