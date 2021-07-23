import React, { Component } from 'react';
import Menu from './components/Menu'
import Input from './components/Input';
import Footer from './components/Footer'
import SubMenu from './components/SubMenu'
import ExtratoTotal from './components/ExtratoTotal'
import Logo from'./components/Logo'
// import axios from 'axios'
import "./Home.css"
import "./components/Menu.css"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: ''
    };

  };

  render() {
    return (
      <div  className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>

          <div className="col-md-12 ">
            <section className="container ">
                <div>
                  <SubMenu/>
                </div>

                <div>
                <Logo/>
                </div>

                <div className="mb-2">
                  <ExtratoTotal/>
                </div>
              </section>
           
          </div>
         
        </div>
        
      </div>
    );
  };
};