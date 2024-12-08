import React from 'react';
import EnquiriesItem from './EnquiriesItem';

const Enquiries = () => {
    return (
        <div className='enquiries'>
            <h3 className="enquiries_title">Enquiries</h3>

            <div className="line"></div>

            <div className="enquiries_list_wrapper">

                <div className="enquiries_list">
                    <EnquiriesItem />
                    <EnquiriesItem />
                    <EnquiriesItem />
                    <EnquiriesItem />
                </div>

            </div>
        </div>
    );
};

export default Enquiries;