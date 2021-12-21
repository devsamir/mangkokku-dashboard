import React from "react";
import { HiExclamation } from "react-icons/hi";

const TextField = React.forwardRef((props, ref) => {
  const { className, label, margin, error } = props;
  const newProps = {
    ...props,
    className: undefined,
    label: undefined,
    margin: undefined,
    error: undefined,
  };
  return (
    <div className={`flex flex-col ${margin}`}>
      <label className="text-xs font-medium mb-1">{label}</label>
      <input
        {...newProps}
        ref={ref}
        className={`rounded border border-gray-300 transition-all ring-0 focus:border-primary-500 focus:ring-4 focus:ring-primary-200 mb-1 ${className}`}
      />
      <small
        className={`text-red-500 text-sm flex gap-2 items-center ${
          error ? "visible" : "invisible"
        }`}
      >
        <HiExclamation />
        {error?.message}
      </small>
    </div>
  );
});

export default TextField;
