import React, { useEffect, useState } from 'react';
import './css/filter.css';


const Filter = () => {

    const [focus, setFocus] = useState(false)

    const [filters, setFilters] = useState([
        {logic: '', parametr: 'dsd'}
    ])

    const operators = ['AND', 'OR', 'NOT']
    const parametrs = ['Categories', 'Name', 'Parametr1', 'Parametr2', 'Parametr3']

    const handleFocus = (e) => {
        e.stopPropagation()
        if(!focus) {
            setFocus(true)
        }
    }

    const handleBlur = () => {
        setFocus(false)
    }

    useEffect(() => {
        window.addEventListener('click', handleBlur)

        return () => window.removeEventListener('click', handleBlur)
    }, [])

    return (
        <>
            <div className={`filter_field ${focus || filters?.length > 0 ? 'focus' : ''}`} onClick={handleFocus}>
                <label htmlFor="" >Filter</label>
                <div className="placeholder">Select the parameter</div>

                <div className="filters">
                    {filters?.length 
                    ? filters.map((el, i) => (
                        <div className="filter_item">
                            <div className="txt logic">{el.logic}</div>
                            <div className="txt parametr">{Object.keys(el)[1]};</div> 
                            <div className="txt value">{el.parametr};</div>
                        </div>
                    ))
                    
                    :null}
                </div>

                <img src="/icons/filter_black.svg" alt="" />
            </div>
        </>
    );
};

export default Filter;