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
  constructor(props){
    super(props);
    this.state = {
      cod_func:'',
      nome_func:'',
      sobrenome_func:'',
      nascimento_func:'',
      data_cadastro:'',
      CPF_func:'',
      celular_func:'',
      salario_func:'',
      cargo_func:'',
      dia_pagamento_func:'',
      data_admissao_func:'',
      senha_operador_func:'',

    }
  };
  getTypeUsers = (e) => {
      
  }
  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
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
    const tipo_func =  option.text;

    axios.post('http://localhost:3001/api/registro/funcionario',{
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

              <section id="container-func" className="container p-0 m-0 d-flex justify-content-center">
                 
                <form onSubmit={this.handleSubmit} className="m-2 mb-3 contain-form border p-2">
                    <section className="form">

                      <div className="mb-1 inp1">
                        <label htmlFor="formFile" className="form-label">Código do funcionarios</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_func" type="texto" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Nome: *</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="nome_func" type="texto" required/>
                      </div>
                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Sobrenome: *</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="sobrenome_func" type="texto" required/>
                      </div>

                    </section>

                    <section className="form mb-3">

                     <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Data de nascimento: *</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="nascimento_func" type="date" required/>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Data de cadastro: *</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="data_cadastro" type="date"/>
                      </div>
                      <div className="mb-1 inp1">
                        <label htmlFor="formFile" className="form-label">CPF</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="CPF_func" type="texto"/>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Celular com DDD: *</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="celular_func" type="texto"/>
                      </div>

                    </section>

                  <section className="form mb-3">

                    <div className="inp1">
                      <label htmlFor="formFile" className="form-label">Salário</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="salario_func" type="texto"/>
                    </div>

                    <div className="inp1">
                       <label htmlFor="formFileMultiple" className="form-label">Cargo:</label>
                       <Input className="form-control form-control-sm " onChange={this.handleChange} name="cargo_func" type="texto" />
                    </div>

                    <div className="inp1">
                        <label htmlFor="formFileSm" className="form-label">Dia de pagamento:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="dia_pagamento_func" type="number"/>
                      </div>

                      <div className="inp1">
                        <label htmlFor="formFileLg" className="form-label">Data de Admissão:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="data_admissao_func" type="date"/>
                      </div>
                    </section>

                    <h3 className="h6 text-light">Acesso ao sistem P.D.V</h3>
                    <section className="form mb-3">
                  
                        <div className="inp1">
                          <label htmlFor="formFile" className="form-label">Acesso ao PDV</label>
                          <Input className="form-control form-control-sm checke" name="acesso_pdv" type="checkbox" />
                        </div>

                        <div className="inp1">
                          <label htmlFor="formFileMultiple" className="form-label">Usuario do operador: *</label>
                          <Input className="form-control form-control-sm " onChange={this.handleChange} name="nome_operador_func" type="texto" value={this.state.CPF_func} disabled/>
                        </div>
                       
                        <div className="inp1">
                          <label htmlFor="formFileSm" className="form-label">Senha de acesso: *</label>
                          <Input className="form-control form-control-sm " onChange={this.handleChange} name="senha_operador_func" type="texto" maxLength="6" required/>
                        </div>

                        <div className="inp1 form-group">
                          <label htmlFor="formFileSm" className="form-label">Tipo: *</label>
                          <select id="tipo_de_user" className="form-control form-control-sm">
                            <option  className="value" value="administrador">Administrador</option>
                            <option  className="text" value="operador">Operador</option>
                          </select>
                        </div>

                    </section>

                    <div className="d-flex justify-content-center">
                          <button className="btn-sm btn-success">REGISTRAR</button>
                          <button className="btn-sm ml-1 btn-primary">EDITAR</button>
                          <button className="btn-sm ml-1 btn-danger">DELETAR</button>
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