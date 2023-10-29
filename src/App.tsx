import React from 'react';
import './App.css';
import { Header } from './header/Header';
import { Profile } from './profile/Profile';
import { Menu } from './menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Profile />
    </div>
  );
}

export default App;
