import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Top from './containers/Top';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path='/' component={Top}/>
        </Switch>
      </div>
    );
  }
}

export default App;
