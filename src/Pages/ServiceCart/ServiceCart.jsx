import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const ServiceCart = () => {
    const {user, cart, setCart} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() =>{
        fetch(url)
      .then(res => res.json())
      .then(data => setCart(data))
    }, [])
    return (
        <div className='max--w-screen-xl mx-auto my-8'>
            <h1 className='text-white text-3xl font-bold text-center'>Total Bookings: {cart?.length}</h1>
        </div>
    );
};

export default ServiceCart;