import React, { Component } from "react";
import Input from "../components/Input"
import { Link } from "react-router-dom";
import "./ListFuncionarios.css"

export default class ListFuncionarios extends Component {
  render() {
    return (
      <div id="contFunction" className="border border-success">
        <div >
          <section className="col-md-12">
            <div className="cont-busca m-2 d-flex justify-content-center align-items-center">
              <Input type="search" className="form-control form-control-sm w-50" placeholder="Digite o n° da conta, ou código conta" />
              <button className="btn-sm btn-primary">Buscar</button>
            </div>

          </section>
          <section id="contTableFunction">
            <table className="table table-bordered table-success table-striped ">
              <thead id="tableTitulo" className="thead-dark">
                <tr>
                  <th scope="col">Nome do Funcionarios</th>
                  <th scope="col">Cargo</th>
                </tr>
              </thead>

              <tbody id="tableCampo">
                <tr>
                  <td>Drogaria vieira</td>
                  <td>68958</td>
                </tr>

                <tr>
                  <td>Drogaria vieira</td>
                  <td>68958</td>
                </tr>

              </tbody>
            </table>
          </section>

          <div id="contButton" className=" w-100  bg-dark p-1 d-flex justify-content-center align-items-center">
            <section className="">
              <button className="btn-sm btn-primary m-1">Selecionar todos</button>
              <button className="btn-sm btn-primary m-1">Exibir todos</button>
              <button className="btn-sm btn-danger m-1">Deletar</button>
              <Link to={'/formfuncionarios'}>
                <button className="btn-sm btn-success m-1">Adiconar</button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
