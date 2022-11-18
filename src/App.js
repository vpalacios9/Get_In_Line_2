import { Component } from 'react';  
import './App.css';

import HostCreateQueue from './components/HostCreateQueue';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="getinline-page">
        <Navbar/>
        <HostCreateQueue/>
      </div>
    </div>
  );
}

export default App;
