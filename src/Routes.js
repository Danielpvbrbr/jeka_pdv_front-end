import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home'
import Estoque from './Estoque'
import Venda from './Venda'
import Gerencimento from './Gerencimento'
export default function Routes(){
  return(
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/estoque" component={Estoque} />
              <Route path="/venda" component={Venda} />
              <Route path="/gerencimento" component={Gerencimento} />
          </Switch>
      </BrowserRouter>
  )
}