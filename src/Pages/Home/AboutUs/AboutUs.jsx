import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.png'

const AboutUs = () => {
    return (
        <div className='flex justify-between max-w-screen-xl mx-auto py-20'>
            <div className='relative w-1/2'>
                <img src={img1} alt="" className='rounded w-[460px]'/>
                <img src={img2} alt="" className='absolute top-1/2 left-1/2 w-60 border-8 border-[#1D232A] rounded'/>
            </div>
            <div className='w-1/2 space-y-10'>
                <h4 className='text-[#FF3811] font-bold'>About Us</h4>
                <h2 className='text-white text-4xl font-bold'>We are qualified & of experience in this field</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className='bg-[#FF3811] hover:bg-transparent border border-transparent hover:border hover:border-white px-4 py-2 font-medium rounded text-white'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;