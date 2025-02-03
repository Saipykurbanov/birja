import React from 'react';
import Input from './Input';
import DateInput from './DateInput';

const FieldsLogic = ({hook, el, i, field, disabled}) => {

    if(hook.inputList.includes(field)) {
        return <><Input disabled={disabled} lastInputRef={hook.lastInputRef} change={(e) => hook.change(i, field, e.target.value)} value={el[field]}/><div className='close_head'>;</div></>
    }

    if(field === 'Date') {
        if(el.type === 'By default') {

            return <>
                <DateInput 
                    disabled={disabled}
                    change={(e) => hook.changeDate(i, e)}
                    lastInputRef={hook.lastInputRef}
                    value={el[field]}
                /><div className='close_head'>;</div>
            </>

        } else if(el.type === 'Range' ) {

            return <div className="range">
                <DateInput 
                    disabled={disabled}
                    change={(e) => hook.changeDateRange(i, e, 'min')}
                    lastInputRef={hook.lastInputRef}
                    value={el[field].min}
                />
                <span>-</span>
                <DateInput 
                    disabled={disabled}
                    change={(e) => hook.changeDateRange(i, e, 'max')}
                    lastInputRef={hook.lastInputRef}
                    value={el[field].max}
                /><div className='close_head'>;</div>
            </div>

        }
    }

    if(hook.rangeList.includes(field)) {
        if(el.type === 'By default') {
            return <><Input disabled={disabled} lastInputRef={hook.lastInputRef} change={(e) => hook.change(i, field, e.target.value)} value={el[field]}/><div className='close_head'>;</div></>
        }

        if(el.type === 'Range') {
            return <div className="range">
                <Input placeholder={'__'} disabled={disabled} lastInputRef={hook.lastInputRef} change={(e) => hook.changeRange(i, field, e.target.value, 'min')} value={el[field].min}/>
                <span>-</span>
                <Input placeholder={'__'} disabled={disabled} change={(e) => hook.changeRange(i, field, e.target.value, 'max')} value={el[field].max}/><div className='close_head'>;</div>
            </div>
        }
    }

    return <div className="txt value">{el[field]};</div>
};

export default FieldsLogic;