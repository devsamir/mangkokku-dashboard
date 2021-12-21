import React from "react";

const IconButton = ({ children, className, tooltip }) => {
  return (
    <button
      className={`relative p-1 rounded-full transition-all duration-300 hover:bg-gray-100 active:bg-gray-200 ${className} group`}
    >
      {children}
      <div
        className={`absolute bottom-0 left-0 translate-y-[100%] text-xs bg-gray-900 bg-opacity-50 p-2 rounded whitespace-nowrap 
        text-white z-50 transition-all duration-300 invisible opacity-0 transform scale-90 group-hover:scale-100 group-hover:visible group-hover:opacity-100`}
      >
        {tooltip}
      </div>
    </button>
  );
};

export default IconButton;
