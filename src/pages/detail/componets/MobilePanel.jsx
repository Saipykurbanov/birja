import React, { useEffect, useState } from 'react';

const MobilePanel = ({statusId}) => {

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
            <button><img src="/icons/arrow_left_b.svg" alt="" /></button>
            <button onClick={toggle}><img src="/icons/burger.svg" alt="" /></button>
            <button><img src="/icons/arrow_right_b.svg" alt="" /></button>

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