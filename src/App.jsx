import React, { useState } from "react";
import "./App.css";
import LinkList from "./components/LinkList";
import CreateLink from "./components/CreateLink";

import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
