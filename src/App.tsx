import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page-container">
      <h1>Привет Storytel!</h1>
      <input type="text" />
      <input type="radio" name="sdfdd" id="2" />
      <input type="checkbox" name="sdf" id="3" />
    </div>
  );
}

export default App;
