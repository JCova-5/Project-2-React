import React from 'react';
import './App.css';
import Nav from './Nav.js';
import TeamPage from './TeamPage';
import PlayerPage from './PlayerPage';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/teampage' component={TeamPage} />
            <Route path='playerPage' component={PlayerPage} />
         </Switch>
      </div>
    </Router>  

     
    
  );
}

const Home = () => (
  <div>
    <h1>My NBA-I</h1>
  </div>
);

export default App;
