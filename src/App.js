import "./App.css";
import { useState } from "react";
import Number from "./Components/Number";
import Process from "./Components/Process";
import Operator from "./Components/Operator";

function App() {
  const [number, setNumber] = useState(0);
  const [beforenumber, setBeforenumber] = useState(0);
  const [output, setOutput] = useState();

  return (
    <div className="container">
      <Operator number={number} setNumber={setNumber} />
      <Number
        number={number}
        setNumber={setNumber}
        beforenumber={beforenumber}
        setBeforenumber={setBeforenumber}
        output={output}
        setOutput={setOutput}
      />
      <Process
        number={number}
        setNumber={setNumber}
        beforenumber={beforenumber}
        setBeforenumber={setBeforenumber}
        output={output}
        setOutput={setOutput}
      />
    </div>
  );
}

export default App;
