import Todo from "./components/Todo";
import NoteState from "./context/note/NoteState";
import Home from "./components/Home";

function App() {
  return (
    <NoteState>
      <div>
        <h1>My Todos</h1>
        <Todo text="Learn Python" />
        <Todo text="Learn C/C++" />
        <Todo text="Learn React" />
        <br />
        <Home />
      </div>
    </NoteState>
  );
}

export default App;
