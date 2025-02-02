import React from 'react';
import Input from './Input';

const FilterItem = ({field, el, change, inputList, i, lastInputRef}) => {
    
    return (
        <div className="filter_item">

            {i > 0 ? <div className="txt logic">{el.logic}</div> :null}
            {field ? <div className="txt parametr">{field}:</div> :null}

            {inputList.includes(field)
            ?<Input el={el} lastInputRef={lastInputRef} change={change} i={i}/>

            :field === 'Date' && el['Date'] === 'By default' 
            ?<div style={{marginRight: '5px'}}>
                <input 
                    type="text" 
                    placeholder='__.__.____'
                    value={el[field] === 'By default' ? '' : el[field]} 
                    onChange={(e) => change(i, 'Date', e.target.value)}
                />;
            </div>

            :field === 'Date' && el['Date'] === 'Range' 
            ?<>__.__.____ - __.__.____</> 

            :<div className="txt value">{el[field]};</div>}

        </div>
    );
};

export default FilterItem;