import React from 'react';

const TableCheckBox = ({ label, isShow, name, setIsShow }) => {

    const changeShow = () => {
        setIsShow(prev => ({...prev, [name]: prev[name] ? false : true}))
    }

    return (
        <div className='table_check_box' onClick={changeShow}>
            <input type="checkbox" className={isShow[name] ? 'active' : ''}/>
            <span>{label}</span>
        </div>
    );
};

export default TableCheckBox;