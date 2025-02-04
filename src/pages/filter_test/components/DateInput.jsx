import React, { useRef } from 'react';

const DateInput = ({change, lastInputRef, disabled, value}) => {

    const ref = useRef()

    return (
        <div style={{marginRight: '5px', display: 'flex'}}>
            <input
                ref={lastInputRef || ref}
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