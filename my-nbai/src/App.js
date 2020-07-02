import React from 'react';
import './App.css';
import Nav from './Nav.js';
import TeamPage from './TeamPage';
import PlayerPage from './PlayerPage';
import About from './About';
import TeamInfo from './TeamInfo'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            {/* <Home /> */}
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/teampage' exact component={TeamPage} />
            <Route exact path='/teampage/:id' render={(routerProps) => <TeamInfo {...routerProps} />} />
            <Route path='/playerPage' component={PlayerPage} />
            
         </Switch>
      </div>
    </Router>  

     
    
  );
};



export default App;
