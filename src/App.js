import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Contact from './Pages/Contact';
import Error from "./Error";
import './App.css';
export default class App extends React.Component {

      render(){
    return (
      <main>
          <Switch>
              <Route path="/" render={renderprops =>
                <Home {...renderprops} />} exact />
              <Route path="/about" render={renderprops =>
                <About {...renderprops} />} />
              <Route path="/contact" render={renderprops =>
                <Contact {...renderprops} />} />
              <Route path="/login" render={renderprops =>
                <Login {...renderprops} />} />
              <Route render={renderprops =>
                <Error {...renderprops} />} />
          </Switch>
      </main>
    )
    };
};