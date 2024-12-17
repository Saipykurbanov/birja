import React, { useEffect, useState } from 'react';
import Api from '../../../../utils/Api';
import { Link, NavLink } from 'react-router-dom';
import Store from '../../../../utils/Store';

const VerticalLots = () => {

    const [coins, setCoins] = useState([])
    const [stockNumber, setStockNumber] = useState(0)
    Store.useListener('getCoins', setCoins)
    Store.useListener('verticalGetSN', setStockNumber)

    return (
        <div className="vertical_lots">
            {coins?.length ?
                coins.map((el, i) => (
                    <Link key={i} to={`/coin/${el.stockNumber}`}>
                        <img className={`${stockNumber === el.stockNumber ? 'current' : ''}`} src={el.idPhoto ? `${Api.url2}${el.stockNumber.toString()[0]}0000/${el.idPhoto}` : '/images/noimage.jpeg'} alt="" />
                    </Link>
                ))
            :<></>}
        </div>
    );
};

export default VerticalLots;