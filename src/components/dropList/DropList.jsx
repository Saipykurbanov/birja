import React, { useEffect, useState } from 'react';
import './css/drop_list.css';


const DropList = ({value, callback, list, label, mode, field}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropList = (e) => {
        e.stopPropagation()
        if(isOpen) {
            return setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    const closeDropList = () => {
        setIsOpen(false)
    }

    useEffect(() => {

        window.addEventListener('click', closeDropList)

        return () => {
            window.removeEventListener('click', closeDropList)
        }

    }, [])

    return (
        <div className='drop_list_container'>
            <label title={label} htmlFor=""><span>{label}</span></label>
            <div className={`drop_list_field`}>
                <button onClick={toggleDropList}>
                    <p>{value || '-'}</p>
                    <img src="/icons/chev_down.svg" alt="" />
                </button>

                {isOpen ? <div className={`drop_list ${mode}`}>
                    <p>{value || '-'}</p>
                    <div className="list">
                        {list?.map((el, i) => (
                            el === value ? <></>:<div key={i} className="list_item" onClick={() => callback(el, field)}>{el}</div>
                        ))}
                        {value !== '' ?
                            <div className="list_item" onClick={() => callback('', field)}>-</div>
                        :<></>}
                    </div>
                </div>:<></>}

            </div>
        </div>
    );
};

export default DropList;