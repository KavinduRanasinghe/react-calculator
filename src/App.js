import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CalButton from "./components/CalButton/CalButton";
import Header from "./components/Header/Header.jsx"
function App() {

  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setInput(input + e.target.name);
  }

  const clear = () => {
    setInput("");
  }

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    }
    catch (error) {
      setInput("Error");
    }
  }
  const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7' ,'8', '9', '*', '0', 'c', '=', '/'];
  const buttonRows = []

  for (let i = 0; i < buttons.length; i += 4) {

    buttonRows.push(buttons.slice(i, i + 4))


  }
  return (
    <div className="calculator" style={{ width: "short" }}>
      <Header/>

      <form>
        <input type="text" value={input} className="form-control mb-4" readOnly />
      </form>

      <div className="keypad">

        {
          buttonRows.map((row, rowIndex) => (
            <div key={rowIndex} className="button-row">
              {row.map((button, buttonIndex) => (
                <CalButton
                  key={buttonIndex}
                  name={button}
                  onButtonClick={button === "c" ? clear : button === "=" ? calculate : handleClick}
                />

              ))}
            </div>
          ))}

      </div>
    </div>
  )

}

export default App;