import React from 'react';

function FruitCounter({image, item}) {
  return (
    <>
      <label htmlFor="counter"><img src={image} alt="" className="fruit-image"/>{item}
        <button>-</button>
        <input type="text" id="counter"/>
        <button>+</button>
      </label>
    </>
  );
}

export default FruitCounter;