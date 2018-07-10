import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Common/Header/Header';
import Top from './containers/Top';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path='/' component={Top}/>
        </Switch>
      </div>
    );
  }
}

export default App;
