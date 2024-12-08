import React from 'react';
import Title from '../../../components/title/Title';

const Shop = () => {
    return (
        <div className='shop'>
            <Title>Shop</Title>

            <div className="shop_tabs">
                <div className="shop_tab_item active">Today</div>
                <p>/</p>
                <div className="shop_tab_item">This week</div>
                <p>/</p>
                <div className="shop_tab_item">This month</div>
                <p>/</p>
                <div className="shop_tab_item">3 Months</div>
                <p>/</p>
                <div className="shop_tab_item">This year</div>
            </div>
        </div>
    );
};

export default Shop;