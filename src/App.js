import { useState, useEffect } from "react";
import "./App.css";
import Bag from "./Components/Bag/Bag";
import Panel from "./Components/Panel/Panel";

function App() {
  const [data, setData] = useState([]);

  console.log(`app rendered`);
  console.log("data= ", data);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data"));
    if (localData) setData(localData);
    console.log("useeffect in app executed");
  }, []);

  return (
    <div className="App">
      <Panel data={data} setData={setData} editModal="" setEditModal="" />
      <Bag data={data} setData={setData} />
    </div>
  );
}

export default App;
