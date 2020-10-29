import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import Story from "./Pages/Story";
import Church from "./Pages/Church";
import Reception from './Pages/Reception';
import Gifts from "./Pages/Gifts";
import Photos from "./Pages/Photos";
import Error from "./Error";
import './App.css';
import AOS from 'aos';

export default class App extends React.Component {
componentDidMount(){
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 20, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease-in', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });
}
      render(){
    return (
      <main>
          <Switch>
              <Route path="/" render={renderprops =>
                <Home {...renderprops} />} exact />
              <Route path="/story" render={renderprops =>
                <Story {...renderprops} />} />
              <Route path="/reception" render={renderprops =>
                <Reception {...renderprops} />} />
              <Route path="/church" render={renderprops =>
                <Church {...renderprops} />} />
              <Route path="/gifts" render={renderprops =>
                  <Gifts {...renderprops} />} />
                <Route path="/photos" render={renderprops =>
                  <Photos {...renderprops} />} />
              <Route render={renderprops =>
                <Error {...renderprops} />} />
          </Switch>
      </main>
    )
    };
};