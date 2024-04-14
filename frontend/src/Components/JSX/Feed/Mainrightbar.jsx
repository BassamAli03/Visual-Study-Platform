import React from 'react';
import "../../CSS/Feed/Mainpagerightbar.css"

const VerticalStaticBar = () => {
  return (
    <div id='mainrightbar' className="mt-20 position-fixed top-0 right-0 h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className='container mb-32'>
      <div className="w-14 h-14 rounded-full bg-blue-500 mb-2"></div>
      <div className="w-14 h-14 rounded-full bg-blue-500 mb-2"></div>
      <div className="w-14 h-14 rounded-full bg-blue-500 mb-2"></div>
      </div>
  
      {/* Add more buttons as needed */}
    </div>
  );
};

export default VerticalStaticBar;
