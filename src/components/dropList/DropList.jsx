import React, { useEffect, useState } from 'react';
import './css/drop_list.css';


const DropList = ({disabled, value, callback, list, label, mode, field}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        if(!disabled) {
            setIsFocused(true);
        }
    };
  
    const handleBlur = () => {
      setIsFocused(false); 
    };

    const toggleDropList = (e) => {
        e.stopPropagation()
        if(disabled) {
            return
        }
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
            <div className={`drop_list_field ${disabled ? 'disabled' : ''} ${isFocused && !disabled ? 'focus' : ''}`} onDoubleClick={toggleDropList} onFocus={handleFocus} onBlur={handleBlur}>
                <div className={`field_container`}  >
                    <input disabled={disabled} type="text" value={value} onChange={(e) => callback(e.target.value, field)}/>
                    <button><img src="/icons/chev_down.svg" alt="" /></button>
                </div>

                <div className={`drop_list ${mode} ${isOpen ? 'open' : ''}`}>
                    <p>{value || '-'}</p>
                    <div className="list">
                        {list?.map((el, i) => (
                            el === value ? <></>:<div key={i} className="list_item" onClick={() => callback(el, field)}>{el}</div>
                        ))}
                        {value !== '' ?
                            <div className="list_item" onClick={() => callback('', field)}>-</div>
                        :<></>}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DropList;