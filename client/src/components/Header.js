import "./Header.css";
import axios from "axios";
import { useEffect } from "react";

function Header(props) {
  const { searchText, setSearchText, setDestination } = props;

  const getTouristAttractions = async () => {
    const results = await axios.get(
      `http://localhost:4001/trips?keywords=${searchText}`
    );
    console.log(results.data.data);
    setDestination(results.data.data);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    //getTouristAttractions();
    let timerId;
    timerId = setTimeout(getTouristAttractions, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchText]);

  return (
    <header>
      <h1>เที่ยวไหนดี</h1>
      <div className="searchBox">
        <label>
          ค้นหาที่เที่ยว
          <br />
          <input
            id="touristAttractionName"
            name="touristAttractionName"
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
            onChange={handleSearchTextChange}
            value={searchText}
          />
        </label>
      </div>
    </header>
  );
}

export default Header;
