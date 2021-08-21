import React, { Component } from 'react';
import Menu from './components/Menu'
// import Footer from './components/Footer'
import ContVenda from './components/ContVenda'
import "./Home.css"
import "./components/Menu.css"

export default class Venda extends Component {
  render() {
    return (
      <div className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>

          <div className="col-md-12">
            <div className="mb-2">
              <ContVenda />
            </div>
          </div>

        </div>

      </div>
    )
  }
};