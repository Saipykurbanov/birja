import React from 'react';
import Input from './Input';
import DateInput from './DateInput';

const FieldsLogic = ({hook, el, i, field, disabled}) => {

    if(hook.inputList.includes(field)) {
        return <><Input disabled={disabled} change={(e) => hook.change(i, field, e.target.value)} value={el[field]} type={'min'}/><div className='close_head'>;</div></>
    }

    if(hook.dateList.includes(field)) {
        if(el.type === 'By default') {

            return <>
                <DateInput 
                    disabled={disabled}
                    change={(e) => hook.changeDate(i, e)}
                    value={el[field]}
                    type={'min'}
                /><div className='close_head'>;</div>
            </>

        } else if(el.type === 'Range' ) {

            return <div className="range">
                <DateInput 
                    disabled={disabled}
                    change={(e) => hook.changeDateRange(i, e, 'min')}
                    value={el[field].min}
                    type={'min'}
                />
                <span>-</span>
                <DateInput 
                    disabled={disabled}
                    change={(e) => hook.changeDateRange(i, e, 'max')}
                    value={el[field].max}
                /><div className='close_head'>;</div>
            </div>

        }
    }

    if(hook.rangeList.includes(field)) {
        if(el.type === 'By default') {
            return <><Input type={'min'} disabled={disabled} change={(e) => hook.change(i, field, e.target.value)} value={el[field]}/><div className='close_head'>;</div></>
        }

        if(el.type === 'Range') {
            return <div className="range">
                <Input type={'min'} placeholder={'__'} disabled={disabled} change={(e) => hook.changeRange(i, field, e.target.value, 'min')} value={el[field].min}/>
                <span>-</span>
                <Input type={'min'} placeholder={'__'} disabled={disabled} change={(e) => hook.changeRange(i, field, e.target.value, 'max')} value={el[field].max}/>
                <div className='close_head'>;</div>
            </div>
        }
    }

    return <div className="txt value">{el[field]};</div>
};

export default FieldsLogic;