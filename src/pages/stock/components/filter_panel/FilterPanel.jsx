import React, { useEffect, useState } from 'react';
import DataTab from './DataTab';
import TableTab from './TableTab';
import Store from '../../../../utils/Store';
import './css/filter_panel.css';
import useFilterPanel from './hooks/ueFilterPanel';

const FilterPanel = () => {

    const filterPanel = useFilterPanel()

    return (
        <div className={`filter_panel ${filterPanel.isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className='filter_content'>

                <div className="tabs">
                    <div 
                        className={`tab ${filterPanel.tab === 'data' ? 'active' : ''}`}
                        onMouseDown={() => filterPanel.setTab('data')}
                    >Data</div>

                    <div 
                        className={`tab ${filterPanel.tab === 'table' ? 'active' : ''}`}
                        onMouseDown={() => filterPanel.setTab('table')}
                    >Table</div>
                </div>

                <DataTab mode={filterPanel.tab === 'data' ? 'active' : ''}/>

                <TableTab 
                    mode={filterPanel.tab === 'table' ? 'active' : ''} 
                    isShow={filterPanel.isShow}
                    setIsShow={filterPanel.setIsShow}
                    saveShowFilters={filterPanel.saveShowFilters}
                />
            </div>
        </div>
    );
};

export default FilterPanel;