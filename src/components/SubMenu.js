import React, { Component } from "react";
import Estoque from "../icones/estoque.png"
import Vender from "../icones/vender.png"
import Gerenciamento from "../icones/gerenciamento.png"
import ContasApagar from "../icones/constas-a-pagar.png"
import ContasAreceber from "../icones/contas-receber.png"
import Clientes from "../icones/clientes.png"
import Funcionarios from "../icones/funcionarios.png"
import Sair from "../icones/sair.png"
import "./SubMenu.css"

export default class SubMenu extends Component {
  render() {
    return (
      <nav>
        <ul className="cont-SubMenu">
          <li>
            <img alt="Estoque" src={Estoque}/>
            <p>Estoque</p>
          </li>
          <li>
            <img alt="Vender" src={Vender}/>
            <p>Vender</p>
          </li>
          <li>
            <img alt="Gerenciamento" src={Gerenciamento}/>
            <p>Gerenciamento</p>
          </li>
          <li>
            <img alt="Contas a pagar" src={ContasApagar}/>
            <p>Contas a Pagar</p>
          </li>
          <li>
            <img alt="Contas a receber" src={ContasAreceber}/>
            <p>Contas a Receber</p>
          </li>
          <li>
            <img alt="Clientes" src={Clientes}/>
            <p>Clientes</p>
          </li>
          <li>
            <img alt="Funcionarios" src={Funcionarios}/>
            <p>Funcionarios</p>
          </li>
          <li>
            <img alt="Sair" src={Sair}/>
            <p>Sair</p>
          </li>
        </ul>
      </nav>
    )
  }
};