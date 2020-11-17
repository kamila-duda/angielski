import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Categories from './features/Categories';
import TestPage from './features/TestPage';
import { toCategories, toTest } from './routes';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path={toTest()}>
          <TestPage/>
        </Route>
        <Route path={toCategories()}>
        <Categories/>
        </Route>
        <Route path={"/"}>
        <Categories/>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
