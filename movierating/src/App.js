import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';


function App(){
  return (
    <HashRouter>  
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
 
    </HashRouter>
  );
}

export default App;




/*

     <Route path="/home">
        <h1>Home</h1>
      </Route>
     
      <Route path="/home/introduction">
        <h1>Introduction</h1>
      </Route>

      <Route path = "/about">
        <h1>About</h1>
      </Route>



        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />


--<Route path="/home">
<h1> home </h1>
</Route> 
<Route path="/home/introduction">
<h1> introduction </h1>
</Route> 
<Route path="/about">
<h1>About</h1>
</Route> 
->*/