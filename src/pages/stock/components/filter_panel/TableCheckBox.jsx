import React from 'react';

const TableCheckBox = ({ label }) => {
    return (
        <label htmlFor={`${label}_table`} className='table_check_box'>
            <input type="checkbox"  id={`${label}_table`}/>
            <span>{label}</span>
        </label>
    );
};

export default TableCheckBox;