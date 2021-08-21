import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css";
import "./FormClientes.css"
import "../../components/Footer";
import axios from 'axios';
import Input from '../../components/Input';

export default class FormClientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cod: '001',
      guarantorName: 'Dudu',
      list: []
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  componentDidMount = async () => {
    axios.get('http://localhost:3001/api/clientes').then(res => {
      // console.log(res.data)
      this.setState({ list: res.data })
    })
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

  status = () => {
    const status = document.querySelector('input[name="status"]:checked').value;
    return (status);
  };

  type = () => {
    const type = document.querySelector('input[name="type"]:checked').value;
    return (type);
  };

  handleSubmit = async (e) => {
    const data = new Date();
    const registrationDate = this.formataData(data);
    const status = this.status();
    const type = this.type();

    const {
      cod,
      name,
      birth,
      road,
      number,
      district,
      city,
      ZipCode,
      state,
      CPF,
      RG,
      phone,
      guarantorName,
      creditLimit,
      term,
      email,
      comments,
    } = this.state;

    axios.post('http://localhost:3001/api/registro/clientes', {
      cod,
      name,
      birth,
      road,
      number,
      district,
      city,
      ZipCode,
      state,
      CPF,
      RG,
      phone,
      guarantorName,
      creditLimit,
      term,
      email,
      comments,
      status,
      type,
      registrationDate,

    }).then(res => {
      alert('Cadastro realizado com sucesso!')
      window.location.replace('/clientes')
    })

    e.preventDefault()
  }

  render() {
    const { list } = this.state;
    return (

      <div className="cont-principal container-fluid ">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>

          <div className="col-md-12 ">
            <form className="container">
              <div>
                <SubMenu />
              </div>

              <section id="container-formContas" className="container-fluid p-0 m-0  border border-dark">

                <section onSubmit={this.handleSubmit} className="row m-2 mb-4 contain-form ">

                  <div className="col-md-12">
                    <section className="form">

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Nome do clientes:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="name" type="text" required />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Data de nascimento:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="birth" type="date" required />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Endereço: </label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="road" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">N°:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="number" type="text" />
                      </div>
                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Bairro:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="district" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Cidade:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="city" type="text" />
                      </div>

                    </section>

                    <section className="form">

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Cep:</label>
                        <Input className="form-control form-control-sm" onChange={this.handleChange} name="ZipCode" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">UF:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="state" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">CPF:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="CPF" type="text" required />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">RG:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="RG" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">N°.Parcela:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} value="2" type="text" disabled />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Telefone DDD:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="phone" type="text" />
                      </div>
                    </section>

                    <section className="form">

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Nome fiador:</label>
                        <Input className="form-control form-control-sm" onChange={this.handleChange} name="guarantorName" value="Daniel" type="text" disabled />
                      </div>
                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Limite (Crédito):</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="creditLimit" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Prazo(Dia):</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="term" type="text" required />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">E-mail:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="email" type="text" />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Observações:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="comments" type="text" />
                      </div>

                    </section>
                  </div>


                  <div id="cont-check" className="col-md-2 mt-2">

                    <fieldset className="mb-1 p-1 border">
                      <legend className="m-0">Tipo de cliente</legend>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="status" value="Pessoa Física" id="flexRadioDefault1" required />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Pessoa Física
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="status" value="Pessoa Jurídica" id="flexRadioDefault1" required />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Pessoa Jurídica
                        </label>
                      </div>
                    </fieldset>

                    <fieldset className="p-1 border">
                      <legend className="m-0">Situação do cliente</legend>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="type" value="Ativo" id="flexRadioDefault1" required />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Ativo
                        </label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="type" value="Inativo" id="flexRadioDefault1" required />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Inativo
                        </label>
                      </div>
                    </fieldset>

                  </div>

                  <fieldset className="pb-0 col-md-10">
                    <legend>Clientes autorizados para comprar</legend>
                    <section id="tableClients" className="border">
                      <table className="table table-bordered table-success table-striped ">
                        <thead id="tableTitulo" className="thead-dark sticky-top">
                          <tr>
                            <th scope="col">Nome:</th>
                            <th scope="col">Tipo:</th>
                          </tr>
                        </thead>
                        <tbody id="tableCampo">
                          {
                            list.map((clients, i) =>
                              <tr key={i}>
                                <td>{clients.nome_client}</td>
                                <td>{clients.tipo_client}</td>
                              </tr>
                            )
                          }
                        </tbody>
                      </table>
                    </section>
                  </fieldset>
                </section>
              </section>
              <div id="contButton" className="bg-dark p-1 d-flex justify-content-center align-items-center">
                <section>
                <button type="reset" className="btn-sm btn-info m-1">Limpar campo</button>
                  <button className="btn-sm btn-primary m-1">Mostrar Clientes </button>
                  <button className="btn-sm btn-success m-1">Salvar</button>
                </section>
              </div>
            </form>

          </div>

        </div>

      </div>

    );
  }
}









