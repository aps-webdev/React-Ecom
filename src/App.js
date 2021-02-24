import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './container/homepage/homepage.container.jsx';
import ShopPage from './container/shop/shop.container.jsx';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
