import React , { Component }from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About'; 
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';

export default class App extends Component{


  render()
  {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/Contact' component={Contact} />
      </BrowserRouter>
    </div>
  );
  }
}













