import React from 'react';

const CustomTableHeader = ({sortFunction, sort, isShow}) => {
    return (
        <div className='custom_table_header'>
            <div onClick={() => sortFunction('stock')} className={`stock arrow ${sort.stock} ${isShow.stock ? '' : 'no_show'}`}>stock</div>

            <div className={`qr ${isShow.stock ? '' : 'no_show'}`}>qr</div>

            <div className={`media ${isShow.media ? '' : 'no_show'}`}>media</div>

            <div onClick={() => sortFunction('salesChanel')}    className={`sales_chanel arrow ${sort.salesChanel} ${isShow.salesChanel ? '' : 'no_show'}`}>sales chanel</div>

            <div onClick={() => sortFunction('lot')}            className={`lot arrow ${sort.lot} ${isShow.lot ? '' : 'no_show'}`}>lot</div>

            <div onClick={() => sortFunction('category')}       className={`category arrow ${sort.category} ${isShow.category ? '' : 'no_show'}`}>category</div>

            <div onClick={() => sortFunction('region')}         className={`region arrow ${sort.region} ${isShow.region ? '' : 'no_show'}`}>region</div>

            <div onClick={() => sortFunction('cityMint')}       className={`city_mint arrow ${sort.cityMint} ${isShow.cityMint ? '' : 'no_show'}`}>city/mint</div>

            <div onClick={() => sortFunction('authority')}      className={`authority arrow ${sort.authority} ${isShow.authority ? '' : 'no_show'}`}>authority</div>

            <div onClick={() => sortFunction('metal')}          className={`metal arrow ${sort.metal} ${isShow.metal ? '' : 'no_show'}`}>metal</div>

            <div onClick={() => sortFunction('description')}    className={`description arrow ${sort.description} ${isShow.description ? '' : 'no_show'}`}>description</div>

            <div onClick={() => sortFunction('location')}       className={`location arrow ${sort.location} ${isShow.location ? '' : 'no_show'}`}>location</div>

            <div onClick={() => sortFunction('date')}           className={`date arrow ${sort.date} ${isShow.date ? '' : 'no_show'}`}>date</div>

            <div onClick={() => sortFunction('')}               className={`status ${isShow.status ? '' : 'no_show'}`}>status</div>

            <div onClick={() => sortFunction('')}               className={`settings ${isShow.status ? '' : 'no_show'}`}><img src='/icons/settings_white.svg' alt=''/></div>
        </div>
    );
};

export default CustomTableHeader;