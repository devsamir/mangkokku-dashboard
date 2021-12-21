import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

const Button = ({ onClick, open, icon, text, active }) => {
  return (
    <>
      <button
        className={`flex items-center rounded border-none py-3 font-medium w-full my-2 ${
          active
            ? "bg-gray-100"
            : " bg-white hover:bg-gray-100 transition-color duration-300"
        } gap-4 text-gray-500 custom-drawer-button`}
        onClick={onClick.bind(this, !open)}
      >
        <span
          style={{ minWidth: "4rem", maxWidth: "4rem" }}
          className="flex justify-center"
        >
          {icon}
        </span>
        <span>{text}</span>
        <HiChevronRight
          className={`ml-auto mr-2 text-xl transform transition-transform duration-300 ${
            open ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>
    </>
  );
};
const Container = ({ children, open }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }
    return child;
  });
  return (
    <>
      <div
        className={`${
          open ? "max-h-96" : "max-h-0"
        } duration-300 transition-all overflow-hidden`}
      >
        <div>{childrenWithProps}</div>
      </div>
    </>
  );
};
const Link = ({ href, active, text }) => {
  return (
    <ReactLink to={href}>
      <button
        className={`${
          active
            ? "bg-primary-400 text-white"
            : "text-gray-500 bg-white hover:bg-gray-100 transition-color duration-300"
        } rounded border-none py-3 pl-20 font-medium w-full custom-drawer-button`}
      >
        <span className="flex justify-start">{text}</span>
      </button>
    </ReactLink>
  );
};
const SidebarDropdown = ({ onClick, open, children }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onClick, open });
    }
    return child;
  });
  return <div>{childrenWithProps}</div>;
};

const DrawerDropdown = { DropDown: SidebarDropdown, Button, Container, Link };

export default DrawerDropdown;
