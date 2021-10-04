import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";
import ProjectCreate from "./projects/ProjectCreate";
import BillCreate from "./bills/BillCreate";
import NotFound from "./NotFound";

function Layout () {

  return (
    <div className="container-fluid">
      <Header />
      
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route exact path="/projects/new">
          <ProjectCreate />
        </Route>
        <Route exact path="/projects">
          <Redirect to={'/'} />
        </Route>
        <Route exact path="/bills/new">
          <BillCreate />
        </Route>
        <Route exact path="/bills">
          <Redirect to={'/'} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default Layout;