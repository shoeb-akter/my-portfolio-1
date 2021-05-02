import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/Main/Main';
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route
} from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe';


function App() {
  return (
    <ReactRouter>
      <Main></Main>
    </ReactRouter>
  );
}

export default App;
