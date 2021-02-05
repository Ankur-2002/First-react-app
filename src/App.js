import React from 'react';
import { Redirect, Route , Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Contact from './Contact';
import Home from './Home';
import Navbar from "./Navbar";
import Service from "./Service";
import About from "./About";
const App = ()=>{
  return (
    <>
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact  path="/service" component={Service}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/about" component={About}></Route>
      <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
}

export default App;
