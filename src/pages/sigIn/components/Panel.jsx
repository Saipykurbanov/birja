import React, { useEffect, useState } from 'react';
import Button from '../../../components/button/Button';
import Api from '../../../utils/Api';
import Settings from '../../../components/settings/Settings';
import Store from '../../../utils/Store';

const Panel = () => {

    const [isOpen, setIsOpen] = useState(false)

    Store.useListener('signInMenu', (data) => {
        setIsOpen(true)
        document.body.className = 'hidden'
    })

    const close = (e) => {
        setIsOpen(false)
        document.body.className = ''
    }

    useEffect(() => {

        window.addEventListener('click', close)

        return () => {
            window.removeEventListener('click', close)
        }

    }, [])

    return (
        <div className={`sign_in_panel ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="sign_in_panel_wrapper">
                <img src="/images/Logo_black.png" alt="" className="logo" />

                <Button mode={'black white'} callback={() => Api.logout()}>
                    Exit
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1941 15L15.2389 12M15.2389 12L12.1941 9M15.2389 12H4.07471M9.14933 7.24859V7.2002C9.14933 6.08009 9.14933 5.51962 9.37057 5.0918C9.56518 4.71547 9.87549 4.40973 10.2574 4.21799C10.6916 4 11.2605 4 12.3973 4H17.066C18.2028 4 18.7704 4 19.2046 4.21799C19.5865 4.40973 19.8979 4.71547 20.0925 5.0918C20.3135 5.5192 20.3135 6.07899 20.3135 7.19691V16.8036C20.3135 17.9215 20.3135 18.4805 20.0925 18.9079C19.8979 19.2842 19.5865 19.5905 19.2046 19.7822C18.7708 20 18.2035 20 17.0689 20H12.394C11.2594 20 10.6912 20 10.2574 19.7822C9.87549 19.5905 9.56518 19.2839 9.37057 18.9076C9.14933 18.4798 9.14933 17.9201 9.14933 16.8V16.75" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Button>

                <p>Sing in</p>

                <Settings />
            </div>

        </div>
    );
};

export default Panel;