import React from 'react';

const Service = ({service}) => {
    const {img, title, price} = service;
    return (
        <div className='text-left'>
            <img src={img} alt="" className='w-full rounded'/>
            <h2>{title}</h2>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Service;