
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './Home';
import {Switch,Route,Redirect} from 'react-router-dom';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Navbar from './Nvabar';
import CommonPage from './CommonPage';
import DrawerS from './DrawerS';

// import bg from './Image/bg.jpg';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist//js/bootstrap.bundle";
import ReactGA from 'react-ga';

import React,{useEffect} from 'react';




function App() {
  useEffect(() => {
    ReactGA.initialize('UA-221131237-1');
    // To Report Page View : window.location.pathname + window.location.search
    // ReactGA.pageview("/contact");
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(window.location.pathname + window.location.search,"path of output") 
  })

  return (
    <div className="App">
{/* <Navbar /> */}
<DrawerS />

<Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/about" component={About} />
<Route exact path="/service" component={Service} />
<Route exact path="/contact" component={Contact} />
<Redirect to="/" />

</Switch>




    </div>
  );
}

export default App;
