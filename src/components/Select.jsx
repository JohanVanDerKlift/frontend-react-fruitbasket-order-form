import React from 'react';

function Select(children, name, handleChange, value, options) {
  return (
    <>
      <label htmlFor={name} className="label">{children}<br/>
      <select name={name} id={name} onChange={handleChange} value={value}>
        {options.map((option) => (
          <option value={option.value}>{option.value}</option>
        ))}
      </select>
      </label>
    </>
  );
}

export default Select;