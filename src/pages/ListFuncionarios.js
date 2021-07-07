import React, { Component } from "react";
import Input from "../components/Input"
import { Link } from "react-router-dom";
import "./ListClientes.css"

export default class ListFuncionarios extends Component {
  render() {
    return (
      <div className="cont-estoque  border">
        <div >
          <section className="col-md-12 cont-1">
            <div className="cont-busca">
              <label>Busca Funcionarios Cadastrados:</label>
              <Input type="text"  placeholder="Digite a nome ou código do funcionario" />
              <button className="btn-sm btn-primary">Buscar</button>
            </div>
          </section>
          <section className="cont-2 ">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Cód do funcionario</th>
                  <th scope="col">Nome do funcionario</th>
                  <th scope="col">Data de nascimento</th>
                  <th scope="col">Data de cadastro:</th>
                  <th scope="col">Rua</th>
                  <th scope="col">Numero</th>
                  <th scope="col">Bairro</th>
                  <th scope="col">Cidade</th>
                  <th scope="col">Login</th>
                  <th scope="col">Senha</th>
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
                  <td>0001</td>
                  <td>Daniel</td>
                  <td>07/04/2021</td>
                </tr>
              </tbody>
            </table>
          </section>
          <div className="cont-botão">
              <button className="btn-sm btn-primary">SELECIONAR TODOS</button>
              <button className="btn-sm btn-danger">DELETAR FUNCIONARIO</button>
            <Link to={'/formfuncionarios'}>
              <button className="btn-sm btn-success">REGISTRAR FUNCIONARIO</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}