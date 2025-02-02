import React, { useEffect, useRef, useState } from 'react';

const Input = ({lastInputRef, change, el, i, field, disabled}) => {

    const spanRef = useRef(null);
    const [inputWidth, setInputWidth] = useState(1);

    useEffect(() => {

        if (spanRef.current) {
            setInputWidth(spanRef.current.offsetWidth + 5);
        }

    }, [el[field]]);

    return (
        <div style={{ display: "flex", position: "relative", marginRight: '5px' }}>
            <span ref={spanRef} style={{ 
                position: "absolute", 
                visibility: "hidden", 
                whiteSpace: "pre"
            }}>
                {el[field] || " "} 
            </span>
            <input 
                ref={lastInputRef}
                type="text"
                value={el[field]}
                onChange={(e) => change(i, field, e.target.value)}
                style={{ width: inputWidth, minWidth: "10px" }}
                disabled={disabled}
            />;
        </div>
    );
};

export default Input;