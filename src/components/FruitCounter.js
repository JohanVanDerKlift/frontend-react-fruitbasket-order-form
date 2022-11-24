import React from 'react';

function FruitCounter({name, image, item, handleFruitCount, addOne, subtractOne ,value}) {

  return (
    <>
      <div className="container"><img src={image} alt="" className="fruit-image"/><span className="fruit">{item}</span>
        <button
          type="button"
          className="countButton"
          name={name}
          onClick={(e) => handleFruitCount(e, -1)}
          disabled={value <= 0}
        >-</button>
        <div className="count">{value}</div>
        <button
          type="button"
          className="countButton"
          name={name}
          onClick={(e) => handleFruitCount(e, +1)}
        >+</button>
      </div>
    </>
  );
}

export default FruitCounter;