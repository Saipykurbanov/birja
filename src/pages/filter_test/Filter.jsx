import React from 'react';
import List from './components/List';
import useFilter from './hooks/useFilter';
import FilterItem from './components/FilterItem';

import './css/filter.css';

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

            {f.filters?.length > 0 
            ?<div className="del_filter">
                <button onClick={f.delFilter}><img src="/icons/cross.svg" alt="" /></button>
            </div> :null}
            
            <List getList={f.getList} open={f.listOpen} param={f.getParam()} callback={f.addNewItem} last={f.filters?.length ? Object.keys(f.filters.at(-1))[1] : ''} list={f.list}/>

            <img src="/icons/filter_black.svg" alt="" />
        </div>
    );
};

export default Filter;