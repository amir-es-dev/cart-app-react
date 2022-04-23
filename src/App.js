import { useState } from "react";
import "./App.css";
import AddItem from "./Components/AddItem/AddItem";
import Bag from "./Components/Bag/Bag";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <AddItem data={data} setData={setData} />
      <Bag data={data} setData={setData} />
    </div>
  );
}

export default App;
