import React, { useEffect, useRef } from 'react';

const DateInput = ({change, disabled, value, type}) => {

    const date = useRef()

    useEffect(() => {
        if(!disabled && type === 'min') {
            date.current?.focus();
        }
    }, [disabled])

    return (
        <div style={{marginRight: '5px', display: 'flex'}}>
            <input
                ref={date}
                placeholder={'__.__._____'}
                style={{width: '80px'}}
                type="text"
                value={value} 
                onChange={change}
                disabled={disabled}
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
};

export default DateInput;