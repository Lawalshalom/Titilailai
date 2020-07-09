import React from "react";
import Home from "./Pages/Home";
import { Route, Switch } from 'react-router-dom';
import About from "./Pages/About";
import Belief from "./Pages/Belief";
import Gallery from "./Pages/Gallery";
import Team from "./Pages/Team";
import Give from "./Pages/Give";
import Stories from "./Pages/Stories";
import Testimonies from "./Pages/Testimonies";
import Confession from "./Pages/Confession";
import Events from "./Pages/Events";
import Sermon from "./Pages/Sermon";
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
              <Route path="/stories" component={Stories} />
              <Route path="/testimonies" component={Testimonies} />
              <Route path="/confessions" component={Confession} />
              <Route path="/events" component={Events} />
              <Route path="/sermon" component={Sermon} />
              <Route component={Error} />
          </Switch>
      </main>
    )
    }
}