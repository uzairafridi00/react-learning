import React, {FC} from "react";
import "./App.css";
import { Person } from "./components/Person";
import { PersonA } from "./components/PersonA";

const App: FC = () => {
  return (
    <>
      <div>Hello TypeScript App</div>
      {/* <Person name="Uzair" age={22} email="uzair@gmail.com"/> */}
      <PersonA name="Uzair" age={22} email="uzair@gmail.com"/>
    </>
  );
};

export default App;
