import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
