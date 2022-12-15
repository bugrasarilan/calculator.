import React from "react";

function Operator({number, setNumber }) {
  function clear() {
    setNumber(0);
  }
  const mult = () => {
    setNumber(-number);
  };
  const percentage = () => {
    setNumber(number / 100);
  };
   if (number.toString().length > 8) {
     number = number.toString().slice(0, 8);
   }
  return (
    <div> 
      <h2 className="write"> {number} </h2>
      <button className="up" onClick={clear}>
        AC
      </button>
      <button className="up" onClick={mult}>
        +/-
      </button>
      <button className="up" onClick={percentage}>
        %
      </button>
    </div>
  );
}

export default Operator;
