import React, { Component } from 'react';
import Menu from './components/Menu'
// import Footer from './components/Footer'
import SubMenu from './components/SubMenu'
import ListEstoque from './pages/ListEstoque'
import "./Home.css"
import "./components/Menu.css"

export default class Estoque extends Component {
  render() {
    return (
      <div className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>

          <div className="col-md-12">
            <section className="container">
                <div>
                  <SubMenu/>
                </div>

                <div className="mb-2">
                  <ListEstoque/>
                </div>
              </section>
           
          </div>
          
        </div>
        
      </div>
    )
  }
};