import "./App.css";

import { UserProp } from "./interfaces/Interfaces";

function App() {
  const users = [
    { name: "Uzair", age: 21 },
    { name: "Umair", age: 19 },
    { name: "Zaid", age: 16 },
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

const User = (props: UserProp) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  );
};

export default App;
