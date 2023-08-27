import React from 'react';
import Banner from '../../Shared/Banner';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const loadedService = useLoaderData();
    console.log(loadedService);
    const {img, title, description} = loadedService;
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <div className='my-16'>
                <div className='w-2/3 space-y-8'>
                    <img src={img} alt="" className='w-full rounded-md'/>
                    <h1 className='text-4xl text-white font-bold'>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className='w-1/3'></div>
            </div>
        </div>
    );
};

export default ServiceDetails;