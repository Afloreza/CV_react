import React from 'react';
import Headerange from "./components/header";
import Footerange from "./components/footer";
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Headerange></Headerange>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> 
       <Footerange></Footerange>
      
      </header>

    </div>
    
    
  );
  
}


export default App;
