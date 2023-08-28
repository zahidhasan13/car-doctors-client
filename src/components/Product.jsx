import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Product = ({product}) => {
    const {img, title, price} = product;
    return (
        <div className='bg-gray-800 p-8 rounded space-y-4 text-left'>
            <img src={img} alt="" className='p-8 w-full rounded h-60 bg-gray-200'/>
            <h2 className='text-2xl font-medium'>{title}</h2>
            <div className='text-[#FF3811] font-bold flex justify-between items-center'>
            <p>Price: ${price}</p>
            <HiArrowRight></HiArrowRight>
            </div>
        </div>
    );
};

export default Product;