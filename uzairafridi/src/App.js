import "./App.css";
import Switcher from "./pages/switcher/Switcher";

function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center transition duration-200 dark:bg-gray-900">
      <Switcher />
    </div>
    </>
  );
}

export default App;
