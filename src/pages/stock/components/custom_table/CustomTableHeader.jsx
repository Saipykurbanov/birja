import React from 'react';

const CustomTableHeader = ({sortFunction, sort}) => {
    return (
        <div className='custom_table_header'>
            <div onClick={() => sortFunction('stock')} className={`stock arrow ${sort.stock}`}>stock</div>

            <div className={`qr`}>qr</div>

            <div className={`media`}>media</div>

            <div onClick={() => sortFunction('salesChanel')} className={`sales_chanel arrow ${sort.salesChanel}`}>sales chanel</div>

            <div onClick={() => sortFunction('lot')} className={`lot arrow ${sort.lot}`}>lot</div>

            <div onClick={() => sortFunction('category')} className={`category arrow ${sort.category}`}>category</div>

            <div onClick={() => sortFunction('region')} className={`region arrow ${sort.region}`}>region</div>

            <div onClick={() => sortFunction('cityMint')} className={`city_mint arrow ${sort.cityMint}`}>city/mint</div>

            <div onClick={() => sortFunction('authority')} className={`authority arrow ${sort.authority}`}>authority</div>

            <div onClick={() => sortFunction('metal')} className={`metal arrow ${sort.metal}`}>metal</div>

            <div onClick={() => sortFunction('description')} className={`description arrow ${sort.description}`}>description</div>

            <div onClick={() => sortFunction('location')} className={`location arrow ${sort.location}`}>location</div>

            <div onClick={() => sortFunction('date')} className={`date arrow ${sort.date}`}>date</div>

            <div onClick={() => sortFunction('')} className={`status`}>status</div>

            <div onClick={() => sortFunction('')} className={`settings`}><img src='/icons/settings_white.svg' alt=''/></div>
        </div>
    );
};

export default CustomTableHeader;