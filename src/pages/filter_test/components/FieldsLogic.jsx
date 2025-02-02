import React from 'react';
import Input from './Input';
import DateInput from './DateInput';

const FieldsLogic = ({hook, el, i, field, disabled}) => {

    if(hook.inputList.includes(field)) {
        return <Input disabled={disabled} el={el} lastInputRef={hook.lastInputRef} change={hook.change} i={i} field={field}/>
    }

    if(field === 'Date') {
        if(el.type === 'By default') {

            return <DateInput 
                disabled={disabled} 
                placeholder={'__.__.____'} 
                change={hook.changeDate} 
                el={el} field={field} i={i} 
                lastInputRef={hook.lastInputRef}
            />

        } else if(el.type === 'Range' ) {

            return <DateInput 
                disabled={disabled} 
                placeholder={'__.__.____ - __.__.____'} 
                change={hook.changeRange} el={el} 
                lastInputRef={hook.lastInputRef}
                field={field} i={i} 
            />

        }
    }

    if(hook.rangeList.includes(field)) {
        if(el.type === 'By default') {
            return <Input disabled={disabled} el={el} lastInputRef={hook.lastInputRef} change={hook.change} i={i} field={field}/>
        }

        if(el.type === 'Range') {
            return <></>
        }
    }

    return <div className="txt value">{el[field]};</div>
};

export default FieldsLogic;