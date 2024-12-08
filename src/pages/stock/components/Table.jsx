import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';


const Table = () => {

    const [rows, setRows] = useState([
        { id: 1, col1: '123456', qr: '/icons/qr.svg' },
        { id: 2, col1: '123456', qr: '/icons/qr.svg' },
        { id: 3, col1: '123456', qr: '/icons/qr.svg' },
        { id: 4, col1: '123456', qr: '/icons/qr.svg' },
        { id: 5, col1: '123456', qr: '/icons/qr.svg' },
        { id: 6, col1: '123456', qr: '/icons/qr.svg' },
        { id: 7, col1: '123456', qr: '/icons/qr.svg' },
        { id: 8, col1: '123456', qr: '/icons/qr.svg' },
        { id: 9, col1: '123456', qr: '/icons/qr.svg' },
        { id: 10, col1: '123456', qr: '/icons/qr.svg' },
        { id: 11, col1: '123456', qr: '/icons/qr.svg' },
        { id: 12, col1: '123456', qr: '/icons/qr.svg' },
        { id: 13, col1: '123456', qr: '/icons/qr.svg' },
        { id: 14, col1: '123456', qr: '/icons/qr.svg' },
        { id: 15, col1: '123456', qr: '/icons/qr.svg' },
        { id: 16, col1: '123456', qr: '/icons/qr.svg' },
        { id: 17, col1: '123456', qr: '/icons/qr.svg' },
        { id: 18, col1: '123456', qr: '/icons/qr.svg' },
        { id: 19, col1: '123456', qr: '/icons/qr.svg' },
        { id: 20, col1: '123456', qr: '/icons/qr.svg' },
        { id: 21, col1: '123456', qr: '/icons/qr.svg' },
      ]);
      
      const columns = [
        { field: 'col1', headerName: 'Stock', width: 100, cellClassName: 'first' },
        { field: 'qr', headerName: 'Qr', width: 50, cellClassName: 'first', renderCell: (params) => (
            <img src={params.value} alt=''/>
        ) },
        { field: 'col3', headerName: 'Media', width: 77 },
        { field: 'col4', headerName: 'Sales Channel', width: 170 },
        { field: 'col5', headerName: 'Lot', width: 70 },
        { field: 'col6', headerName: 'Category', width: 120 },
        { field: 'col7', headerName: 'Region', width: 90 },
        { field: 'col8', headerName: 'City/mint', width: 110 },
        { field: 'col9', headerName: 'Authority', width: 130 },
        { field: 'col10', headerName: 'Metal', width: 80 },
        { field: 'col11', headerName: 'Description', width: 145 },
        { field: 'col12', headerName: 'Location', width: 115 },
        { field: 'col13', headerName: 'Date', width: 70 },
        { field: 'col14', headerName: 'Status', width: 90 },
        { field: 'col15', headerName: 'Status', width: 50, renderHeader: () => (
            <img src='/icons/settings_white.svg' alt=''/>
        ) },
    ];

    
    return (
        <div className='table_wrapper'>
            <DataGrid 
                rows={rows} 
                columns={columns}
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: 'rgba(60, 60, 60, 1)',
                        fontSize: '18px',
                        fontWeight: '450',
                        textTransform: 'uppercase',
                        color: 'var(--white)',
                        height: '44px !important',
                        border: '0',
                    },
                    '& .MuiDataGrid-columnHeader svg path': {
                        fill: 'var(--white)',
                    },
                    '& .MuiDataGrid-cell': {
                        fontSize: '16px !important',
                        height: '44px !important',
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid var(--black)',
                    },
                    '& .MuiDataGrid-row': {
                        minHeight: '44px !important',
                    },
                    '& .MuiDataGrid-cell.first': {
                        backgroundColor: 'rgba(223, 223, 223, 1)'
                    }
                }}
            />
        </div>
    );
};

export default Table;