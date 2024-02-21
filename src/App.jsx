import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tourData, setTourData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setTourData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Tours Project Setup</h2>;
      <main>
        <Tours data={tourData} setTourData={setTourData}/>
      </main>
    </>
  );
}

export default App;
