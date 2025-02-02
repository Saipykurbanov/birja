import React from 'react';
import List from './components/List';
import useFilter from './hooks/useFilter';

import './css/filter.css';
import FilterItem from './components/FilterItem';

const Filter = () => {

    const f = useFilter()

    return (
        <div className={`filter_field ${f.focus || f.filters?.length > 0 ? 'focus' : ''}`} onClick={f.handleFocus}>
            <label htmlFor="" >Filter</label>
            <div className="placeholder">Select the parameter</div>

            <div className="filters">
                {f.filters?.length 
                ? f.filters.map((el, i) => (
                    <FilterItem 
                        field={Object.keys(el)[1]}
                        el={el}
                        hook={f}
                        i={i} 
                        key={i}
                        disabled={i === f.filters.length - 1 ? false : true}
                    />
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