import React, {FC} from "react";
import "./App.css";
import { EnumAndType} from "./components/EnumAndType";
import { Person } from "./components/Person";
import { PersonA } from "./components/PersonA";

import { HairColor } from "./enums/Enums";

const App: FC = () => {
  return (
    <>
      <div>Hello TypeScript Application</div>
      {/* <Person name="Uzair" age={22} email="uzair@gmail.com"/> */}
      {/* <PersonA name="Uzair" age={22} email="uzair@gmail.com"/> */}
      <EnumAndType  name="Uzair" age={22} email="uzair@gmail.com" hairColor={HairColor.Blonde}/>
    </>
  );
};

export default App;
