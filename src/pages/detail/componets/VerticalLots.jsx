import React, { useEffect, useState } from 'react';
import Api from '../../../utils/Api';
import { NavLink } from 'react-router-dom';

const VerticalLots = ({stockNumber}) => {

    const [coins, setCoins] = useState([])

    useEffect(() => {
        
        (async () => {

            let res = await Api.asyncGet('api/coins')

            if (res !== 'error') {
                let index = res.findIndex(item => item.stockNumber === stockNumber);
    
                if (index !== -1) {
                    let start, end;
    
                    if (index - 3 < 0) {
                        const overflow = 3 - index; 
                        start = res.length - overflow;
                        end = Math.min(res.length, index + 4);
                        setCoins([...res.slice(start, res.length), ...res.slice(0, end)]);
                    } else if (index + 4 > res.length) {
                        const overflow = (index + 4) - res.length; 
                        start = Math.max(0, index - 3);
                        end = res.length;
                        setCoins([...res.slice(start, end), ...res.slice(0, overflow)]);
                    } else {
                        start = Math.max(0, index - 3);
                        end = Math.min(res.length, index + 4);
                        setCoins(res.slice(start, end));
                    }
                } 
            }

        })()

    }, [stockNumber])

    return (
        <div className="vertical_lots">
            {coins?.length ?
                coins.map((el, i) => (
                    <a key={i} href={`/detail/${el.stockNumber}`}>
                        <img className={`${stockNumber === el.stockNumber ? 'current' : ''}`} src={el.idPhoto ? `${Api.url2}20000/${el.idPhoto}` : '/images/noimage.jpeg'} alt="" />
                    </a>
                ))
            :<></>}
        </div>
    );
};

export default VerticalLots;