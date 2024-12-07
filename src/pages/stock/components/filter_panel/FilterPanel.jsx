import React, { useEffect, useState } from 'react';
import DataTab from './DataTab';
import TableTab from './TableTab';
import Store from '../../../../utils/Store';

const FilterPanel = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [tab, setTab] = useState('data')

    Store.useListener('open_filter_panel', setIsOpen)

    const closePanel = () => {
        document.body.className = ''
        setIsOpen(prev => prev = false)
        console.log('no')
    }

    useEffect(() => {
        window.addEventListener('mousedown', () => closePanel())
        
        return window.removeEventListener('mousedown', () => closePanel())
    }, [])

    return (
        <div className={`filter_panel ${isOpen ? 'open' : ''}`} onMouseDown={(e) => e.stopPropagation()}>
            <div className='filter_content'>

                <div className="tabs">
                    <div 
                        className={`tab ${tab === 'data' ? 'active' : ''}`}
                        onMouseDown={() => setTab('data')}
                    >Data</div>

                    <div 
                        className={`tab ${tab === 'table' ? 'active' : ''}`}
                        onMouseDown={() => setTab('table')}
                    >Table</div>
                </div>

                <DataTab mode={tab === 'data' ? 'active' : ''}/>

                <TableTab mode={tab === 'table' ? 'active' : ''}/>
            </div>
        </div>
    );
};

export default FilterPanel;