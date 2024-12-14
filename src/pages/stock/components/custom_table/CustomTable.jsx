import React from 'react';
import useStockTable from '../../hooks/useStockTable';
import CustomTableHeader from './CustomTableHeader';
import CustomTableItem from './CustomTableItem';
import './css/custom_table.css';
import CustomTablePagination from './CustomTablePagination';
import TabelFilters from '../TabelFilters';

const CustomTable = () => {

    const table = useStockTable()
    
    return (
        <>  
            <div className='custom_table'>
                <CustomTableHeader isShow={table.isShow} sortFunction={table.sortFunction} sort={table.sort}/>

                <div className="custom_table_list">
                    {table?.list?.length ?
                        table?.list?.map(el => (
                            <CustomTableItem isShow={table.isShow} el={el} key={el.stockNumber}/>
                        ))
                        :
                        <></>
                    }
                </div>

            </div>
            <div className="pagination_flex">
                <TabelFilters 
                    perPageInput={table.perPageInput} 
                    setPerPageInput={table.setPerPageInput}
                    perPage={table.pagination.perPage} 
                    changePerPage={table.pagination.changePerPage}
                />

                <CustomTablePagination props={table.pagination}/>
            </div>
        </>
    );
};

export default CustomTable;