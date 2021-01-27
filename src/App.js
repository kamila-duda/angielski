import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './common/Main';
import Categories from './features/Categories';
import Footer from './features/Footer';
import TestPage from './features/TestPage';
import { toCategories, toTest } from './routes';

function App() {
  return (
    <HashRouter>
      <Main>
      <Switch>
        <Route path={toTest()}>
          <TestPage/>
        </Route>
        <Route exact path={toCategories()}>
        <Categories/>
        </Route>
        <Route path={"/"}>
        <Categories/>
        </Route>
      </Switch>
      </Main>
      <Footer/>
    </HashRouter>
  );
}

export default App;
