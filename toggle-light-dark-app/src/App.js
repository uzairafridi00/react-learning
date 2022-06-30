import { createContext, useState } from "react";
import "./App.css";

import Form from "./components/Form";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <Form />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
