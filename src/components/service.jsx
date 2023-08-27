import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, img, title, price} = service;
    return (
        <div className='bg-gray-800 p-8 rounded space-y-4 text-left'>
            <img src={img} alt="" className='w-full rounded h-60'/>
            <h2 className='text-2xl font-medium'>{title}</h2>
            <div className='text-[#FF3811] font-bold flex justify-between items-center'>
            <p>Price: ${price}</p>
            <Link to={`/services/${_id}`}><HiArrowRight></HiArrowRight></Link>
            </div>
        </div>
    );
};

export default Service;