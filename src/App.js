import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./common/Main";
import TestCategories from "./features/TestCategories";
import Footer from "./features/Footer";
import HomePage from "./features/HomePage";
import Navigation from "./features/Navigation";
import TestPage from "./features/TestCategories/TestPage";
import {
  toCategories,
  toHomePage,
  toRepetition,
  toTest,
  toWords,
} from "./routes";
import WordsPage from "./features/WordsPage";
import WordsSelectedPage from "./features/WordsPage/WordsSelectedPage";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Main>
        <Switch>
          <Route path={toTest()}>
            <TestPage />
          </Route>
          <Route exact path={toCategories()}>
            <TestCategories />
          </Route>
          <Route exact path={toRepetition()}>
            <WordsPage />
          </Route>
          <Route exact path={toWords()}>
            <WordsSelectedPage />
          </Route>
          <Route path={toHomePage()}>
            <HomePage />
          </Route>
          <Route path={"/"}>
            <HomePage />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </HashRouter>
  );
}

export default App;
