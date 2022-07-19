import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

import { ChangeColor } from './components/ChangeColor';
import { Login } from './components/Login';
import { Profile } from './components/Profile';

function App() {

  const themeColor = useSelector<any>((state)=> state.theme.value);

  return (
    // <div style={{backgroundColor:themeColor}}>
      <div className='App'>
      <Profile />
      <Login />
      <ChangeColor />
    </div>
    // </div>
  );
}

export default App;
