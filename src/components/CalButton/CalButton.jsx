import React from "react";

const CalButton = ({ name, onButtonClick }) => {
  return (
    <button
      className="btn btn-outline-primary m-1"
      name={name}
      onClick={onButtonClick}
    >
      {name}
    </button>
  );
};

export default CalButton;