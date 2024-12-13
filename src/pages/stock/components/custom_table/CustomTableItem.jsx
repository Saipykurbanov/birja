import React from 'react';
import CellMenu from '../CellMenu';

const CustomTableItem = ({el}) => {
    return (
        <div className='custom_table_item'>
            <div title={el.stock} className="stock all">{el.stock}</div>

            <div className="qr all"></div>

            <div className="media all"></div>

            <div title={el.salesChanel} className="sales_chanel all">{el.salesChanel}</div>

            <div title={el.lot} className="lot all">{el.lot}</div>

            <div title={el.category} className="category all">{el.category}</div>

            <div title={el.region} className="region all">{el.region}</div>

            <div title={el.cityMint} className="city_mint all">{el.cityMint}</div>

            <div title={el.authority} className="authority all">{el.authority}</div>

            <div title={el.metal} className="metal all">{el.metal}</div>

            <div title={el.description} className="description all">{el.description}</div>

            <div title={el.location} className="location all">{el.location}</div>

            <div title={el.date} className="date all">{el.date}</div>

            <div className={`status all color${el.status}`}></div>

            <div className="settings all"><CellMenu /></div>
        </div>
    );
};

export default CustomTableItem;