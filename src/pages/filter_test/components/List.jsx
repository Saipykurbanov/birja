import React from 'react';

const List = ({open, param, callback, last, list, getList}) => {

    if(!open) return null

    return (
        <div className="list_block">
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
                            <p key={i} onClick={el === 'Apply filter' ? getList : () => callback(param, el)}>{el}</p>
                        ))}
                    </div>
                :null
            }
        </div>
    );  
};

export default List;