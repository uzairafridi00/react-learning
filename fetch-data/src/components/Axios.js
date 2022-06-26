import React, { useState, useEffect } from "react";
import axios from "axios";

function Axios() {
  const [data, setData] = useState(null);

  useEffect(() => {
    
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
        setData(response.data.message)
    });
  }, []);
  return (
    <>
      <div>
        <h1>Axios API</h1>
        <img src={data} alt="Image Loading..." />
      </div>
    </>
  );
}

export default Axios;
