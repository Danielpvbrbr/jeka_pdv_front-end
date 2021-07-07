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
             <Link to={'/produtos'}><p>Produtos</p></Link> 
             <Link to={'/formclientes'}><p>Clientes</p></Link> 
             <Link to={'/fornecedores'}><p>Fornecedores</p></Link>
             <Link to={'/funcionarios'}><p>Funcionários</p></Link>
             <Link to={'/cargo'}><p>Cargo</p></Link>
             <Link to={'/setor'}><p>Setores</p></Link>
            </div>
            |
          </li>

          <li className="dropdown">
          <p className="dropbtn">Estoque</p>
          <div className="dropdown-content">
          <Link to={'/estoque'}><p>Gerenciar Estoque</p></Link>
          <Link to={'/estoque'}><p>Tabela de Preço</p></Link>
            </div>
            |
          </li>

          <li className="dropdown">
          <p className="dropbtn">Vendas</p>
          <div className="dropdown-content">
          <Link to={'/venda'}><p>Vender(P.D.V)</p></Link>
          <Link to={'/gerencimento'}><p>Gerenciamento de Vendas</p></Link>
          <Link to={'/analisevenda'}><p>Análise de Vendas</p></Link>
          <Link to={'/devolucoes'}><p>Listagem de Devoluções</p></Link>
            </div>
            |
          </li>

          <li className="dropdown">
          <p className="dropbtn">Financeiro</p>
          <div className="dropdown-content">
              <p>Contas a pagar</p>
              <p>Contas a receber</p>
            </div>
            |
          </li>

          <li className="dropdown">
          <p className="dropbtn">Orden de serviço</p>
          <div className="dropdown-content">
              <p>Gerar orden de serviço</p>
            </div>
            |
          </li>
          <li className="dropdown">
          <p className="dropbtn">Relatório</p>
          <div className="dropdown-content">
              <p>Relatório de vendas no dia</p>
              <p>Relatório de vendas no mẽs</p>
              <p>Relatório de vendas no Ano</p>
            </div>
            |
          </li>
          <li className="dropdown">
          <Link to={'/configuracao'}><p className="dropbtn">Cofigurações</p></Link>
            |
            </li>
          <li className="dropdown">
          <Link to={'/configuracao'}><p className="dropbtn">Suporte</p></Link>
            |
          </li>
          <li className="dropdown">
          <Link to={'/configuracao'}><p className="dropbtn">Sobre</p></Link>
          </li>

          <li className="">
          <Link to={'/configuracao'}><p className="text-dark">Arẽa do administrador</p></Link>
          </li>
        </ul>
     
      </div>
    )
  }
};