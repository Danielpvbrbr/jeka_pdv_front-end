import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home'
import ListaUsuarios from './ListaUsuarios'

export default function Routes(){
  return(
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/listUse" component={ListaUsuarios} />
          </Switch>
      </BrowserRouter>
  )
}