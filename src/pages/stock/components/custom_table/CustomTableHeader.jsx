import React from 'react';

const CustomTableHeader = ({sortFunction, sort, isShow}) => {
    return (
        <div className='custom_table_header'>
            <div onClick={() => sortFunction('stock')} className={`stock arrow ${sort.stock} ${isShow.stock ? '' : 'no_show'}`}>stock</div>

            <div className={`qr ${isShow.stock ? '' : 'no_show'}`}>qr</div>

            <div className={`media ${isShow.media ? '' : 'no_show'}`}>media</div>

            <div onClick={() => sortFunction('salesChanel')}    className={`sales_chanel arrow ${sort.salesChanel} ${isShow.salesChanel ? '' : 'no_show'}`}>sales chanel</div>

            <div onClick={() => sortFunction('lot')}            className={`lot arrow ${sort.lot} ${isShow.lot ? '' : 'no_show'}`}>lot</div>

            <div onClick={() => sortFunction('category')}       className={`category mobile arrow ${sort.category} ${isShow.category ? '' : 'no_show'}`}>category</div>

            <div onClick={() => sortFunction('region')}         className={`region mobile arrow ${sort.region} ${isShow.region ? '' : 'no_show'}`}>region</div>

            <div onClick={() => sortFunction('cityMint')}       className={`city_mint mobile arrow ${sort.cityMint} ${isShow.cityMint ? '' : 'no_show'}`}>city/mint</div>

            <div onClick={() => sortFunction('authority')}      className={`authority mobile arrow ${sort.authority} ${isShow.authority ? '' : 'no_show'}`}>authority</div>

            <div onClick={() => sortFunction('metal')}          className={`metal mobile arrow ${sort.metal} ${isShow.metal ? '' : 'no_show'}`}>metal</div>

            <div onClick={() => sortFunction('nominal')}          className={`nominal mobile arrow ${sort.nominal} ${isShow.nominal ? '' : 'no_show'}`}>nominal</div>

            <div onClick={() => sortFunction('description')}    className={`description mobile arrow ${sort.description} ${isShow.description ? '' : 'no_show'}`}>description</div>

            <div onClick={() => sortFunction('location')}       className={`location mobile arrow ${sort.location} ${isShow.location ? '' : 'no_show'}`}>location</div>

            <div onClick={() => sortFunction('date')}           className={`date mobile arrow ${sort.date} ${isShow.date ? '' : 'no_show'}`}>date</div>

            <div onClick={() => sortFunction('status')}         className={`status mobile arrow ${sort.status} ${isShow.status ? '' : 'no_show'}`}>status</div>

            <div className={`settings ${isShow.status ? '' : 'no_show'}`}><img src='/icons/settings_white.svg' alt=''/></div>
        </div>
    );
};

export default CustomTableHeader;