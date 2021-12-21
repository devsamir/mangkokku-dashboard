import React from "react";
import { Link } from "react-router-dom";

const DrawerButton = ({ href, text, active, icon }) => {
  return (
    <Link to={href}>
      <button
        className={`flex items-center rounded border-none py-3 font-medium w-full ${
          active
            ? "bg-primary-400 text-white"
            : "text-gray-500 bg-white  hover:bg-gray-100 transition-color duration-300"
        }  gap-4 custom-drawer-button`}
      >
        <span
          style={{ minWidth: "4rem", maxWidth: "4rem" }}
          className="flex justify-center custom-icon"
        >
          {icon}
        </span>
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default DrawerButton;
