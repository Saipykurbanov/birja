import React from 'react';

const DateInput = ({placeholder, change, el, field, i, lastInputRef, disabled}) => {
    return (
        <div style={{marginRight: '5px', display: 'flex'}}>
            <input
                ref={lastInputRef}
                placeholder={placeholder}
                style={{width: `${el.type === 'Range' ? '19ch' : '9ch'}`}}
                type="text"
                value={el[field]} 
                onChange={(e) => change(i, e)}
                disabled={disabled}
            />;
        </div>
    );
};

export default DateInput;