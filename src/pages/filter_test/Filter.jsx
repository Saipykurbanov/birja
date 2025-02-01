import React, { useEffect, useRef, useState } from 'react';
import './css/filter.css';
import List from './components/List';
import Input from './components/Input';
import useFilter from './hooks/useFilter';


const Filter = () => {

    const f = useFilter()

    return (
        <div className={`filter_field ${f.focus || f.filters?.length > 0 ? 'focus' : ''}`} onClick={f.handleFocus}>
            <label htmlFor="" >Filter</label>
            <div className="placeholder">Select the parameter</div>

            <div className="filters">
                {f.filters?.length 
                ? f.filters.map((el, i) => (
                    <div className="filter_item" key={i}>

                        {i > 0 ? <div className="txt logic">{el.logic}</div> :null}
                        {Object.keys(el)[1] ? <div className="txt parametr">{Object.keys(el)[1]}:</div> :null}

                        {f.inputList.includes(Object.keys(el)[1])
                        ?<Input el={el} lastInputRef={f.lastInputRef} change={f.change} i={i}/>
                        :<div className="txt value">{el[Object.keys(el)[1]]}</div>}

                    </div>
                ))
                :null}
            </div>

            <div className="list_block">
                <List open={f.listOpen} param={f.getParam()} callback={f.addNewItem} last={f.filters?.length ? Object.keys(f.filters.at(-1))[1] : ''}/>
            </div>

            <img src="/icons/filter_black.svg" alt="" />
        </div>
    );
};

export default Filter;