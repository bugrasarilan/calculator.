import React from "react";
// import { useState } from "react";

function Number({ number, setNumber }) {
  function inputNumber(e) {
    const input = e.target.value;
    if (number === 0) {
      setNumber(input);
    } else {
      setNumber(number + input);
    }
  }

  return (
    <div className="numbercontainer">
      <button className="number" onClick={inputNumber} value={7}>
        7
      </button>
      <button className="number" onClick={inputNumber} value={8}>
        8
      </button>
      <button className="number" onClick={inputNumber} value={9}>
        9
      </button>

      <button className="number" onClick={inputNumber} value={4}>
        4
      </button>
      <button className="number" onClick={inputNumber} value={5}>
        5
      </button>
      <button className="number" onClick={inputNumber} value={6}>
        6
      </button>

      <button className="number" onClick={inputNumber} value={1}>
        1
      </button>
      <button className="number" onClick={inputNumber} value={2}>
        2
      </button>
      <button className="number" onClick={inputNumber} value={3}>
        3
      </button>

      <button className="number" onClick={inputNumber} value={0} id="zero">
        0
      </button>
      <button className="number" onClick={inputNumber} value={"."}>
        ,
      </button>
    </div>
  );
}

export default Number;
