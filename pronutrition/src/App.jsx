import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import Search from "./components/search";
import foodData from "./resources/FoodData";



function App() {
  const [search, setSearch] = useState("");

  let filteredData = foodData
    .filter((e) => {
      return e.name.toLowerCase().includes(search.toLowerCase());
    })
  return (
    <div className="body">
      <h1>PRO NUTRITION</h1>
      <Search setSearch={setSearch} />
      {filteredData.length==0 ? <h1>No results Found</h1> : filteredData.map((e, i) => {
          return <FoodBox data={e} index={i} />;
        })}
    </div>
  );
}

export default App;
