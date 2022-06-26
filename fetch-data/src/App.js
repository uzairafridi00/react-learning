import "./App.css";
import Fetch from "./components/Fetch";
import Axios from "./components/Axios";
import Swr from "./components/Swr";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <h1>
        {/* <Fetch /> */}
        {/* <Axios /> */}
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Swr />
        </Suspense>
      </h1>
    </div>
  );
}

export default App;
