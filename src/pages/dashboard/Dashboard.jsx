import React from 'react';
import './css/dashboard.css';
import Auction from './components/Auction';
import Bets from './components/Bets';
import Bidders from './components/Bidders';
import LatestBid from './components/LatestBid';
import Enquiries from './components/Enquiries';
import Shop from './components/Shop';
import Total from './components/Total';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Auction />

            <Bets />

            <div className="tables_grid">
                <Bidders />

                <LatestBid/>
            </div>

            <Enquiries />

            <div className="line"></div>

            <Shop />

            <Total />
        </div>
    );
};

export default Dashboard;