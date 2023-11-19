import React from 'react';
import Navbar from '../shared/Navbar';

const Orders = () => {
    return (
        <div className='relative'>
            <div className='fixed z-50 w-full '>
                <Navbar />
            </div>
            <div className='pt-24'>
                <h1>Total Orders</h1>
            </div>

        </div>
    );
};

export default Orders;