import React, { Component } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import "./ListClientes.css";
import axios from 'axios';

export default class ListClientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  };

  componentDidMount = async () => {
    axios.get('http://localhost:3001/api/clientes').then(res => {
      // console.log(res.data)
      this.setState({ list: res.data });
    })
  };

  render() {
    const { list } = this.state;
    return (
      <div id="contClients" className="border border-success">
        <div >
          <section className="col-md-12">
            <div className="cont-busca m-2 d-flex justify-content-center align-items-center ">
              <Input type="search" className="form-control form-control-sm w-50" placeholder="Digite o n° da conta, ou código conta" />
              <button className="btn-sm btn-primary">Buscar</button>
            </div>

          </section>
          <section id="contClienteTable">
            <table className="table table-bordered table-success ">
              <thead id="tableTitulo" className="thead-dark sticky-top">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Cód.Cliente</th>
                  <th scope="col">Nome</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Situação do cliente</th>
                  <th scope="col">Tipo de cliente</th>
                  <th scope="col">Data de registro</th>
                  <th scope="col">Detalhes</th>
                </tr>
              </thead>

              <tbody id="tableCampo">
                {
                  list.map((list, i) =>

                    <tr key={i}>
                      <td> <Input id="check" type="checkbox" /></td>
                      <td>{i++}</td>
                      <td>{list.nome_client}</td>
                      <td>{list.email_client}</td>
                      <td>{list.telefone_client}</td>
                      <td>{list.status_client}</td>
                      <td>{list.tipo_client}</td>
                      <td>{list.data_cadastro_client}</td>
                      <td>#</td>
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
              <Link to={'/formclientes'}>
                <button className="btn-sm btn-success m-1">Adiconar</button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    )
  }
}