import React from 'react';
import CellMenu from '../CellMenu';
import { NavLink } from 'react-router';
import Api from '../../../../utils/Api';

const CustomTableItem = ({el, isShow}) => {
    return (
        <div className='custom_table_item'>
            <NavLink to={`/coin/${el.stock}`} title={el.stock} className={`stock all ${isShow.stock ? '' : 'no_show'}`}>{el.stock}</NavLink>

            <div className={`qr all ${isShow.stock ? '' : 'no_show'}`}><img loading='lazy' src={`${Api.mainUrl}${Api.port3}qr_code_${el.stock}.png`} alt="" /></div>

            <div className={`media all ${isShow.media ? '' : 'no_show'}`}><img loading='lazy' src={el.qr ? `${Api.url2}${el.stock.toString()[0]}0000/${el.stock}q00Trumb100x50.jpg` : '/images/noimage.jpeg'} alt="" /></div>

            <div title={el.salesChanel} className={`sales_chanel all ${isShow.salesChanel ? '' : 'no_show'}`}>{el.salesChanel}</div>

            <div title={el.lot} className={`lot all ${isShow.lot ? '' : 'no_show'}`}>{el.lot}</div>

            <div title={el.category} className={`category mobile all ${isShow.category ? '' : 'no_show'}`}>{el.category}</div>

            <div title={el.region} className={`region mobile all ${isShow.region ? '' : 'no_show'}`}>{el.region}</div>

            <div title={el.cityMint} className={`city_mint mobile all ${isShow.cityMint ? '' : 'no_show'}`}>{el.cityMint}</div>

            <div title={el.authority} className={`authority mobile all ${isShow.authority ? '' : 'no_show'}`}>{el.authority}</div>

            <div title={el.metal} className={`metal mobile all ${isShow.metal ? '' : 'no_show'}`}>{el.metal}</div>

            <div title={el.nominal} className={`nominal mobile all ${isShow.nominal ? '' : 'no_show'}`}>{el.nominal}</div>

            <div title={el.description} className={`description mobile all ${isShow.description ? '' : 'no_show'}`}>{el.description}</div>

            <div title={el.location} className={`location mobile all ${isShow.location ? '' : 'no_show'}`}>{el.location}</div>

            <div title={el.date} className={`date mobile all ${isShow.date ? '' : 'no_show'}`}>{el.date}</div>

            <div className={`status mobile all color${el.status} ${isShow.status ? '' : 'no_show'}`}></div>

            <div className={`settings mobile all ${isShow.status ? '' : 'no_show'}`}><CellMenu /></div>
        </div>
    );
};

export default CustomTableItem;