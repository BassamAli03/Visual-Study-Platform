import React from 'react';

const VerticalStaticBar = () => {
  return (
    <div className="mt-20 position-fixed top-0 right-0 h-screen flex flex-col justify-center items-center bg-gray-200" style={{backgroundColor:"#6187bc8f"}}>
      <div className='container mb-32'>
      <div className="w-12 h-12 rounded-full bg-blue-500 mb-2"></div>
      <div className="w-12 h-12 rounded-full bg-blue-500 mb-2"></div>
      <div className="w-12 h-12 rounded-full bg-blue-500 mb-2"></div>
      </div>
  
      {/* Add more buttons as needed */}
    </div>
  );
};

export default VerticalStaticBar;
