import React, { Component } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import "./ListContaReceber.css";
import axios from 'axios';

export default class ListContaReceber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
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
      <div id="contAccountReceive" className="border border-success">
        <div >
          <section className="col-md-12">
            <div className="cont-busca m-2 d-flex justify-content-center align-items-center">
              <Input type="search" className="form-control form-control-sm w-50" placeholder="Digite o n° da conta, ou código conta" />
              <button className="btn-sm btn-primary">Buscar</button>
            </div>

          </section>
          <section id="contFunction">
            <table className="table table-bordered table-success table-striped ">
              <thead id="tableTitulo" className="thead-dark sticky-top">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Cód:</th>
                  <th scope="col">N° do Documento:</th>
                  <th scope="col">Nome do cliente:</th>
                  <th scope="col">Data de emissão:</th>
                  <th scope="col">Data de pagamento:</th>
                  <th scope="col">Valor a receber:</th>
                </tr>
              </thead>

              <tbody id="tableCampo">
                {
                  list.map((list, i) =>
                    <tr key={i}>
                      <td> <Input id="check" type="checkbox" /></td>
                      <td>{i++}</td>
                      <td>{list.nome}</td>
                      <td>{list.numero_doc}</td>
                      <td>{list.emissao}</td>
                      <td>{list.vencimento}</td>
                      <td>{list.preco}</td>
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
              <Link to={'/formcontasreceber'}>
                <button className="btn-sm btn-success m-1">Adiconar</button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    )
  }
}