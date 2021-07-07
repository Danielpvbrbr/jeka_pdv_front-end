import React, { Component } from "react";
import Input from "../components/Input"
import { Link } from "react-router-dom";
import "./ListClientes.css"

export default class ListClientes extends Component {
  render() {
    return (
      <div className="cont-estoque  border">
        <div >
          <section className="col-md-12 cont-1">
            <div className="cont-busca">
              <label>Busca Item Cadastrados:</label>
              <Input type="text"  placeholder="Busca por Nome do cliente, ou Código" />
              <button className="btn-sm btn-primary">Buscar</button>
            </div>

          </section>
          <section className="cont-2 ">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Cód.Cliente</th>
                  <th scope="col">Nome do Cliente</th>
                  <th scope="col">Debitos em abertos</th>
                  <th scope="col">Credito de crédito</th>
                  <th scope="col">Situação do cliente</th>
                  <th scope="col">Tipo de cliente</th>
                  <th scope="col">Data de cadastro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>07/04/2021</td>
                  <td>Dinheiro</td>
                  <td>12:00</td>
                  <td>0001</td>
                  <td>Daniel</td>
                  <td>07/04/2021</td>
                </tr>
              </tbody>
            </table>
          </section>
          <div className="cont-botão">
              <button className="btn-sm btn-primary">SELECIONAR TODOS</button>
              <button className="btn-sm btn-danger">DELETAR CLIENTE</button>
            <Link to={'/formclientes'}>
              <button className="btn-sm btn-success">ADICONAR CLIENTE</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}