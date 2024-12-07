import React from 'react';
import Button from '../../../components/button/Button';
import Title from '../../../components/title/Title';

const Auction = () => {
    return (
        <div className='auction'>
            <Title>Auction</Title>

            <div className="auction_flex">
                <div className="auction_spoiler">
                    <p>Auction 1</p>
                    <img src="./icons/arrow_down.svg" alt="" />
                </div>

                <div className="auction_buttons">
                    <Button mode={'full uppercase white bold brown'}>Lots 310</Button>
                    <Button mode={'full uppercase white bold blue2'}>bids 310</Button>
                    <Button mode={'full uppercase white bold burgundy'}>Bidders 310</Button>
                </div>
            </div>
        </div>
    );
};

export default Auction;