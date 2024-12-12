import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-black text-yellow-500 text-center text-sm py-2 px-4">
        <div className="flex items-center space-x-2">
            <span>WE ARE OPEN</span>
            <span>|</span>
            <span>7 DAYS A WEEK</span>
        </div>
        <div className="text-right text-sm text-gray-300 space-y-1">
            <p>9400 Penatibus Road</p>
            <p className="text-yellow-500 font-semibold">+1-366-253-7950</p>
        </div>
    </div>
  );
};

export default Banner;
