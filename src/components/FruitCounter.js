import React from 'react';

function FruitCounter({name, image, item, addOne, subtractOne ,value}) {

  return (
    <>
      <label htmlFor="counter"><img src={image} alt="" className="fruit-image"/>{item}
        <button
          type="button"
          name={name}
          onClick={subtractOne}
          disabled={value <= 0}
        >-</button>
        <input
          name={name}
          type="number"
          id="counter"
          value={value}
        />
        <button
          type="button"
          name={name}
          onClick={addOne}
        >+</button>
      </label>
    </>
  );
}

export default FruitCounter;