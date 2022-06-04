import "./App.css";
import Person from "./Person/Person";
import Student from "./Person/Student";

function App() {
  // State is Manage inside the component and props outside the component
  const state = {
    persons: [
      { name: "Uzair", age: 32 },
      { name: "Ahmad", age: 10 },
      { name: "Salar", age: 14 },
    ],
    otherState: "Some other Value",
  };

  const switchNameHandler = () => {
    // console.log('was Clicked');
    //DON'T DO THIS => this.state.persons[0].name = "Umair";
    this.setState({
      persons: [
        { name: "Omar", age: 32 },
        { name: "Ali", age: 10 },
        { name: "Salman", age: 14 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hello I am React App</h1>
      <Person />
      <button onClick={switchNameHandler}>Switch Name</button>
      {/* Now we will render the data using state object */}
      <Student name={state.persons[0].name} age={state.persons[0].age} />
      <Student name={state.persons[1].name} age={state.persons[1].age}>
        My Hobbies: Gaming
      </Student>
      <Student name={state.persons[2].name} age={state.persons[2].age} />
      {/* <Student name="Uzair" school="Peshawar Model" age="10"/>
      <Student name="Ahmad" school="Beacon" age="15">My Hobbies: Gaming</Student>
      <Student name="Salar" school="Pak Turk" age="14"/> */}
    </div>
  );
}

export default App;
