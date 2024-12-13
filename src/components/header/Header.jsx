import React from 'react';
import './css/header.css';
import Button from '../button/Button';
import Api from '../../utils/Api';
import Store from '../../utils/Store';


const Header = ({auth}) => {

    const open = (e) => {
        e.stopPropagation()
        Store.setListener('prefences', true)
    }

    const openPanel = (e) => {
        e.stopPropagation()
        if(auth === 3) {
            Store.setListener('panel', true)
        }
        if(auth === 2) {
            Store.setListener('signInMenu', true)
        }
    }

    return (
        <header>
            <div className="container">
                <div className="left">
                    <div className="burger" onClick={openPanel}>
                        <div className="burger_wrapper">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                    <img className='logo' src="/Logo.png" alt="" />
                    <p>BACKOFICE</p>
                </div>
                <div className="right">
                    {auth ?<svg className='norification' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9M15 17H18.5905C18.973 17 19.1652 17 19.3201 16.9478C19.616 16.848 19.8475 16.6156 19.9473 16.3198C19.9997 16.1643 19.9997 15.9715 19.9997 15.5859C19.9997 15.4172 19.9995 15.3329 19.9863 15.2524C19.9614 15.1004 19.9024 14.9563 19.8126 14.8312C19.7651 14.7651 19.7048 14.7048 19.5858 14.5858L19.1963 14.1963C19.0706 14.0706 19 13.9001 19 13.7224V10C19 6.134 15.866 2.99999 12 3C8.13401 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.92924 14.0706 4.80357 14.1963L4.41406 14.5858C4.29476 14.7051 4.23504 14.765 4.1875 14.8312C4.09766 14.9564 4.03815 15.1004 4.0132 15.2524C4 15.3329 4 15.4172 4 15.586C4 15.9715 4 16.1642 4.05245 16.3197C4.15225 16.6156 4.3848 16.848 4.68066 16.9478C4.83556 17 5.02701 17 5.40956 17H9" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>:<></>}
                    <div className="language" onClick={open}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7515 2.54579C11.6903 2.54412 11.4358 2.54627 11.4213 2.54675C6.40592 2.646 2.35056 6.72337 2.2879 11.7476C2.26064 11.798 2.2439 11.8549 2.2439 11.9164C2.2439 11.98 2.26183 12.0386 2.29077 12.0903C2.40987 17.0647 6.44228 21.0842 11.4215 21.1825C11.4579 21.1837 11.494 21.1873 11.5306 21.1873C11.5401 21.1873 11.5494 21.1861 11.559 21.1861C11.5753 21.1861 11.5913 21.1873 11.6076 21.1873C16.748 21.1873 20.9299 17.0054 20.9299 11.8647C20.9301 6.77263 16.8257 2.62352 11.7515 2.54579ZM20.2047 11.5577H16.7922C16.731 8.05809 15.6309 5.10261 14.0051 3.60214C17.4922 4.61569 20.0713 7.77972 20.2047 11.5577ZM11.2488 3.27785V11.5577H6.98635C7.06886 7.13232 8.92519 3.54786 11.2488 3.27785ZM11.2488 12.2749V20.4516C8.94337 20.1835 7.09685 16.6529 6.98779 12.2749H11.2488ZM11.9663 20.4294V12.2749H16.0733C15.9667 16.5551 14.1998 20.0259 11.9663 20.4294ZM11.9663 11.5577V3.30009C14.2175 3.70689 15.9939 7.23062 16.0748 11.5577H11.9663ZM8.98139 3.67102C7.39651 5.19229 6.32915 8.11167 6.26889 11.5577H3.01015C3.14073 7.8627 5.61049 4.75392 8.98139 3.67102ZM3.01278 12.2749H6.27056C6.34996 15.6762 7.41253 18.5525 8.98163 20.0585C5.64158 18.9856 3.18497 15.9249 3.01278 12.2749ZM14.0051 20.1273C15.6149 18.6415 16.7102 15.7297 16.7908 12.2749H20.2021C20.0261 16.0074 17.4607 19.1231 14.0051 20.1273Z" fill="white"/>
                        </svg>
                        <p>English</p>
                    </div>
                    {auth 
                    ?<Button mode={'flex lite'} callback={() => Api.logout()}>
                        Exit
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1941 15L15.2389 12M15.2389 12L12.1941 9M15.2389 12H4.07471M9.14933 7.24859V7.2002C9.14933 6.08009 9.14933 5.51962 9.37057 5.0918C9.56518 4.71547 9.87549 4.40973 10.2574 4.21799C10.6916 4 11.2605 4 12.3973 4H17.066C18.2028 4 18.7704 4 19.2046 4.21799C19.5865 4.40973 19.8979 4.71547 20.0925 5.0918C20.3135 5.5192 20.3135 6.07899 20.3135 7.19691V16.8036C20.3135 17.9215 20.3135 18.4805 20.0925 18.9079C19.8979 19.2842 19.5865 19.5905 19.2046 19.7822C18.7708 20 18.2035 20 17.0689 20H12.394C11.2594 20 10.6912 20 10.2574 19.7822C9.87549 19.5905 9.56518 19.2839 9.37057 18.9076C9.14933 18.4798 9.14933 17.9201 9.14933 16.8V16.75" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                    :<>
                        <Button mode={'lite'}>
                            Sign in
                        </Button>
                        <Button mode={'flex lite'}>
                            Log in
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 9L9 12M9 12L12 15M9 12L20 12M15 16.7514V16.7998C15 17.9199 15 18.4804 14.782 18.9082C14.5903 19.2845 14.2845 19.5903 13.9082 19.782C13.4804 20 12.9199 20 11.7998 20H7.1998C6.0797 20 5.52043 20 5.09261 19.782C4.71628 19.5903 4.40952 19.2845 4.21777 18.9082C4 18.4808 4 17.921 4 16.8031L4 7.19642C4 6.07851 4 5.51952 4.21777 5.09212C4.40952 4.71579 4.71628 4.40952 5.09261 4.21777C5.52001 4 6.079 4 7.19691 4H11.8031C12.921 4 13.4808 4 13.9082 4.21777C14.2845 4.40952 14.5903 4.71609 14.782 5.09241C15 5.52023 15 6.0799 15 7.2V7.25" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Button>
                    </>}
                    <div className="burger mobile" onClick={openPanel}>
                        <div className="burger_wrapper">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;