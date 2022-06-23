import React, { useState, useEffect } from "react";

function AwsApi() {
  const [lottery, setLottery] = useState([]);

  const getData = () => {
    fetch("https://b4afvfadjd.execute-api.us-east-2.amazonaws.com/manifestLiteAlpha/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLottery(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>React Fetch API Example</h2>
      <ul>
        {lottery.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default AwsApi;
