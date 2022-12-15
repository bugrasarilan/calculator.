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

  return (
    <div className="upcont">
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
