import React from 'react';
import { dateList, range, rangeList } from '../allLists';

const List = ({open, param, callback, last, list, getList}) => {

    if(!open) return null

    if(param == 3) {
        return (
            <div className="list_block">
                {list[3]?.[last]?.length
                    ?<div className="list">
                        {list[3][last].map((el, i) => (
                            <p key={i} onClick={() => callback(3, el)}>{el}</p>
                        ))}
                    </div>
                    :null
                }
            </div>
        )
    } else if (param == 3 && (rangeList.includes(last) || dateList.includes(last))) {
        return (
            <div className="list_block">
                <div className="list">
                    {range.map((el, i) => (
                        <p key={i} onClick={() => callback(3, el)}>{el}</p>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="list_block">
                <div className="list">
                    {list[param].map((el, i) => (
                        <p key={i} onClick={el === 'Apply filter' ? getList : () => callback(param, el)}>{el}</p>
                    ))}
                </div>
            </div>
        )
    }
};

export default List;