import React from "react";
import { HiCalendar, HiLocationMarker, HiPhone } from "react-icons/hi";

const AddressInfo = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-16">
      <div className="bg-gray-300 text-gray-900 p-16 rounded-md flex justify-between">
        <div className="flex items-center">
          <HiCalendar className="text-4xl mr-2"></HiCalendar>
          <div>
            <p className="text-sm font-medium">We are open monday-friday</p>
            <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="flex items-center">
          <HiPhone className="text-4xl mr-2"></HiPhone>
          <div>
            <p className="text-sm font-medium">Have a question?</p>
            <h3 className="text-2xl font-bold">+2546 251 2658</h3>
          </div>
        </div>
        <div className="flex items-center">
          <HiLocationMarker className="text-4xl mr-2"></HiLocationMarker>
          <div>
            <p className="text-sm font-medium">Need a repair? our address</p>
            <h3 className="text-2xl font-bold">Liza Street, New York</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
