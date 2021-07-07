import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css"
import "../subPage/FormClientes.css"
import "../../components/Footer";
import axios from 'axios'
import Input from '../../components/Input'

export default class FormClientes extends Component {
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
                        <label htmlFor="formFile" className="form-label">Código do cliente</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Nome completo: *</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="descricao_produt" type="texto" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Data de nascimento: *</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="forn_produt" type="date"/>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Data de cadastro: *</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="unidade_produt" type="date"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Rua:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="texto"/>
                      </div>
                    </section>

                    <section className="form mb-3">

                      <div className="mb-1 inp">
                        <label htmlFor="formFile" className="form-label">Numero</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="referencia_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Bairro:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="fabricante_produt" type="texto" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Cidade:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_barras_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Cep:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="setor_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">UF:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_interno_produt" type="texto"/>
                      </div>
                    </section>

                    <section className="form mb-3">

                      <div className="mb-1 inp1">
                        <label htmlFor="formFile" className="form-label">CPF</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="preco_custo_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">RG:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="margem_lucro_produt" type="texto" />
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileSm" className="form-label">Telefone com DDD:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="preco_venda_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Celular com DDD: *</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="preco_atacado_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Operadora:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="preco_promo_produt" type="texto"/>
                      </div>
                    </section>

                    <section className="form mb-3">

                      <div className="inp1">
                        <label htmlFor="formFile" className="form-label">Nome do Fiador</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="estoque_atual_produt" type="texto"/>
                      </div>

                      <div className="inp1">
                        <label htmlFor="formFileMultiple" className="form-label">Telefone do fiador:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="lucro_venda_produt" type="texto" />
                      </div>

                      <div className="inp1">
                        <label htmlFor="formFileSm" className="form-label">Limite de Crédito R$:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="lucro_venda_produt" type="texto"/>
                      </div>

                      <div className="inp1">
                        <label htmlFor="formFileLg" className="form-label">Prazo (Dias):</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="lucro_atacado_produt" type="texto"/>
                      </div>

                      <div className="inp">
                        <label htmlFor="formFileLg" className="form-label">E-mail:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="data_cadastro_produt" type="texto"/>
                      </div>
                    </section>

                    <section className="form mb-3">

                      <div className="inp1">
                        <label htmlFor="formFile" className="form-label">Observações</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="estoque_atual_produt" type="texto"/>
                      </div>

                      <div className="inp1">
                        <label htmlFor="formFileMultiple" className="form-label">Situação do cliente:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="lucro_venda_produt" type="texto" />
                      </div>

                      <div className="inp1">
                        <label htmlFor="formFileSm" className="form-label">Tipo de cliente:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="lucro_venda_produt" type="number"/>
                      </div>

                      <div className="inp1">
                        <label htmlFor="formFileLg" className="form-label">Data de Cadastro:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="lucro_atacado_produt" type="date"/>
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







