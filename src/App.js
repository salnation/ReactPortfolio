import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components/sideNav'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Project from './components/project'
import Contact from './components/contact'

if (document.documentElement.clientWidth < 480) {
  document.querySelector("meta[name=viewport]").setAttribute(
    'content',
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
}
function App() {
  return (


    <div className="App">
      
    </div>
  );
}

export default App;
