import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [reverse, setReverse] = useState("");

  const handleChange = ({ target: { value } }) => setText(value);

  const handleSubmint = async (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/reverse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then((response) => response.json())
      .then((data) => setReverse(data.text));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <h1>{reverse}</h1>
          <input value={text} onChange={handleChange} />
          <button onClick={handleSubmint}>Submint</button>
        </form>
      </header>
    </div>
  );
};

export default App;
