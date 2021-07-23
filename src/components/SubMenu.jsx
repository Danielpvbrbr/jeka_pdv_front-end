import React, { Component } from "react";
import Estoque from "../icones/estoque.png"
import seller from "../icones/paid.svg"
import Gerenciamento from "../icones/sales_performance.svg"
import ContasApagar from "../icones/constas-a-pagar.png"
import ContasAreceber from "../icones/contas-receber.png"
import Clientes from "../icones/manager.svg"
import Funcionarios from "../icones/funcionarios.png"
import Sair from "../icones/exit.svg"
import home from "../icones/home.svg"
import { Link } from 'react-router-dom'
import "./SubMenu.css"

export default class SubMenu extends Component {
  render() {
    return (
      <nav id="SubMenu-principal">
        <ul className="cont-SubMenu">
          <Link to={'/home'}>
            <li>
            <img alt="home" src={home} />
            <p>Home</p>
            </li>
          </Link>

          <Link to={'/estoque'}>
            <li>
              <img alt="Stock" src={Estoque} />
              <p>Estoque</p>
            </li>
          </Link>

          <Link to={'/venda'}>
            <li>
              <img alt="seller" src={seller} />
              <p>Vender</p>
            </li>
          </Link>

          <Link to={'/gerencimento'}>
            <li>
              <img alt="Management" src={Gerenciamento} />
              <p>Gerenciamento</p>
            </li>
          </Link>

          <Link to={'/constasapagar'}>
            <li>
              <img alt="Bills to pay" src={ContasApagar} />
              <p>Contas a Pagar</p>
            </li>
          </Link>

          <Link to={'/contasareceber'}>
            <li>
              <img alt="Bills to receive" src={ContasAreceber} />
              <p>Contas a Receber</p>
            </li>
          </Link>
          <Link to={'/clientes'}>
            <li>
              <img alt="Customers" src={Clientes} />
              <p>Clientes</p>
            </li>
          </Link>


          <Link to={'/funcionarios'}>
            <li>
              <img alt="employees" src={Funcionarios} />
              <p>Funcionarios</p>
            </li>
          </Link>

          <Link to={'/'}>
            <li>
              <img alt="logof" src={Sair} />
              <p>Sair</p>
            </li>
          </Link>
        </ul>
      </nav>
    )
  }
};