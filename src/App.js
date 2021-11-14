import { useState } from 'react';
import './App.css';
import Break from './components/break';
import Session from './components/session';

function App() {
  
  return (
    <div className="App">
      <Break />
      <Session />
    </div>
  );
}

export default App;
