import React, { useEffect, useState } from "react";
import Service from "../../../components/service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto text-center my-16">
      <h4 className="text-[#FF3811] font-bold">Services</h4>
      <h2 className="text-3xl font-medium my-4">Our Service Area</h2>
      <p className="capitalize">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br />
        words which do not look even slightly believable.
      </p>
      <div className='grid grid-cols-3 gap-20 my-16'>
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div>
        <button className="text-[#FF3811] border-2 border-[#FF3811] hover:bg-[#FF3811] hover:text-white focus:ring-4 focus:ring-primary-300 font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">More Services</button>
      </div>
    </div>
  );
};

export default Services;
