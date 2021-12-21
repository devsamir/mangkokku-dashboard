import React from "react";
import { FaSpinner } from "react-icons/fa";
import PropTypes from "prop-types";

const primaryStyle = {
  button:
    "bg-primary-400 text-white hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-500/30 active:shadow-none",
  loading: "bg-primary-400 text-white shadow-none",
};
const secondaryStyle = {
  button:
    "bg-secondary-400 text-white hover:bg-secondary-500 hover:shadow-lg hover:shadow-secondary-500/30 active:shadow-none",
  loading: "bg-secondary-400 text-white shadow-none",
};
const blueStyle = {
  button:
    "bg-blue-400 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:shadow-none",
  loading: "bg-blue-400 text-white shadow-none",
};
const redStyle = {
  button:
    "bg-red-400 text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/30 active:shadow-none",
  loading: "bg-red-400 text-white shadow-none",
};
const orangeStyle = {
  button:
    "bg-orange-400 text-white hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 active:shadow-none",
  loading: "bg-orange-400 text-white shadow-none",
};
const greenStyle = {
  button:
    "bg-green-400 text-white hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/30 active:shadow-none",
  loading: "bg-green-400 text-white shadow-none",
};

const Button = ({
  children,
  className,
  loading,
  onClick,
  type,
  iconEnd,
  iconStart,
  color,
  disabled,
}) => {
  let style = { button: "", loading: "" };
  if (color === "primary") style = { ...primaryStyle };
  if (color === "secondary") style = { ...secondaryStyle };
  if (color === "blue") style = { ...blueStyle };
  if (color === "green") style = { ...greenStyle };
  if (color === "orange") style = { ...orangeStyle };
  if (color === "red") style = { ...redStyle };
  return (
    <button
      type={type || "button"}
      disabled={loading || disabled}
      onClick={onClick}
      className={`px-8 md:px-4 py-2 rounded transition-all duration-300 transform relative text-sm flex items-center gap-2 font-medium ${
        style.button
      } ${className || ""} ${
        loading || disabled ? "cursor-default pointer-events-none" : ""
      }`}
    >
      {iconStart && <span>{iconStart}</span>}
      {children}
      {iconEnd && <span>{iconEnd}</span>}
      {loading && (
        <div
          className={`absolute top-0 left-0 w-full h-full rounded flex justify-center items-center ${style.loading} ${className}`}
        >
          <FaSpinner className="animate-spin text-base" />
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  iconEnd: PropTypes.element,
  iconStart: PropTypes.element,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
