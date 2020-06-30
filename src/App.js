import React from "react";
import Home from "./Pages/Home";
import { Route, Switch } from 'react-router-dom';
import About from "./Pages/About";
import Belief from "./Pages/Belief";
import Gallery from "./Pages/Gallery";
import Team from "./Pages/Team";
import Give from "./Pages/Give";
import Error from "./Error";
export default class App extends React.Component {
    render(){
    return (
      <main>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/belief" component={Belief} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/team" component={Team} />
              <Route path="/give" component={Give} />
              <Route component={Error} />
          </Switch>
      </main>
    )
    }
}