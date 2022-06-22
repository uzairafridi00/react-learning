import React, { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

export const Parent = () => {
  const [userName, setUserName] = useState("Uzair");
  return (
    <AppContext.Provider value={{userName, setUserName}}>
      <div>
        {userName}
        <Child/>
      </div>
    </AppContext.Provider>
  );
};

export const Child = () => {
  return <GrandChild/>;
};

export const GrandChild = () => {
    // Now we don't need to do drilling of Components
    const {setUserName} = useContext(AppContext);
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
