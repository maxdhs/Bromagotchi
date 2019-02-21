import React, { Component } from 'react';
import './App.css';
import Bro from './components/Bro'
import { Switch, Route } from 'react-router-dom';
import { Welcome } from './components/Welcome'



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/bro' component={Bro} />
          <Route exact path='/' component={Welcome} />
        </Switch>
      </div>

    );
  }
}

export default App;
