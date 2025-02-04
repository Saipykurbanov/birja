import React, { useState } from 'react';

const List = ({open, param, callback, last, list}) => {

    if(!open) return null

    return (
        <>
            {param == 3 
                ?list[3]?.[last]?.length
                    ?<div className="list">
                        {list[3][last].map((el, i) => (
                            <p key={i} onClick={() => callback(3, el)}>{el}</p>
                        ))}
                    </div>
                    :null
                :list[param]?.length 
                    ?<div className="list">
                        {list[param].map((el, i) => (
                            <p key={i} onClick={() => callback(param, el)}>{el}</p>
                        ))}
                    </div>
                :null
            }
        </>
    );  
};

export default List;