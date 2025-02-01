import React, { useEffect, useRef, useState } from 'react';

const Input = ({lastInputRef, change, el, i}) => {

    const spanRef = useRef(null);
    const [inputWidth, setInputWidth] = useState(1);

    useEffect(() => {

        if (spanRef.current) {
            setInputWidth(spanRef.current.offsetWidth + 5);
        }

    }, [el[Object.keys(el)[1]]]);

    return (
        <div style={{ display: "flex", position: "relative", marginRight: '5px' }}>
            <span ref={spanRef} style={{ 
                position: "absolute", 
                visibility: "hidden", 
                whiteSpace: "pre"
            }}>
                {el[Object.keys(el)[1]] || " "} 
            </span>
            <input 
                ref={lastInputRef}
                type="text"
                value={el[Object.keys(el)[1]]}
                onChange={(e) => change(i, Object.keys(el)[1], e.target.value)}
                style={{ width: inputWidth, minWidth: "10px" }}
            />;
        </div>
    );
};

export default Input;