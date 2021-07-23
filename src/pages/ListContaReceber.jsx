import React, { Component } from "react";
import Input from "../components/Input"
import { Link } from "react-router-dom";
import "./ListContaReceber.css"

export default class ListContaReceber extends Component {
  render() {
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
                <tr >
                  <th scope="col">Cód.Conta</th>
                  <th scope="col">Nome do cliente</th>
                  <th scope="col">Data de emissão</th>
                  <th scope="col">Data de pagamento</th>
                  <th scope="col">Valor a receber</th>
                </tr>
              </thead>

              <tbody id="tableCampo">
                <tr>
                  <td>001</td>
                  <td>Drogaria vieira</td>
                  <td>25/26/2820</td>
                  <td>20/05/2020</td>
                  <td>99,58</td>
                </tr>

                <tr>
                  <td>002</td>
                  <td>Drogaria vieira</td>
                  <td>25/26/2820</td>
                  <td>20/05/2020</td>
                  <td>99,58</td>
                </tr>

                <tr>
                  <td>002</td>
                  <td>Drogaria vieira</td>
                  <td>25/26/2820</td>
                  <td>20/05/2020</td>
                  <td>99,58</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Drogaria vieira</td>
                  <td>25/26/2820</td>
                  <td>20/05/2020</td>
                  <td>99,58</td>
                </tr>

                <tr>
                  <td>002</td>
                  <td>Drogaria vieira</td>
                  <td>25/26/2820</td>
                  <td>20/05/2020</td>
                  <td>99,58</td>
                </tr>

                <tr>
                  <td>002</td>
                  <td>Drogaria vieira</td>
                  <td>25/26/2820</td>
                  <td>20/05/2020</td>
                  <td>99,58</td>
                </tr>

                <tr>
                  <td>001</td>
                  <td>Drogaria vieira</td>
                  <td>25/26/2820</td>
                  <td>20/05/2020</td>
                  <td>99,58</td>
                </tr>

                <tr>
                  <td>002</td>
                  <td>Drogaria vieira</td>
                  <td>25/26/2820</td>
                  <td>20/05/2020</td>
                  <td>99,58</td>
                </tr>

                <tr>
                  <td>002</td>
                  <td>Drogaria vieira</td>
                  <td>25/26/2820</td>
                  <td>20/05/2020</td>
                  <td>99,58</td>
                </tr>

              </tbody>
            </table>
          </section>
          <div id="contButton" className=" w-100  bg-dark p-1 d-flex justify-content-center align-items-center">
            <section className="">
              <button className="btn-sm btn-primary m-1">Selecionar todos</button>
              <button className="btn-sm btn-primary m-1">Exibir todos</button>
              <button className="btn-sm btn-danger m-1">Deletar</button>
              <Link to={'/formContaReceber'}>
                <button className="btn-sm btn-success m-1">Adiconar</button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    )
  }
}