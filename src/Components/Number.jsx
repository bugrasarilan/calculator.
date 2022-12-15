import React from "react";

function Number({ number, setNumber }) {
  function InputNumber(e) {
    const input = e.target.value;
    if (number === 0) {
      setNumber(input);
    } else {
      setNumber(number + input);
    }
  }

  return (
    <div className="numbercontainer">
      <button className="number" onClick={InputNumber} value={7}>
        7
      </button>
      <button className="number" onClick={InputNumber} value={8}>
        8
      </button>
      <button className="number" onClick={InputNumber} value={9}>
        9
      </button> <br/>
      <button className="number" onClick={InputNumber} value={4}>
        4
      </button>
      <button className="number" onClick={InputNumber} value={5}>
        5
      </button>
      <button className="number" onClick={InputNumber} value={6}>
        6
      </button><br/>
      <button className="number" onClick={InputNumber} value={1}>
        1
      </button>
      <button className="number" onClick={InputNumber} value={2}>
        2
      </button>
      <button className="number" onClick={InputNumber} value={3}>
        3
      </button>
      <button className="number" onClick={InputNumber} value={0} id="zero">
        0
      </button>
      <button className="number" onClick={InputNumber} value={"."}>
        ,
      </button>
    </div>
  );
}

export default Number;
