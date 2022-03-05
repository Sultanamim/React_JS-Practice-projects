import React from 'react';
import './App.css';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
