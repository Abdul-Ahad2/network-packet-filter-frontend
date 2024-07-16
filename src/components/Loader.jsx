import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
    </div>
  );
};

export default Loader;