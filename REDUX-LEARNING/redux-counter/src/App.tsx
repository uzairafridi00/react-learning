import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./features/counter";

function App() {
  // const {value} = useSelector(state => state.counter);

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The Count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
    </div>
  );
}

export default App;
