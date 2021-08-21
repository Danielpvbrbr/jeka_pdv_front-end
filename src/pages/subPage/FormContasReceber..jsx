import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css";
import "../subPage/FormContasReceber.css";
import "../../components/Footer";
import axios from 'axios';
import Input from '../../components/Input';
import { Form } from 'react-bootstrap';

export default class FormContasReceber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`;
  };

  formataData = (date) => {
    const dia = this.zeroAEsquerda(date.getDate());
    const mes = this.zeroAEsquerda(date.getMonth() + 1);
    const ano = this.zeroAEsquerda(date.getFullYear());
    return `${ano}-${mes}-${dia}`;
  };

  typeStatus = () => {
    const clientType = document.querySelector('input[name="clientType"]:checked').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    return [clientType, status];
  };

  option = () => {
    const categoryValue = document.getElementById('category');
    const option_Category = categoryValue.options[categoryValue.selectedIndex];
    const category = option_Category.text;

    const typeOfPaymentValue = document.getElementById('typeOfPayment');
    const option_typeOfPayment = typeOfPaymentValue.options[typeOfPaymentValue.selectedIndex];
    const typeOfPayment = option_typeOfPayment.text;

    return [typeOfPayment, category]
  };
  handleSubmit = async (e) => {
    const date = new Date();

    axios.post('http://localhost:3001/api/cadastro/receber', {
      documentNumber: this.state.documentNumber,
      clientName: this.state.clientName,
      issue: this.state.issue,
      maturity: this.state.maturity,
      city: this.state.city,
      CPF_CNPJ: this.state.CPF_CNPJ,
      telephone: this.state.telephone,
      guarantor: this.state.guarantor,
      email: this.state.email,
      price: this.state.price,
      typeOfPayment: this.option()[0],
      numberOfInstallments: this.state.numberOfInstallments,
      comments: this.state.comments,
      category: this.option()[1],
      clientType: this.typeStatus()[0],
      status: this.typeStatus()[1],
      registrationDate: this.formataData(date)
    }).then(res => {
      console.log(res.data)

    })
    e.preventDefault()
  };

  componentDidMount = async () => {
    await axios.get('http://localhost:3001/api/conta/receber').then(res => {
      console.log(res.data)
      this.setState({ list: res.data })
    })
  };

  render() {
    const { list } = this.state;
    return (
      <div className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>

          <div className="col-md-12 ">
            <Form className="container ">
              <div>
                <SubMenu />
              </div>

              <section id="container-formContas" className="container p-0 m-0  border border-dark">

                <section onSubmit={this.handleSubmit} className=" row m-2 mb-3 contain-form ">

                  <div className="col-md-12">
                    <section className="form">

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">N° do Documento:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="documentNumber"
                          type="number"
                          placeholder="Digite numero do documento"
                          maxLength="9"
                        />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Nome / Descrição</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="clientName"
                          type="text"
                          required
                          maxLength="25"
                          placeholder="Digite o nome ou descrição"
                        />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Emissão:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="issue"
                          type="date"
                          required
                        />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Vencimento:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="maturity"
                          type="date"
                          required
                        />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Cidade:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="city"
                          type="text"
                          placeholder="Digite sua cidade"
                          maxLength="25"
                        />
                      </div>

                    </section>

                    <section className="form">

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">CPF / CNPJ:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="CPF_CNPJ"
                          type="number"
                          placeholder="Digite CPF ou CNPJ"
                          maxLength="14"
                        />
                      </div>
                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Telefone DDD:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange} n
                          ame="telephone"
                          type="number"
                          required
                          maxLength="11"
                          placeholder="Digite telefone de contato"
                        />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Nome fiador:</label>
                        <Input
                          className="form-control form-control-sm"
                          onChange={this.handleChange}
                          name="guarantor"
                          type="text"
                          maxLength="25"
                          placeholder="Digite o nome do fiador"
                        />
                      </div>
                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">E-mail:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="email"
                          type="text"
                          maxLength="30"
                          placeholder="Digite seu e-mail"
                        />
                      </div>
                    </section>

                    <section className="form">

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Valor:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="price"
                          type="number"
                          required
                          placeholder="R$: 00,00"
                        />
                      </div>

                      <div className="inp form-group">
                        <label htmlFor="formFileSm" className="form-label">Tipo de pagamento:</label>
                        <select id="typeOfPayment" className="form-control form-control-sm">
                          <option className="value" value="À vista">À vista</option>
                          <option className="value" value="Parcelado">Parcelado</option>
                        </select>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">N° de Parcela:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="numberOfInstallments"
                          type="number"
                        />
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Observações:</label>
                        <Input
                          className="form-control form-control-sm "
                          onChange={this.handleChange}
                          name="comments" type="text"
                          placeholder="Digite um comentario"
                          maxLength="50"
                        />
                      </div>

                      <div className="inp form-group">
                        <label htmlFor="formFileSm" className="form-label">Categoria:</label>
                        <select id="category" className="form-control form-control-sm">
                          <option className="value" value="Outros">Outros</option>
                          <option className="value" value="Aluguel">Aluguel</option>
                          <option className="value" value="Luz">Luz</option>
                          <option className="value" value="Água">Água</option>
                          <option className="value" value="Telefone">Telefone</option>
                          <option className="value" value="Internet">Internet</option>
                          <option className="value" value="Transporte">Transporte</option>
                          <option className="value" value="Saúde">Saúde</option>
                          <option className="value" value="Lazer">Lazer</option>
                        </select>
                      </div>
                    </section>
                  </div>

                  <div id="cont-check" className="col-md-2 mt-2">

                    <fieldset className="mb-1 p-1 border">
                      <legend className="m-0">Tipo de cliente</legend>
                      <div className="form-check">
                        <input required className="form-check-input" type="radio" name="clientType" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Pessoa Física
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="clientType" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Pessoa Jurídica
                        </label>
                      </div>
                    </fieldset>

                    <fieldset className="p-1 border">
                      <legend className="m-0">Situação do conta</legend>
                      <div className="form-check">
                        <input required className="form-check-input" type="radio" name="status" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Pendente
                        </label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="status" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Liquidado
                        </label>
                      </div>
                    </fieldset>

                  </div>

                  <fieldset className="pb-0 col-md-10">
                    <legend>Registro recentes de contas</legend>
                    <table className="table table-bordered table-success table-striped ">
                      <thead id="tableTitulo" className="thead-dark sticky-top">
                        <tr>
                          <th scope="col">N° do Documento::</th>
                          <th scope="col">Nome / Descrição:</th>
                          <th scope="col">Data de Emissão:</th>
                          <th scope="col">Valor a receber:</th>
                        </tr>
                      </thead>

                      <tbody id="tableCampo">
                        {
                          list.map((contas, i) =>
                            <tr key={i}>
                              <td>{contas.numero_doc}</td>
                              <td>{contas.nome}</td>
                              <td>{contas.emissao}</td>
                              <td>{contas.preco}</td>
                            </tr>
                          )
                        }

                      </tbody>
                    </table>

                  </fieldset>

                </section>

              </section>
              <div id="contButton" className="w-100 bg-dark p-1 d-flex justify-content-center align-items-center">
                <section>
                  <button type="reset" className="btn-sm btn-info m-1">Limpar campo</button>
                  <button className="btn-sm btn-primary m-1">Mostrar Clientes </button>
                  <button className="btn-sm btn-success m-1">Salvar</button>
                </section>
              </div>
            </Form>

          </div>

        </div>

      </div>

    );
  }
}







