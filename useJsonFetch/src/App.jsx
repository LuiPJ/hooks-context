import React from "react";

import Data from "./Components/Data";
import Error from "./Components/Error";
import Loading from "./Components/Loading";

import "./main.css";

function App() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "30", color: "#008B8B" }}>HOME</h1>
      <Data />
      <Error />
      <Loading />
    </div>
  );
}

export default App;
