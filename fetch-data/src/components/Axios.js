import React, { useState, useEffect } from "react";
function Axios() {
  const [data, setData] = useState(null);

  useEffect(() => {
    
  }, []);
  return (
    <>
      <div>
        <h1>Fetch API</h1>
        <img src={data} alt="Image Loading..." />
      </div>
    </>
  );
}

export default Axios;
