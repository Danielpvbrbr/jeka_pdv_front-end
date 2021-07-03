import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

export default class Menu extends Component {
  render() {
    return (
      <div>
        
        <ul>
          <li className="dropdown">
          <p className="dropbtn">Cadastro</p>
            <div className="dropdown-content">
              <p>Produtos</p>
              <p>Clientes</p>
              <p>Fornecedores</p>
              <p>Funcionários</p>
              <p>Empresas</p>
              <p>Cargo</p>
              <p>Setores</p>
              <p>Fabricantes/Marcas</p>
            </div>
            |
          </li>

          <li className="dropdown">
          <p className="dropbtn">Estoque</p>
          <div className="dropdown-content">
              <p>Gerenciar Estoque</p>
              <p>Tabela de Preço</p>
            </div>
            |
          </li>

          <li className="dropdown">
          <p className="dropbtn">Vendas</p>
          <div className="dropdown-content">
              <p>Vender(P.D.V)</p>
              <p>Gerenciamento de Vendas</p>
              <p>Análise de Vendas</p>
              <p>Listagem de Devoluções</p>
            </div>
            |
          </li>

          <li className="dropdown">
          <p className="dropbtn">Financeiro</p>
          <div className="dropdown-content">
              <p>Vender(P.D.V)</p>
              <p>Gerenciamento de Vendas</p>
              <p>Análise de Vendas</p>
              <p>Listagem de Devoluções</p>
            </div>
            |
          </li>

          <li className="dropdown">
          <p className="dropbtn">Orden de serviço</p>
          <div className="dropdown-content">
              <p>Vender(P.D.V)</p>
              <p>Gerenciamento de Vendas</p>
              <p>Análise de Vendas</p>
              <p>Listagem de Devoluções</p>
            </div>
            |
          </li>
          <li className="dropdown">
          <p className="dropbtn">Relatório</p>
          <div className="dropdown-content">
              <p>Vender(P.D.V)</p>
              <p>Gerenciamento de Vendas</p>
              <p>Análise de Vendas</p>
              <p>Listagem de Devoluções</p>
            </div>
            |
          </li>
          <li className="dropdown">
          <p className="dropbtn">Cofigurações</p>
          <div className="dropdown-content">
              <p>Vender(P.D.V)</p>
              <p>Gerenciamento de Vendas</p>
              <p>Análise de Vendas</p>
              <p>Listagem de Devoluções</p>
            </div>
            |
            </li>
          <li className="dropdown">
          <p className="dropbtn">Suporte</p>
          <div className="dropdown-content">
              <p>Vender(P.D.V)</p>
              <p>Gerenciamento de Vendas</p>
              <p>Análise de Vendas</p>
              <p>Listagem de Devoluções</p>
            </div>
            |
          </li>
          <li className="dropdown">
          <p className="dropbtn">Sobre</p>
          <div className="dropdown-content">
              <p>Vender(P.D.V)</p>
              <p>Gerenciamento de Vendas</p>
              <p>Análise de Vendas</p>
              <p>Listagem de Devoluções</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
};