import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import DrawerOverview from './Drawer/Drawer'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/drawer">
          <DrawerOverview />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
