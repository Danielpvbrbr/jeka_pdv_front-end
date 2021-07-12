import React, { Component } from "react";
import Input from "../components/Input"
import { Link } from "react-router-dom";
import "./ListClientes.css"

export default class ListContaReceber extends Component {
  render() {
    return (
      <div className="cont-estoque  border">
        <div >
          <section className="col-md-12 cont-1">
            <div className="cont-busca">
              <label>Busca:</label>
              <Input type="text"  placeholder="Digite a data" />
              <button className="btn-sm btn-primary">Buscar</button>
            </div>
          </section>
          <section className="cont-2 ">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Cód de conta</th>
                  <th scope="col">Descriçaõ do saldo</th>
                  <th scope="col">Saldo a receber</th>
                  <th scope="col">Referente a:</th>
                  <th scope="col">Forma de pagamento</th>
                  <th scope="col">Status de pagamento</th>
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
                </tr>
              </tbody>
            </table>
          </section>
          <div className="cont-botão">
              <button className="btn-sm btn-primary">SELECIONAR TODOS</button>
              <button className="btn-sm btn-danger">DELETAR CONTA</button>
            <Link to={'/formContaReceber'}>
              <button className="btn-sm btn-success">REGISTRAR SALDO</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}