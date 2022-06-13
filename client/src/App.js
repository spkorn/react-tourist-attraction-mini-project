import "./App.css";
import Header from "./components/Header";
import TouristAttratctionList from "./components/TouristAttractionList";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [destinations, setDestination] = useState([]);

  return (
    <div className="App">
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        setDestination={setDestination}
      />
      <TouristAttratctionList
        destinations={destinations}
        setSearchText={setSearchText}
        searchText={searchText}
      />
    </div>
  );
}

export default App;
