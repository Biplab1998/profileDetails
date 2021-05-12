import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import axios from "./config/axios";

function App() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=30"
        );
        setDetails(response.data.results);
        // console.log(response.data.results);
        // console.log(response.data.results[2].name.first);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="main-div">
        {details.map((detail) => (
          <Home detail={detail} key={detail.phone} />
        ))}
      </div>
      <div className="footer">
        <h4>Developed By ~ Biplab Paul</h4>
      </div>
    </div>
  );
}

export default App;
