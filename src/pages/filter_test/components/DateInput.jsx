import React from 'react';

const DateInput = ({change, lastInputRef, disabled, value}) => {
    return (
        <div style={{marginRight: '5px', display: 'flex'}}>
            <input
                ref={lastInputRef}
                placeholder={'__.__._____'}
                style={{width: '80px'}}
                type="text"
                value={value} 
                onChange={change}
                disabled={disabled}
            />
        </div>
    );
};

export default DateInput;