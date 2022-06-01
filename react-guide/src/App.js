import './App.css';
import Person from "./Person/Person";
import Student from './Person/Student';

function App() {
  return (
    <div className="App">
      <h1>Hello I am React App</h1>
      <Person />
      <Student name="Uzair" school="Peshawar Model" age="10"/>
      <Student name="Ahmad" school="Beacon" age="15">My Hobbies: Gaming</Student>
      <Student name="Salar" school="Pak Turk" age="14"/>
    </div>
  );
}

export default App;
