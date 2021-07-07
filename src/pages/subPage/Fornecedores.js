import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css"
import "../subPage/FormContasReceber.css"
import "../../components/Footer";
import axios from 'axios'
import Input from '../../components/Input'

export default class Fornecedores extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  };

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  };

  componentDidMount = async () => {
    axios.get('http://localhost:3001/api/cadastro/produtos').then(res => {
      console.log(res)
      console.log(res.data)
    })

  }

  render() {
    return(
        
        <div className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>

          <div className="col-md-12 ">
            <section className="container ">
                <div>
                  <SubMenu/>
                </div>

              <section id="container-func" className="container p-0 m-0  border">

                <form onSubmit={this.handleSubmit} className="m-2 mb-3 contain-form ">
                    <section className="form">

                      <div className="mb-1 inp1">
                        <label htmlFor="formFile" className="form-label">Código de barras</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Descrição da Compra:*</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="descricao_produt" type="texto" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Tipo de compra:*</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="forn_produt" type="date"/>
                      </div>
                    </section>

                    <section className="form">
                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Valor da compra: *</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="unidade_produt" type="date"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Local da compra(loja..):</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Status da divida:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="texto"/>
                      </div>
                      </section>

                      <button className="btn-sm btn-primary mr-1">Adicionar</button>
                      <button className="btn-sm btn-primary mr-1">Alterar</button>
                      <button className="btn-sm btn-danger">Excluir</button>
                    </form>
              </section>
                
              </section>
           
          </div>
         
        </div>
        
      </div>

    );
  }
}







