import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-1 m-2 bg-gray-200 rounded-lg font-bold whitespace-nowrap">
        {name}
      </button>
    </div>
  );
};

export default Button;
