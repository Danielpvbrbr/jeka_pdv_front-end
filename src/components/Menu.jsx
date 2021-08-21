import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import user from '.././icones/bx-user-circle.svg'
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <div id="menu-principal">
        <Navbar bg="primary" expand="md">
        <Link to={'/home'}> <Navbar.Brand><h3>Jaca</h3></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='areaCollapse' id="basic-navbar-nav">
            <Nav id="navHome" className="me-auto">
              <NavDropdown title="Cadastro" id="basic-nav-dropdown">
                <Link className="dropdown-item" to={'/formprodutos'}>Produtos</Link>
                <Link className="dropdown-item" to={'/formclientes'}>Clientes</Link>
                <Link className="dropdown-item" to={'/fornecedores'}>Fornecedores</Link>
                <Link className="dropdown-item" to={'/formfuncionarios'}>Funcionários</Link>
                <Link className="dropdown-item" to={'/cargosetor'}>Setores/Cargo</Link>
              </NavDropdown>

              <NavDropdown title="Estoque" id="basic-nav-dropdown">
                <Link className="dropdown-item" to={'/estoque'}>Gerenciar Estoque</Link>
                <Link className="dropdown-item" to={'/formclientes'}>Tabela de Preço</Link>
              </NavDropdown>

              <NavDropdown title="Vendas" id="basic-nav-dropdown">
                <Link className="dropdown-item" to={'/venda'}>Vender(P.D.V)</Link>
                <Link className="dropdown-item" to={'/gerencimento'}>Gerenciamento de Vendas</Link>
                <Link className="dropdown-item" to={'/analisevenda'}>Análise de Vendas</Link>
                <Link className="dropdown-item" to={'/devolucoes'}>Listagem de Devoluções</Link>
              </NavDropdown>

              <NavDropdown title="Financeiro" id="basic-nav-dropdown">
                <Link className="dropdown-item" to={'/constasapagar'}>Contas a pagar</Link>
                <Link className="dropdown-item" to={'/contasareceber'}>Contas a receber</Link>
              </NavDropdown>

              <Link className="nav-link" to={'/home'}>Relatório</Link>
              <Link className="nav-link" to={'/home'}>Suporte</Link>
              <Link className="nav-link" to={'/configuracao'}>Configurações</Link>
              <img id='user' src={user} alt={user} />
              <Link className="nav-link text-success" to={'/areadmin'}>Administrador</Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>

      </div>
    )
  }
};