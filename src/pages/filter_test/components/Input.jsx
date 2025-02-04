import React, { useEffect, useRef, useState } from 'react';

const Input = ({change, disabled, placeholder, value}) => {

    const spanRef = useRef(null);
    const input = useRef(null)
    const [inputWidth, setInputWidth] = useState(1);

    useEffect(() => {

        if (spanRef.current) {
            setInputWidth(spanRef.current.offsetWidth + 5);
        }

    }, [value]);

    useEffect(() => {

        if(!disabled) {
            input.current?.focus();
        }

    }, [disabled])

    return (
        <div style={{ display: "flex", position: "relative" }}>
            <span ref={spanRef} style={{ 
                position: "absolute", 
                visibility: "hidden", 
                whiteSpace: "pre"
            }}>
                {value || " "} 
            </span>
            <input 
                ref={input}
                placeholder={placeholder}
                type="text"
                value={value}
                onChange={change}
                style={{ width: inputWidth, minWidth: "10px" }}
                disabled={disabled}
                onClick={(e) => e.stopPropagation()}
                
            />
        </div>
    );
};

export default Input;