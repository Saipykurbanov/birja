import React from 'react';
import Button from '../../../components/button/Button';

const Head = () => {
    return (
        <div className='detail_head'>

            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.0005 38L17.0005 24L31.0005 10" stroke="#1F2022" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <Button mode={'full blue'}>
                SAVE
                <span>(Autosave 30 sec) - </span>
                <p>[12.03.202 11:23 PM]</p>
            </Button>

            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 36C28 37.1046 28.8954 38 30 38C31.1046 38 32 37.1046 32 36C32 34.8954 31.1046 34 30 34C28.8954 34 28 34.8954 28 36Z" stroke="#2C2F33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 36C16 37.1046 16.8954 38 18 38C19.1046 38 20 37.1046 20 36C20 34.8954 19.1046 34 18 34C16.8954 34 16 34.8954 16 36Z" stroke="#2C2F33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 24C28 25.1046 28.8954 26 30 26C31.1046 26 32 25.1046 32 24C32 22.8954 31.1046 22 30 22C28.8954 22 28 22.8954 28 24Z" stroke="#2C2F33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 24C16 25.1046 16.8954 26 18 26C19.1046 26 20 25.1046 20 24C20 22.8954 19.1046 22 18 22C16.8954 22 16 22.8954 16 24Z" stroke="#2C2F33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 12C28 13.1046 28.8954 14 30 14C31.1046 14 32 13.1046 32 12C32 10.8954 31.1046 10 30 10C28.8954 10 28 10.8954 28 12Z" stroke="#2C2F33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12Z" stroke="#2C2F33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </div>
    );
};

export default Head;