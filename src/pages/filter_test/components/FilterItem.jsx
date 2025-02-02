import React from 'react';
import Input from './Input';
import DateInput from './DateInput';

const FilterItem = ({field, el, i, hook, disabled}) => {

    return (
        <div className="filter_item">

            {i > 0 ? <div className="txt logic">{el.logic}</div> :null}
            {field ? <div className="txt parametr">{field}:</div> :null}

            {hook.inputList.includes(field)
            ?<Input disabled={disabled} el={el} lastInputRef={hook.lastInputRef} change={hook.change} i={i} field={field}/>

            :field === 'Date' && el.type === 'By default' 
            ?<DateInput disabled={disabled} placeholder={'__.__.____'} change={hook.changeDate} el={el} field={field} i={i} lastInputRef={hook.lastInputRef}/>

            :field === 'Date' && el.type === 'Range' 
            ?<DateInput disabled={disabled} placeholder={'__.__.____ - __.__.____'} change={hook.changeRange} el={el} field={field} i={i} lastInputRef={hook.lastInputRef}/>

            :<div className="txt value">{el[field]};</div>}

        </div>
    );
};

export default FilterItem;