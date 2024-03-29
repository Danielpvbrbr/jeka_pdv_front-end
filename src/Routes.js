import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Estoque from './Estoque'
import Venda from './Venda'
import Gerencimento from './Gerencimento'
import FormProdutos from './pages/./subPage/FormProdutos';
import AlterProdutos from './pages/./subPage/AlterProdutos'
import FormFuncionarios from './pages/subPage/FormFuncionarios'
import Funcionarios from './Funcionarios'
import Clientes from './Clientes'
import FormClientes from './pages/subPage/FormClientes'
import ContasApagar from './ContasApagar'
import FormContasApagar from './pages/subPage/FormContasApagar'
import ContasAreceber from './ContasAreceber'
import FormContasReceber from './pages/subPage/FormContasReceber.'
import Fornecedores from './pages/subPage/Fornecedores'
import CargoSetor from './pages/subPage/CargoSetor'
import AnaliseVenda from './pages/subPage/AnaliseVenda'
import Devolucoes from './pages/subPage/Devolucoes'
import Configuracao from './pages/subPage/Configuracao'
import Suporte from './pages/subPage/Suporte'
import Sobre from './pages/subPage/Sobre'
import AreaAdm from './pages/auth/AreaAdm'

export default function Routes(){
  return(
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route path="/estoque" component={Estoque} />
              <Route path="/venda" component={Venda} />
              <Route path="/gerencimento" component={Gerencimento} />
              <Route path="/formprodutos" component={FormProdutos} />
              <Route path="/alterProdutos" component={AlterProdutos} />
              <Route path="/formfuncionarios" component={FormFuncionarios} />
              <Route path="/funcionarios" component={Funcionarios} />
              <Route path="/clientes" component={Clientes} />
              <Route path="/formclientes" component={FormClientes} />
              <Route path="/constasapagar" component={ContasApagar} />
              <Route path="/formcontasapagar" component={FormContasApagar} />
              <Route path="/formcontasreceber" component={FormContasReceber} />
              <Route path="/contasareceber" component={ContasAreceber} />

              <Route path="/fornecedores" component={Fornecedores} />
              <Route path="/cargosetor" component={CargoSetor} />
              <Route path="/analisevenda" component={AnaliseVenda} />
              <Route path="/devolucoes" component={Devolucoes} />
              <Route path="/configuracao" component={Configuracao} />
              <Route path="/suporte" component={Suporte} />
              <Route path="/sobre" component={Sobre} />
              <Route path="/areadmin" component={AreaAdm} />
          </Switch>
      </BrowserRouter>
  )
}