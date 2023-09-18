import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navi from './components/Navi';
import Detail from './routes/Detail';


function App(){
  return (
    <HashRouter>  
        <Navi />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path= "/movie_detail" component={Detail} />
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