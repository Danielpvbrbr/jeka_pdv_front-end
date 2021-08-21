import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css"
import "../subPage/FormFuncionarios.css"
import "../../components/Footer";
import axios from 'axios'
import Input from '../../components/Input'

export default class FormFuncionarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cod_func: '0001',
      nome_func: '',
      sobrenome_func: '',
      nascimento_func: '',
      CPF_func: '',
      celular_func: '',
      salario_func: '',
      dia_pagamento_func: '',
      data_admissao_func: '',
      senha_operador_func: '',
      email_func: ''
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  TypeFunc = () => {
    const select = document.getElementById('tipo');
    const option = select.options[select.selectedIndex];
    const tipo_func = option.text;
    return tipo_func
  };

  cargo = () => {
    const select = document.getElementById('cargo');
    const option = select.options[select.selectedIndex];
    const cargo_func = option.text;
    return cargo_func
  };

  checked = () => {
    const check = document.querySelector('.check');
    const acesso_pdv = check.checked === true ? 'true' : 'false';
    return acesso_pdv
  };

  zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`;
  };

  formataData = (data) => {
    const dia = this.zeroAEsquerda(data.getDate());
    const mes = this.zeroAEsquerda(data.getMonth() + 1);
    const ano = this.zeroAEsquerda(data.getFullYear());
    return `${ano}-${mes}-${dia}`;
  };

  handleSubmit = async (e) => {
    const cargo_func = this.cargo();
    const tipo_func = this.TypeFunc();
    const acesso_pdv = this.checked();

    const data = new Date();
    const data_cadastro = this.formataData(data);
    const {
      cod_func,
      nome_func,
      sobrenome_func,
      nascimento_func,
      CPF_func,
      celular_func,
      salario_func,
      dia_pagamento_func,
      data_admissao_func,
      senha_operador_func,
      email_func
    } = this.state;

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
      email_func

    }).then(res => {
      alert('Cadastro realizado com sucesso!')
      window.location.replace('/formfuncionarios')
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
            <form className="container ">
              <div>
                <SubMenu />
              </div>

              <section id="container-formContas" className="container p-0 m-0  border border-dark">

                <section onSubmit={this.handleSubmit} className=" row m-2 mb-3 contain-form ">

                  <div className="col-md-12">
                    <section className="form">
                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Nome:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="nome_func"
                          type="text"
                          required
                        />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Sobrenome:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="sobrenome_func" type="text"
                          required />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Data de nascimento:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="nascimento_func"
                          type="date"
                          required
                        />
                      </div>
                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">E-mail:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="email_func"
                          type="text"
                          required
                        />
                      </div>
                    </section>

                    <section className="form">

                      <div className="m-1 form-group">
                        <label htmlFor="formFileSm" className="form-label mb-0">Cargo: *</label>
                        <select id="cargo" className="form-control form-control-sm">
                          <option className="Caixa" value="caixa">Operador de caixa</option>
                          <option className="Gerente" value="gerente">supervisor de venda</option>
                          <option className="Supervisor" value="supervisor">anlista de dados</option>
                        </select>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">CPF: *</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="CPF_func"
                          type="number" 
                          required
                        />
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Telefone DDD:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="celular_func"
                          type="number"
                          required
                        />
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Dia de pagamento:</label>
                        <Input
                          className="form-control form-control-sm"
                          onChange={this.handleChange}
                          name="dia_pagamento_func"
                          type="number"
                          required
                        />
                      </div>
                    </section>

                    <section className="form">


                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Salário:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="salario_func"
                          type="number"
                          required
                        />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Data de admissão:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="data_admissao_func"
                          type="date"
                          required
                        />
                      </div>

                    </section>
                  </div>


                  <div id="cont-check" className="col-md-3 mt-1">

                    <fieldset className="mb-1 p-1 border">
                      <legend className="m-0">Acesso ao PDV</legend>
                      <div className="form-check form-switch">
                        <input className="form-check-input check" type="checkbox" name="acesso_pdv" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Permitir acesso ao PDV
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <section id="contan-user-func" className="w-50 d-flex justify-content-center ">

                    <div className="m-1">
                      <label htmlFor="formFileLg" className="form-label mb-0">Usuário:</label>
                      <Input className="form-control form-control-sm " value={this.state.CPF_func} type="text" disabled />
                    </div>

                    <div className="m-1">
                      <label htmlFor="formFileLg" className="form-label mb-0">Senha:</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="senha_operador_func" type="password" required />
                    </div>

                    <div className="m-1 form-group">
                      <label htmlFor="formFileSm" className="form-label mb-0">Tipo: *</label>
                      <select id="tipo" className="form-control form-control-sm">
                        <option className="Caixa" value="caixa">Caixa</option>
                        <option className="Gerente" value="gerente">Gerente</option>
                        <option className="Supervisor" value="supervisor">Supervisor</option>
                      </select>
                    </div>
                  </section>
                </section>
              </section>
              <div id="contButton" className="w-100 bg-dark p-1 d-flex justify-content-center align-items-center">
                <section>
                  <div id="contButton" className="bg-dark p-1 d-flex justify-content-center align-items-center">
                    <section>
                      <button type="reset" className="btn-sm btn-info m-1">Limpar campo</button>
                      <button className="btn-sm btn-primary m-1">Mostrar Clientes </button>
                      <button className="btn-sm btn-success m-1">Salvar</button>
                    </section>
                  </div>
                </section>
              </div>
            </form>

          </div>

        </div>

      </div>

    );
  }
}
