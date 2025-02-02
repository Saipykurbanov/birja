import React, { useState } from 'react';

const List = ({open, param, callback, last}) => {

    const operators = ['AND', 'OR', 'NOT']
    const parametrs = ['Categories', 'Name', 'Parametr1', 'Parametr2', 'Parametr3', 'Date']
    const values = {
        'Categories': ['Cat1', 'Cat2', 'Cat3', 'Cat4'],
        'Parametr2': ['By default', 'Range'],
        'Parametr3': ['Val1', 'Val2', 'Val3'],
        'Date': ['By default', 'Range']
    }


    const [list, setList] = useState({
        1: operators,
        2: parametrs,
        3: values
    })

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