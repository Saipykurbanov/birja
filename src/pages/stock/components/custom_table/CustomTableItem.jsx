import React from 'react';
import CellMenu from '../CellMenu';
import { NavLink } from 'react-router';

const CustomTableItem = ({el, isShow}) => {
    return (
        <div className='custom_table_item'>
            <NavLink to={`/detail/${el.stock}`} title={el.stock} className={`stock all ${isShow.stock ? '' : 'no_show'}`}>{el.stock}</NavLink>

            <div className={`qr all ${isShow.stock ? '' : 'no_show'}`}><img src={el.qr} alt="" /></div>

            <div className={`media all ${isShow.media ? '' : 'no_show'}`}><img src={el.media} alt="" /></div>

            <div title={el.salesChanel} className={`sales_chanel all ${isShow.salesChanel ? '' : 'no_show'}`}>{el.salesChanel}</div>

            <div title={el.lot} className={`lot all ${isShow.lot ? '' : 'no_show'}`}>{el.lot}</div>

            <div title={el.category} className={`category all ${isShow.category ? '' : 'no_show'}`}>{el.category}</div>

            <div title={el.region} className={`region all ${isShow.region ? '' : 'no_show'}`}>{el.region}</div>

            <div title={el.cityMint} className={`city_mint all ${isShow.cityMint ? '' : 'no_show'}`}>{el.cityMint}</div>

            <div title={el.authority} className={`authority all ${isShow.authority ? '' : 'no_show'}`}>{el.authority}</div>

            <div title={el.metal} className={`metal all ${isShow.metal ? '' : 'no_show'}`}>{el.metal}</div>

            <div title={el.description} className={`description all ${isShow.description ? '' : 'no_show'}`}>{el.description}</div>

            <div title={el.location} className={`location all ${isShow.location ? '' : 'no_show'}`}>{el.location}</div>

            <div title={el.date} className={`date all ${isShow.date ? '' : 'no_show'}`}>{el.date}</div>

            <div className={`status all color${el.status} ${isShow.status ? '' : 'no_show'}`}></div>

            <div className={`settings all ${isShow.status ? '' : 'no_show'}`}><CellMenu /></div>
        </div>
    );
};

export default CustomTableItem;