import React from "react";

export const Input = ({ name, label, value, handleChange }) => {
  return (
    <div className="custom-input input">
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        name={name}
        value={value}
        required
      />
      <label>{label}</label>
    </div>
  );
};
