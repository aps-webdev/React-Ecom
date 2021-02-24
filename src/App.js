import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './container/homepage/homepage.container.jsx';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
