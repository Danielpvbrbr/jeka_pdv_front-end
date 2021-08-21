import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css";
import "./FormContasApagar.css";
import "../../components/Footer";
import circle from '../../icones/bx-x-circle.svg';
import axios from 'axios';
import Input from '../../components/Input';

export default class FormContasApagar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lancamento: [],
      provider: '',
      category: '',
      typeOfPayment: '',
    }

  };
  typeChecker = () => {
    const Installments = document.querySelector('#numberOfInstallments');

    if (this.option()[2] === 'À vista') {
      Installments.disabled = true;
    } else {
      Installments.disabled = false;
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.typeChecker()
  };

  dataAtualFormatada = () => {
    var data = new Date(),
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();
    return (ano + "-" + mes + "-" + dia);
  };

  option = () => {
    const ProviderValue = document.getElementById('provider');
    const option_Provider = ProviderValue.options[ProviderValue.selectedIndex];
    const provider = option_Provider.text;

    const categoryValue = document.getElementById('category');
    const option_Category = categoryValue.options[categoryValue.selectedIndex];
    const category = option_Category.text;

    const typeOfPaymentValue = document.getElementById('typeOfPayment');
    const option_typeOfPayment = typeOfPaymentValue.options[typeOfPaymentValue.selectedIndex];
    const typeOfPayment = option_typeOfPayment.text;

    return [provider, category, typeOfPayment]
  };

  handleSubmit = async (e) => {
    const dataC = this.dataAtualFormatada();

    axios.post('http://localhost:3001/api/cadastro/pagamentos', {
      documentNumber: this.state.documentNumber,
      description: this.state.description,
      Provider: this.option()[0],
      issueDate: this.state.issueDate,
      source: this.state.source,
      maturity: this.state.maturity,
      accountValue: this.state.accountValue,
      numberOfInstallments: this.state.numberOfInstallments,
      category: this.option()[1],
      typeOfPayment: this.option()[2],
      dateC: dataC
    }).then(res => {
      console.log(res.data)
    })
    e.preventDefault()
  };

  componentDidMount = async () => {
   await axios.get('http://localhost:3001/api/conta/pagamentos').then(res => {
      // console.log(res)
      // console.log(res.data)
      this.setState({ lancamento: res.data })
    })

  };

  parcelas = () => {
    const parcelas = (this.state.accountValue / this.state.numberOfInstallments).toFixed(2);
    const NumeroParcelas = this.state.numberOfInstallments;
    return [parcelas, NumeroParcelas]
  };


  deleteList = (id) => {
    if (window.confirm("Deseja realmente deletar registro!")) {
      axios.delete(`http://localhost:3001/api/listas/contaP/${id}`).then(res => {
        alert("Registro deletado com sucesso!");
        window.location.replace('/formcontasapagar');
      })
    }
  };

  render() {
    const { lancamento } = this.state;

    return (
      <div className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>
          <div className="col-md-12 ">
            <form onSubmit={this.handleSubmit} className="container ">
              <div>
                <SubMenu />
              </div>
              <section id="container-contas" className="container p-0 m-0  border border-success">

                <section className="m-2 mb-3 contain-form ">
                  <section className="form">
                    <div className="mb-1 inp1">
                      <label htmlFor="formFileSm" className="form-label">N° do Documento:</label>
                      <Input
                        className="form-control form-control-sm"
                        onChange={this.handleChange}
                        name="documentNumber"
                        type="text"
                        maxLength="9"
                      />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileSm" className="form-label">Descrição:</label>
                      <Input
                        className="form-control form-control-sm "
                        onChange={this.handleChange}
                        name="description"
                        type="text"
                        maxLength="25"
                        required
                      />
                    </div>

                    <div className="inp form-group">
                      <label htmlFor="formFileSm" className="form-label">Fornecedor:</label>
                      <select id="provider" className="form-control form-control-sm">
                        <option className="value" value="Outros">Outros</option>
                        <option className="value" value="Ceming">Ceming</option>
                        <option className="text" value="Gazbrass">Gazbrass</option>
                        <option className="text" value="Magazine">Magazine Luiza</option>
                      </select>
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileLg" className="form-label">Emissão: </label>
                      <Input
                        className="form-control form-control-sm "
                        onChange={this.handleChange}
                        name="issueDate"
                        type="date"
                        required
                      />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileLg" className="form-label">Origem: </label>
                      <Input
                        className="form-control form-control-sm "
                        onChange={this.handleChange}
                        name="source"
                        type="text"
                        maxLength="25"
                      />
                    </div>

                  </section>

                  <section className="form">
                    <div className="mb-1 inp">
                      <label htmlFor="formFileLg" className="form-label">Vencimento	:</label>
                      <Input
                        className="form-control form-control-sm"
                        onChange={this.handleChange}
                        name="maturity"
                        type="date"
                        required
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
                      <label htmlFor="formFileLg" className="form-label">Valor da conta:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div id="sf" className="input-group-text">R$</div>
                        </div>
                        <Input
                          className="form-control form-control-sm"
                          onChange={this.handleChange}
                          name="accountValue"
                          type="number"
                        />
                      </div>
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileLg" className="form-label">N°.Parcela:</label>
                      <Input
                        className="form-control form-control-sm"
                        id="numberOfInstallments"
                        onChange={this.handleChange}
                        name="numberOfInstallments"
                        type="number"
                      />
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileLg" className="form-label">Valor das Parcelas:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div id="sf" className="input-group-text">R$</div>
                        </div>
                        <Input
                          className="form-control form-control-sm"
                          onChange={this.handleChange} name="valueOfInstallments"
                          value={this.parcelas()[0]}
                          type="text"
                          disabled
                        />
                      </div>
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
                  <div>
                    <legend>Dados do Lançamento</legend>
                    <section id="list_contas" className="mt-2 border">

                      <table className="table table-bordered table-success table-striped ">
                        <thead id="tableTitulo" className="thead-dark sticky-top">
                          <tr>
                            <th scope="col">Empresa - Credor:</th>
                            <th scope="col">N° do Documento:</th>
                            <th scope="col">Vencimento:</th>
                            <th scope="col">Valor das Parcelas:</th>
                            <th scope="col">#</th>
                          </tr>
                        </thead>

                        <tbody id="tableCampo">
                          {
                            lancamento.map((list, i) =>
                              <tr key={i}>
                                <td>{list.descricao}</td>
                                <td>N° {list.numero_doc}</td>
                                <td>{list.data_vencimento}</td>
                                <td>R$: {(list.valor_conta / list.numero_parcelas).toFixed(2)}</td>
                                <td>
                                  <img id="img-icon" alt="img-delete" src={circle} onClick={() => this.deleteList(list.id_contas)} />
                                </td>
                              </tr>
                            )
                          }
                        </tbody>
                      </table>
                    </section>
                  </div>
                </section>

              </section>
              <div id="contButton" className="w-100 bg-dark p-1 d-flex justify-content-center align-items-center">
                <section>
                  <button className="btn-sm btn-primary m-1">Alterar</button>
                  <button type="submit" className="btn-sm btn-success m-1">Salvar</button>
                </section>
              </div>
            </form>

          </div>

        </div>

      </div >

    );
  }
}







