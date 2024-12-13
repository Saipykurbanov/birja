import React from 'react';
import './css/stock.css';
import CustomInput from './components/CustomInput';
import FilterBtns from './components/FilterBtns';
import Table from './components/Table';
import TabelFilters from './components/TabelFilters';
import TimeLine from './components/TimeLine';
import FilterPanel from './components/filter_panel/FilterPanel';


const Stock = () => {
    return (
        <div className='stock'>
            <CustomInput 
                label={'Search'}
                icon={'./icons/search.svg'}
                placeholder={'Find your lot'}
                callback={''}
                value={''}
            />
            <CustomInput 
                label={'Setting Filter'}
                icon={'./icons/filter.svg'}
                placeholder={'Enter parameter'}
                callback={''}
                value={''}
            />
            
            <FilterBtns />

            <Table />

            {/* <TabelFilters /> */}

            <TimeLine />

            <FilterPanel />
        </div>
    );
};

export default Stock;