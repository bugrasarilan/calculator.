import React from "react";
// import { useState } from "react";

function Process({
  number,
  output,
  setOutput,
  setNumber,
  beforenumber,
  setBeforenumber,
}) {
  const account = (e) => {
    setOutput(e.target.value);
    setBeforenumber(number);
    setNumber(0);
  };
  const calculate = () => {
    
    if (output === "/") {
      setNumber(beforenumber / number);
    } else if (output === "*") {
      setNumber(beforenumber * number);
    } else if (output === "+") {
      setNumber(+beforenumber + +number);
    } else if (output === "-") {
      setNumber(beforenumber - number);
    }
    console.log(beforenumber);
    console.log(number);
    console.log(output);
  };

  return (
    <div className="processcontainer">
      <button className="process" onClick={account} value="/">
        /
      </button>
      <button className="process" onClick={account} value="*">
        x
      </button>
      <button className="process" onClick={account} value="-">
        -
      </button>
      <button className="process" onClick={account} value="+">
        +
      </button>
      <button className="process" onClick={calculate}>
        =
      </button>
    </div>
  );
}

export default Process;
