import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Store from '../../../../utils/Store';

const MobilePanel = ({statusId, setInWork, nullStatus, setInCheck, setInReady}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [link, setLink] = useState({
        prev: '',
        next: ''
    })

    Store.useListener('pages', (data) => {
        let nextPage = data[4]
        let prevPage = data[2]
        return setLink(prev => ({...prev, prev: prevPage?.stockNumber, next: nextPage?.stockNumber}))
    })

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
            <NavLink to={`/detail/${link.prev}`}><img src="/icons/arrow_left_b.svg" alt="" /></NavLink>
            <button onClick={toggle}><img src="/icons/burger.svg" alt="" /></button>
            <NavLink to={`/detail/${link.next}`}><img src="/icons/arrow_right_b.svg" alt="" /></NavLink>

            <div className={`mobile_panel_popup ${isOpen ? 'open' : ''}`}>
                <div className="buttons">
                    <button className='active'>Duplicate</button>
                    <button>Delete</button>
                    <button>Print</button>
                </div>
                <div className="status_block">
                    <div className={`status_item green ${statusId === 4 ? 'active' : ''}`} onClick={setInReady}></div>
                    <div className={`status_item burgundy ${statusId === 3 ? 'active' : ''}`} onClick={setInCheck}></div>
                    <div className={`status_item blue ${statusId === 2 ? 'active' : ''}`} onClick={setInWork}></div>
                    <div className={`status_item violet ${statusId === 1 ? 'active' : ''}`} onClick={nullStatus}></div>
                </div>
            </div>
        </div>
    );
};

export default MobilePanel;