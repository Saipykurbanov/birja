import React from 'react';
import './css/panel.css';
import { NavLink } from 'react-router-dom';


const Panel = () => {
    return (
        <div className='panel'>
            <img src="/images/logo2.jpg" alt="" />

            <h3>Dashboard</h3>
            <div className="nav">
                <div className="nav_item active">
                    <h4>Analytic</h4>
                </div>
                <div className="nav_item">
                    <h4>Auction management</h4>
                </div>
                <div className="nav_item">
                    <h4>Shop management</h4>
                </div>
                <div className="nav_item">
                    <h4>Inventory</h4>
                </div>
                <div className="nav_item">
                    <h4>Customers</h4>
                </div>
                <div className="nav_item">
                    <h4>Bid management</h4>
                </div>
                <div className="nav_item">
                    <h4>Orders</h4>
                </div>
                <div className="nav_item">
                    <h4>Finance</h4>
                </div>
                <div className="nav_item">
                    <h4>Marketing</h4>
                </div>
                <div className="nav_item">
                    <h4>Vendors</h4>
                </div>
                <div className="nav_item">
                    <h4>Setting</h4>
                </div>

            </div>
        </div>
    );
};

export default Panel;