import React from 'react';

function Input({children, className, name, type, value, checked, handleChange}) {
  return (
    <label htmlFor={name} className={className}>{type === "text" && children}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      {type === "radio" && children}
    </label>
  );
}

export default Input;