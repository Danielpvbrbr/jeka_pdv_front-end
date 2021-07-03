import React, { Component } from "react";
import Input from "./Input"
import "./ContGerenciamento.css"

export default class ContGerenciamento extends Component {
  render() {
    return (
      <div className="cont-gerencimento  border">
        <div >
          <section className="col-md-12 cont-gerencimento-1">
            <div className="cont-form">
              <Input type="date" />
              <Input type="date" />
              <Input type="text" placeholder="Selecione Tipo de Venda" />
              <Input type="text" placeholder="Filtro por Vendedor" />
              <button className="btn-sm btn-primary">Buscar</button>
            </div>

          </section>
          <section className="cont-gerencimento-2 ">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">N°.Vendas</th>
                  <th scope="col">Cód.Item</th>
                  <th scope="col">Descrição do Item</th>
                  <th scope="col">Quatidade</th>
                  <th scope="col">Preço Unitário</th>
                  <th scope="col">Desconto</th>
                  <th scope="col">Total</th>
                  <th scope="col">Lucro</th>
                  <th scope="col">Data</th>
                  <th scope="col">Tipo de saida</th>
                  <th scope="col">Hora</th>
                  <th scope="col">Cód.Funcionario</th>
                  <th scope="col">Funcionario</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02</td>
                  <td>001</td>
                  <td>Hamburger</td>
                  <td>53</td>
                  <td>2,45</td>
                  <td>9,99</td>
                  <td>20,00</td>
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
          <section className="cont-inputs">

            <div className="cont-subInputs">
              <div className="border total-inputs">
                <label>TOTAL DE RECEBIMENTO</label>
                <Input type="text" placeholder="99,99" />
              </div>

              <div className="border total-inputs">
                <label>TOTAL VENDAS CANCELADAS</label>
                <Input type="text" placeholder="29" />
              </div>

              <div className="border total-inputs">
                <label>TOTAL DE DESCONTOS</label>
                <Input type="text" placeholder="-81,50" />
              </div>

              <div className="border total-inputs">
                <label>TOTAL DE LUCROS</label>
                <Input type="text" placeholder="264,65" />
              </div>

              <div className="border total-inputs">
                <label>TOTAL DE VENDAS</label>
                <Input type="text" placeholder="450,45" />
              </div>
            </div>

          </section>
        </div>
      </div>
    )
  }
}