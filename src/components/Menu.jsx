import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div id="menu-principal">
        <Navbar bg="primary" expand="lg">
          <Navbar.Brand><h3>Jaca</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Cadastro" id="basic-nav-dropdown">
                <Link to={'/produtos'}><NavDropdown.Item >Produtos</NavDropdown.Item></Link>
                <Link to={'/formclientes'}><NavDropdown.Item >Clientes</NavDropdown.Item></Link>
                <Link to={'/fornecedores'}><NavDropdown.Item >Fornecedores</NavDropdown.Item></Link>
                <Link to={'/funcionarios'}><NavDropdown.Item >Funcionários</NavDropdown.Item></Link>
                <Link to={'/cargosetor'}><NavDropdown.Item >Setores/Cargo</NavDropdown.Item></Link>
              </NavDropdown>

              <NavDropdown title="Estoque" id="basic-nav-dropdown">
                <Link to={'/produtos'}><NavDropdown.Item >Gerenciar Estoque</NavDropdown.Item></Link>
                <Link to={'/formclientes'}><NavDropdown.Item >Tabela de Preço</NavDropdown.Item></Link>
              </NavDropdown>

              <NavDropdown title="Vendas" id="basic-nav-dropdown">
                <Link to={'/produtos'}><NavDropdown.Item >Vender(P.D.V)</NavDropdown.Item></Link>
                <Link to={'/formclientes'}><NavDropdown.Item >Gerenciamento de Vendas</NavDropdown.Item></Link>
                <Link to={'/fornecedores'}><NavDropdown.Item >Análise de Vendas</NavDropdown.Item></Link>
                <Link to={'/funcionarios'}><NavDropdown.Item >Listagem de Devoluções</NavDropdown.Item></Link>
              </NavDropdown>

              <NavDropdown title="Financeiro" id="basic-nav-dropdown">
                <Link to={'/formclientes'}><NavDropdown.Item >Contas a pagar</NavDropdown.Item></Link>
                <Link to={'/fornecedores'}><NavDropdown.Item >Contas a receber</NavDropdown.Item></Link>
              </NavDropdown>

              <Link className="nav-link" to={'/areadmin'}>Relatório</Link>
              <Link className="nav-link" to={'/areadmin'}>Suporte</Link>
              <Link className="nav-link" to={'/configuracao'}>Cofigurações</Link>
              <Link className="nav-link" to={'/areadmin'}>Painel Admin</Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>

      </div>
    )
  }
};