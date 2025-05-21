import React from "react";

const GetBloodComp = ({ contextNum, icon, contextText }) => {
  return (
    <div className="relative "> 
      <div className="absolute transform  -translate-x-5 z-0 w-[127px] h-[127px] border-[6px] flex items-center justify-center rounded-full">
        <h1 className="font-bold text-6xl text-shadow-lg text-black">{contextNum}</h1>
      </div>

      
      <div className="absolute transform  translate-x-12 w-[360px] h-[360px] flex flex-col items-center justify-center p-12 shadow-2xl rounded-full z-10 bg-white">
        <div className="text-center mb-4">
          <img
            srcSet={icon}
            className="rounded-full w-24 h-24 object-cover"
            alt="Get Blood Icon"
          />
        </div>

        <p className="text-center text-gray-700">{contextText}</p>
      </div>
    </div>
  );
};

export default GetBloodComp;
