import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useStockTable from '../hooks/useStockTable';
import { Box } from '@mui/material';
import CellMenu from './CellMenu';


const Table = () => {

    const table = useStockTable()
      
    const columns = [
        { field: 'stock', headerName: 'Stock', width: 100, cellClassName: 'first' },
        { field: 'qr', headerName: 'Qr', width: 50, cellClassName: 'first', renderCell: (params) => (
            <img src={params.value} alt=''/>
        ) },
        { field: 'media', headerName: 'Media', width: 77 },
        { field: 'salesChanel', headerName: 'Sales Channel', width: 170 },
        { field: 'lot', headerName: 'Lot', width: 70 },
        { field: 'category', headerName: 'Category', width: 120 },
        { field: 'region', headerName: 'Region', width: 90 },
        { field: 'cityMint', headerName: 'City/mint', width: 110 },
        { field: 'authority', headerName: 'Authority', width: 130, cellClassName: 'authority_description' },
        { field: 'metal', headerName: 'Metal', width: 120 },
        { field: 'description', headerName: 'Description', width: 145, cellClassName: 'cell_description' },
        { field: 'location', headerName: 'Location', width: 115 },
        { field: 'date', headerName: 'Date', width: 70 },
        { field: 'status', headerName: 'Status', width: 90, resizable: false,
            renderCell: (params) => (
                <Box
                    component="pre"
                    sx={{
                    fontFamily: 'Futura-Pt, sans-serif',
                    }}
                >
                    <div className={`status_cell_content color${params.value}`}></div>
                </Box>
                ),
                cellClassName: 'status_cell'
            },
        { field: 'settings', headerName: 'Status', width: 50, renderHeader: () => (
            <img src='/icons/settings_white.svg' alt=''/>
            ), 
            renderCell: (params) => (
                <Box
                    component="pre"
                    sx={{
                    overflow: 'visible',
                    lineHeight: '1',
                    fontFamily: 'Futura-Pt, sans-serif',
                    }}
                >
                    {/* {params.value} */}
                    <CellMenu />
                </Box>
                ),
            cellClassName: 'settings_cell',
            resizable: false,
        },
    ];

    
    return (
        <div className='table_wrapper'>
            <DataGrid 
                rows={table.list} 
                columns={columns}
                sx={{
                    fontFamily: 'Futura-Pt, sans-serif',
                    borderRadius: '0',
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
                        justifyContent: 'center',
                        border: '1px solid var(--black)',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                    },
                    '& .MuiDataGrid-row': {
                        minHeight: '44px !important',
                    },
                    '& .MuiDataGrid-row:nth-last-child(-n+4) .settings_cell .cell_menu .cell_menu_list': {
                        top: 'unset',
                        bottom: '100%'
                    },
                    '& .MuiDataGrid-cell.first': {
                        backgroundColor: 'rgba(223, 223, 223, 1)'
                    },
                    '& .MuiInputBase-root': {
                        fontFamily: 'Futura-Pt, sans-serif',
                        fontSize: '16px'
                    },
                    '& .MuiTablePagination-selectLabel': {
                        fontFamily: 'Futura-Pt, sans-serif',
                        fontSize: '20px',
                    },
                    '& .MuiTablePagination-displayedRows': {
                        fontFamily: 'Futura-Pt, sans-serif',
                        fontSize: '16px'
                    }
                }}
            />
        </div>
    );
};

export default Table;