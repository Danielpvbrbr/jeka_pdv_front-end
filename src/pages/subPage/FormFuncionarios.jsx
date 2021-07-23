import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css"
import "../subPage/FormFuncionarios.css"
import "../../components/Footer";
import axios from 'axios'
import Input from '../../components/Input'
import { Link } from 'react-router-dom';

export default class FormFuncionarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cod_func: '',
      nome_func: '',
      sobrenome_func: '',
      nascimento_func: '',
      data_cadastro: '',
      CPF_func: '',
      celular_func: '',
      salario_func: '',
      cargo_func: '',
      dia_pagamento_func: '',
      data_admissao_func: '',
      senha_operador_func: '',

    }
  };
  getTypeUsers = (e) => {

  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    this.getTypeUsers()
  };

  handleSubmit = (e) => {

    const {
      cod_func,
      nome_func,
      sobrenome_func,
      nascimento_func,
      data_cadastro,
      CPF_func,
      celular_func,
      salario_func,
      cargo_func,
      dia_pagamento_func,
      data_admissao_func,
      senha_operador_func,
    } = this.state;

    const check = document.querySelector('.checke');
    const acesso_pdv = check.checked === true ? 'true' : 'false';

    const select = document.getElementById('tipo_de_user');
    const option = select.options[select.selectedIndex];
    const tipo_func = option.text;

    axios.post('http://localhost:3001/api/registro/funcionario', {
      cod_func,
      nome_func,
      sobrenome_func,
      nascimento_func,
      data_cadastro,
      CPF_func,
      celular_func,
      salario_func,
      cargo_func,
      dia_pagamento_func,
      data_admissao_func,
      acesso_pdv,
      senha_operador_func,
      tipo_func,
    }).then(res => {

      console.log(res.data)
    })

    e.preventDefault()
  }

  render() {
    return (


      <div className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>

          <div className="col-md-12 ">
            <section className="container ">
              <div>
                <SubMenu />
              </div>

              <section id="container-formContas" className="container p-0 m-0  border border-dark">

                <form onSubmit={this.handleSubmit} className=" row m-2 mb-3 contain-form ">

                  <div className="col-md-12">
                    <section className="form">

                      <div className="mb-1 inp1">
                        <label htmlFor="formFile" className="form-label">Código da cliente:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_produt" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Nome do clientes:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="descricao_produt" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Data de nascimento:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="forn_produt" type="date" />
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Endereço: </label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="unidade_produt" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">N°:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>
                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Bairro:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>

                    </section>

                    <section className="form">

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Cidade:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">N°.Parcela:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Cep:</label>
                        <Input className="form-control form-control-sm" onChange={this.handleChange} name="local_produt" type="text" disabled />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">UF:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">CPF:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">CPF:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>
                    </section>

                    <section className="form">

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">RG:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Telefone DDD:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Nome fiador:</label>
                        <Input className="form-control form-control-sm" onChange={this.handleChange} name="local_produt" type="text" disabled />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Prazo(Dia):</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">E-mail:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Observações:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                      </div>

                    </section>
                  </div>


                  <div id="cont-check" className="col-md-2 mt-2">

                    <fieldset className="mb-1 p-1 border">
                      <legend className="m-0">Tipo de cliente</legend>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Pessoa Física
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Pessoa Jurídica
                        </label>
                      </div>
                    </fieldset>

                    <fieldset className="p-1 border">
                      <legend className="m-0">Situação do cliente</legend>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Ativo
                        </label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Inativo
                        </label>
                      </div>
                    </fieldset>

                  </div>

                  <fieldset className="pb-0 col-md-10">
                    <legend>Clientes autorizados para comprar</legend>
                    <table className="table table-bordered table-success table-striped ">
                      <thead id="tableTitulo" className="thead-dark sticky-top">
                        <tr>
                          <th scope="col">Nome:</th>
                          <th scope="col">Tipo:</th>
                        </tr>
                      </thead>

                      <tbody id="tableCampo">
                        <tr>
                          <td>001</td>
                          <td>Drogaria vieira</td>
                        </tr>

                        <tr>
                          <td>002</td>
                          <td>Drogaria vieira</td>
                        </tr>

                        <tr>
                          <td>002</td>
                          <td>Drogaria vieira</td>
                        </tr>
                      </tbody>
                    </table>

                  </fieldset>
                  <div id="contButton" className="w-100 bg-dark p-1 d-flex justify-content-center align-items-center">
                    <section>
                      <button className="btn-sm btn-primary m-1">Adicionar</button>
                      <button className="btn-sm btn-primary m-1">Alterar</button>
                      <button className="btn-sm btn-danger m-1">Deletar</button>
                      <button className="btn-sm btn-success m-1">Mostrar Clientes </button>
                    </section>
                  </div>
                </form>

              </section>

            </section>

          </div>

        </div>

      </div>

    );
  }
}
