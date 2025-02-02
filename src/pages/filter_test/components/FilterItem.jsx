import React from 'react';
import Input from './Input';
import DateInput from './DateInput';
import FieldsLogic from './FieldsLogic';

const FilterItem = ({field, el, i, hook, disabled}) => {

    return (
        <div className="filter_item">

            {i > 0 ? <div className="txt logic">{el.logic}</div> :null}
            {field ? <div className="txt parametr">{field}:</div> :null}

            <FieldsLogic hook={hook} i={i} el={el} field={field} disabled={disabled}/>

        </div>
    );
};

export default FilterItem;