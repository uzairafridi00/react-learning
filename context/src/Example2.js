import React, { useState, createContext } from "react";

const AppContext = createContext(null);

export const Parent = () => {
  const [userName, setUserName] = useState("Uzair");
  return (
    <AppContext.Provider value={{userName, setUserName}}>
      <div>
        {userName}
        <Child setUserName={setUserName} />
      </div>
    </AppContext.Provider>
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
