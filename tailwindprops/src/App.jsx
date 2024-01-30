import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "chai",
  };
  let newArr = [1,2,3]


  return (
    <>
      <h1 className="bg-green-400 mb-4 rounded-lg">tailwind test</h1>
      <Card username="Ram"/>
      <Card username="kapil" btnTxt = "Click Me" />
    </>
  );
}

export default App;
