import React, { Component } from 'react';
import Input from './components/Input'
import "./Login.css"

export default class Gerencimento extends Component {
  render() {
    return (
      <div className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12">
          </header>

          <div className="col-md-12">
            <section className="container">

              <div className="form-login">
              <div className="mb-1 inp1">
                  <label htmlFor="formFile" className="form-label">Usuario</label>
                  <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_produt" type="texto"/>

                  <label htmlFor="formFile" className="form-label">Senha</label>
                  <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_produt" type="texto"/>
              </div>
              <button className='btn btn-dark float-right mt-2'>Entrar</button>
              </div>
            </section>

          </div>

        </div>

      </div>
    )
  }
};