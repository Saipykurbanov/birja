import React from 'react';
import './css/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <img className='logo' src="/Logo.png" alt="" />
                <a href='#' className="policy">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;