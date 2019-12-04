import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './HomePage/Home';
import findHouse from './FindHousing/findHouse';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PageError from './HomePage/PageError';
import PostHousing from './PostHouse/PostHousing';



function App() {
    return (

      <BrowserRouter>
        <div>

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/findHouse" component={findHouse} exact />
            <Route path="/PostHousing" component={PostHousing} exact />
            <Route component={PageError} />

          </Switch>

        </div>

    </BrowserRouter>

    );
  }

export default App;
