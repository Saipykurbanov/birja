import React from 'react';
import BidderItems from './BidderItems';

const Bidders = () => {
    return (
        <div className='bidder_table'>
            <div className="table_title">
                <h3>bidders</h3>

                <div className="arrow_flex">
                    <h4>Show all</h4>

                    {/* <img src={'./icons/arrow_up.svg'} alt="" /> */}
                </div>
            </div>

            <div className="line"></div>

            <div className="table_list_wrapper">

                <div className="table_list">
                    <BidderItems />
                    <BidderItems />
                    <BidderItems />
                    <BidderItems />
                    <BidderItems />
                    <BidderItems />
                    <BidderItems />
                    <BidderItems />
                    <BidderItems />
                    <BidderItems />
                    <BidderItems />
                    <BidderItems />
                    <BidderItems />
                </div>

            </div>
        </div>
    );
};

export default Bidders;