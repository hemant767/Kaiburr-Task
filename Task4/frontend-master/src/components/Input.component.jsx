import React from "react";

const Input = ({
  value,
  setFunction,
  placeholder
}) => {
  return (
    <div className="inputBlock">
      <span>{placeholder}</span>
      <input
        value={value}
        onChange={(event) => setFunction(event.target.value)}
        type="text"
        placeholder={`Enter ${placeholder}`}
      />
      
    </div>
  ); 
};

export default Input;
