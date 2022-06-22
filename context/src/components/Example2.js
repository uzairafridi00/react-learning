import React, { useState } from "react";

export const Parent = () => {
  const [userName, setUserName] = useState("Uzair");
  return (
    <div>
      {userName}
      <Child setUserName={setUserName} />
    </div>
  );
};

export const Child = (props) => {
  return <GrandChild setUserName={props.setUserName} />;
};

export const GrandChild = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          setUserName("Uzair Afridi");
        }}
      ></button>
    </div>
  );
};
