import React from 'react';
import LatestBidItem from './LatestBidItem';

const LatestBid = () => {
    return (
        <div className='latest_bids'>
             <div className="table_title">
                <h3>latest Bids</h3>

                <div className="arrow_flex">
                    <div>Show all</div>

                    {/* <img src={'./icons/arrow_up.svg'} alt="" /> */}
                </div>
            </div>

            <div className="line"></div>

            <div className="table_list_wrapper">

                <div className="table_list">
                    <LatestBidItem />
                    <LatestBidItem />
                    <LatestBidItem />
                    <LatestBidItem />
                    <LatestBidItem />
                    <LatestBidItem />
                    <LatestBidItem />
                    <LatestBidItem />
                    <LatestBidItem />
                    <LatestBidItem />
                    <LatestBidItem />
                    <LatestBidItem />
                    <LatestBidItem />
                </div>

            </div>
        </div>
    );
};

export default LatestBid;