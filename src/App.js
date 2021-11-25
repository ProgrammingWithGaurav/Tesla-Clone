import React from 'react';
 // eslint-disable-next-line
 import { Counter } from './features/counter/Counter';
 import './App.css';
 // eslint-disable-next-line
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
