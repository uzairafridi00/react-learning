import React from 'react';
import './App.css';
import { ChangeColor } from './components/ChangeColor';

import { Login } from './components/Login';
import { Profile } from './components/Profile';

function App() {
  return (
    <div>
      <div className='App'>
      <Profile />
      <Login />
      <ChangeColor />
    </div>
    </div>
  );
}

export default App;
