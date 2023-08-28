import React from 'react';
import Banner from '../../Shared/Banner';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const loadedService = useLoaderData();
    const {_id, img, title, description} = loadedService;
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <div className='my-16'>
                <div className='w-2/3 space-y-8'>
                    <img src={img} alt="" className='w-full rounded-md'/>
                    <h1 className='text-4xl text-white font-bold'>{title}</h1>
                    <p>{description}</p>
                    <Link to={`/checkOut/${_id}`}><button className='bg-[#FF3811] px-5 py-2 rounded my-4 text-white font-bold'>Book Now</button></Link>
                </div>
                <div className='w-1/3'></div>
            </div>
        </div>
    );
};

export default ServiceDetails;