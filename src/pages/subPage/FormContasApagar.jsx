import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css"
import "./FormContasApagar.css"
import "../../components/Footer";
import axios from 'axios'
import Input from '../../components/Input'

export default class FormContasApagar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };
  handleSubmit = async (e) => {
    e.preventDefault()
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  // componentDidMount = async () => {
  //   axios.get('http://localhost:3001/api/cadastro/produtos').then(res => {
  //     console.log(res)
  //     console.log(res.data)
  //   })

  // }

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

              <section id="container-contas" className="container p-0 m-0  border border-success">

                <form onSubmit={this.handleSubmit} className="m-2 mb-3 contain-form ">
                  <section className="form">

                    <div className="mb-1 inp1">
                      <label htmlFor="formFile" className="form-label">Código da Conta:</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_produt" type="text" />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileMultiple" className="form-label">Fornecedor / Prestadora:</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="descricao_produt" type="text" />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileSm" className="form-label">N° do Documento:</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="forn_produt" type="date" />
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileLg" className="form-label">Origem: </label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="unidade_produt" type="text" />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileLg" className="form-label">Vencimento	:</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                    </div>

                  </section>

                  <section className="form">

                    <div className="mb-1 inp">
                      <label htmlFor="formFileLg" className="form-label">Valor da conta:</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileLg" className="form-label">N°.Parcela:</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileLg" className="form-label">Valor das Parcelas:</label>
                      <Input className="form-control form-control-sm" onChange={this.handleChange} name="local_produt" type="text" disabled />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileLg" className="form-label">Forma de pagamento:</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="text" />
                    </div>
                  </section>

                  <fieldset className="mt-2">
                    <legend>Dados do Lançamento</legend>
                    <table className="table table-bordered table-success table-striped ">
                      <thead id="tableTitulo" className="thead-dark sticky-top">
                        <tr>
                          <th scope="col">Empresa - Credor:</th>
                          <th scope="col">N° do Documento:</th>
                          <th scope="col">Vencimento:</th>
                          <th scope="col">Valor das Parcelas:</th>
                        </tr>
                      </thead>

                      <tbody id="tableCampo">
                        <tr>
                          <td>001</td>
                          <td>Drogaria vieira</td>
                          <td>25/26/2820</td>
                          <td>20/05/2020</td>
                        </tr>

                        <tr>
                          <td>002</td>
                          <td>Drogaria vieira</td>
                          <td>25/26/2820</td>
                          <td>20/05/2020</td>
                        </tr>

                        <tr>
                          <td>002</td>
                          <td>Drogaria vieira</td>
                          <td>25/26/2820</td>
                          <td>20/05/2020</td>
                        </tr>
                      </tbody>
                    </table>
                  </fieldset>

                </form>
                <div id="contButton" className="w-100 bg-dark p-1 d-flex justify-content-center align-items-center">
                  <section>
                    <button className="btn-sm btn-primary m-1">Adicionar</button>
                    <button className="btn-sm btn-primary m-1">Alterar</button>
                    <button className="btn-sm btn-danger m-1">Deletar</button>
                    <button className="btn-sm btn-success m-1">Gerar parcelas</button>
                  </section>
                </div>
              </section>

            </section>

          </div>

        </div>

      </div>

    );
  }
}







