import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [toDo, setToDO] = useState("");
  const handleChange = (e) => {
    setToDO(e.target.value);
    console.log("value", e.target.value);
  };

  const handleOnclick = () => {
    console.log(toDo);
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="headerText">
            <h3>Daily UI Todo List</h3>
            <p>practice Design Everyday</p>
          </div>
          <div className="headerProfile"></div>
        </div>
        <div className="content">
          <div className="checkBox">
            <input type="checkbox" />
            <label htmlFor="checkBox">Some Thee</label>
          </div>
          <div className="checkBox">
            <input type="checkbox" />
            <label htmlFor="checkBox">Some Thee</label>
          </div>
          <div className="checkBox">
            <input type="checkbox" />
            <label htmlFor="checkBox">Some Thee</label>
          </div>
        </div>
        <div className="actionBox">
          <input
            type="text"
            placeholder="notes..."
            className="textBox"
            onChange={handleChange}
            value={toDo}
          />
          <button type="button" onClick={handleOnclick}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
