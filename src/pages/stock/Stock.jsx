import React from 'react';
import './css/stock.css';
import CustomInput from './components/CustomInput';
import FilterBtns from './components/FilterBtns';
import Table from './components/Table';
import TimeLine from './components/timeline/TimeLine';
import CustomTable from './components/custom_table/CustomTable';


const Stock = () => {
    return (
        <div className='stock'>
            <CustomInput 
                label={'Search'}
                icon={'/icons/search.svg'}
                placeholder={'Search'}
                callback={''}
                value={''}
            />
            <CustomInput 
                label={'Setting Filter'}
                icon={'/icons/filter.svg'}
                placeholder={'Enter parameter'}
                callback={''}
                value={''}
            />
            
            <FilterBtns />

            <CustomTable />

            {/* <Table /> */}

            <TimeLine />
        </div>
    );
};

export default Stock;