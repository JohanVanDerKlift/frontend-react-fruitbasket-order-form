import React from 'react';

function Input({children, name, type, value, handleChange}) {
  return (
    <label htmlFor={name} className="label">{children}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

export default Input;