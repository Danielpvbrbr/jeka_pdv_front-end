import React, { Component } from "react";
import Input from "../components/Input"
import { Link } from "react-router-dom";
import "./ListContasApagar.css"
import axios from 'axios';

export default class ListContasApagar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lancamento: []
    }
  };

  componentDidMount = async () => {
    axios.get('http://localhost:3001/api/conta/pagamentos').then(res => {
      // console.log(res)
      console.log(res.data)
      this.setState({ lancamento: res.data })
    })

  }
  render() {
    const { lancamento } = this.state;
    return (
      <div id="contContaApagar" className="border border-success">
        <div >
          <section className="col-md-12">
            <div className="cont-busca m-2 d-flex justify-content-center align-items-center ">
              <Input type="search" className="form-control form-control-sm w-50" placeholder="Digite o n° da conta, ou código conta" />
              <button className="btn-sm btn-primary">Buscar</button>
            </div>

          </section>
          <section id="ContaApagar">
            <table className="table table-bordered table-success table-striped ">
              <thead id="tableTitulo" className="thead-dark sticky-top">
                <tr >
                <th scope="col">#</th>
                  <th scope="col">Cód.Conta</th>
                  <th scope="col">Fornecedor / Prestadora</th>
                  <th scope="col">N°.Documento</th>
                  <th scope="col">Data de emissão</th>
                  <th scope="col">Data de vencimento</th>
                  <th scope="col">Valor de conta</th>
                  <th scope="col">N°.Parcela</th>
                  <th scope="col">Origem</th>
                </tr>
              </thead>

              <tbody id="tableCampo">
                {
                  lancamento.map((list, i) =>
                    <tr key={i}>
                      <td> <Input id="check" type="checkbox"/></td>
                      <td>000{i + 1}</td>
                      <td>N° {list.numero_doc}</td>
                      <td>{list.descricao}</td>
                      <td>{list.data_emissao}</td>
                      <td> {list.data_vencimento}</td>
                      <td>R$: {list.valor_conta}</td>
                      <td>{list.numero_parcelas}</td>
                      <td>{list.origem}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </section>
          <div id="contButton" className=" w-100  bg-dark p-1 d-flex justify-content-center align-items-center">
            <section className="">
              <button className="btn-sm btn-primary m-1">Selecionar todos</button>
              <button className="btn-sm btn-primary m-1">Exibir todos</button>
              <button className="btn-sm btn-danger m-1">Deletar</button>
              <Link to={'/formcontasapagar'}>
                <button className="btn-sm btn-success m-1">Adiconar</button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    )
  }
}