/* eslint-disable react/prop-types */

import education from "../assets/education.svg";

function ServiceCard({ service, description, price, provider }) {
  return (
      <div className="flex flex-col justify-start items-center w-1/4 p-4 border border-gray-300 rounded-md overflow-hidden group-hover:shadow-lg group-hover:bg-gray-100 transition-all duration-300">
        <img src={education} alt="" className="w-full h-full object-cover " />

        <h1 className="mb-2 text-2xl font-semibold ">Service: <span className="text-white text-lg font-normal hover:text-blue-900 "> {service}</span></h1>
        <h1 className="mb-2 text-2xl font-semibold ">Description: <span className="text-white text-lg font-normal hover:text-blue-900 "> {description}</span></h1>
        <h1 className="mb-2 text-2xl font-semibold text-left mr-12">Price: <span className="text-white text-lg font-normal hover:text-blue-900 "> ${price}</span></h1>
        <h1 className="mb-2 text-2xl font-semibold ">Provider: <span className="text-white text-lg font-normal hover:text-blue-900 "> {provider}</span></h1>
      </div>
  );
}

export default ServiceCard;
