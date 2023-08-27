import React from "react";
import banner from "../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] my-8 rounded">
        <img src={banner} alt="" className="w-full h-full"/>
        <div className="absolute top-0 bg-gradient-to-r from-[rgb(0,0,0,0.7)] to-[rgb(0,0,0,0.1)] w-full h-full rounded p-20">
            <h2 className="text-4xl text-white font-bold">Service Details</h2>
        </div>
    </div>
  );
};

export default Banner;
