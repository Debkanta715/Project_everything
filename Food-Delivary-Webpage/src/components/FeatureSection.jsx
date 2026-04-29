import React from "react";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[80px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 font-medium px-2 py-1 uppercase ">
          FEATURE
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10  lg:mt-20 tracking">
          Easily build <span className="bg-gradient-to-r  from-orange-500 to-orange-800 text-transparent bg-clip-text ">your code</span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {FeatureSection.map((feature, idx)=>(
          <div className ='w-full sm:1/2 lg:w-1/3'key={idx}>
             <div className="flex">
              <div className="flex mx-6 w-10 p-2 bg-neutral-900 text-oange-700 justify-center"></div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
