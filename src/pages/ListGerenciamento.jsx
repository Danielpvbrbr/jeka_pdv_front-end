import React, { Component } from "react";
import Input from "../components/Input";
import "./ListGerenciamento.css";

export default class ListGerenciamento extends Component {
  render() {
    return (
      <div className="cont-gerencimento  border border-success">
        <div>
          <section className="col-md-12 cont-gerencimento-1">
            <div className="cont-form ">
              <Input className="form-control form-control-sm w-25 m-1" type="date" />
              <Input className="form-control form-control-sm w-25 m-1" type="date" />
              <Input type="search" className="form-control form-control-sm w-25 m-1" placeholder="Digite o n° da conta, ou código conta" />
              <button className="btn-sm btn-primary m-1">Buscar</button>
            </div>
          </section>
          <section className="cont-gerencimento-2">
            <table className="table table-bordered table-success table-striped">
              <thead className="thead-dark sticky-top ">
                <tr>
                  <th scope="col">N°.Vendas</th>
                  <th scope="col">Caixa</th>
                  <th scope="col">Nome / Descrição</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Preço Unitário</th>
                  <th scope="col">Desconto</th>
                  <th scope="col">Lucro</th>
                  <th scope="col">Total</th>
                  <th scope="col">Data</th>
                  <th scope="col">Tipo de saida</th>
                  <th scope="col">Hora</th>
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
                  <td>20,00</td>
                  <td>10/02/2020</td>
                  <td>A vista</td>
                  <td>19:20</td>
                </tr>

                <tr>
                  <td>02</td>
                  <td>001</td>
                  <td>Hamburger</td>
                  <td>53</td>
                  <td>2,45</td>
                  <td>9,99</td>
                  <td>20,00</td>
                  <td>20,00</td>
                  <td>28/05/2005</td>
                  <td>A vista</td>
                  <td>18:35</td>
                </tr>


                <tr>
                  <td>02</td>
                  <td>001</td>
                  <td>Hamburger</td>
                  <td>53</td>
                  <td>2,45</td>
                  <td>9,99</td>
                  <td>20,00</td>
                  <td>20,00</td>
                  <td>10/02/2020</td>
                  <td>A vista</td>
                  <td>19:20</td>
                </tr>

                <tr>
                  <td>02</td>
                  <td>001</td>
                  <td>Hamburger</td>
                  <td>53</td>
                  <td>2,45</td>
                  <td>9,99</td>
                  <td>20,00</td>
                  <td>20,00</td>
                  <td>28/05/2005</td>
                  <td>A vista</td>
                  <td>18:35</td>
                </tr>

                <tr>
                  <td>02</td>
                  <td>001</td>
                  <td>Hamburger</td>
                  <td>53</td>
                  <td>2,45</td>
                  <td>9,99</td>
                  <td>20,00</td>
                  <td>20,00</td>
                  <td>10/02/2020</td>
                  <td>A vista</td>
                  <td>19:20</td>
                </tr>

                <tr>
                  <td>02</td>
                  <td>001</td>
                  <td>Hamburger</td>
                  <td>53</td>
                  <td>2,45</td>
                  <td>9,99</td>
                  <td>20,00</td>
                  <td>20,00</td>
                  <td>28/05/2005</td>
                  <td>A vista</td>
                  <td>18:35</td>
                </tr>

                <tr>
                  <td>02</td>
                  <td>001</td>
                  <td>Hamburger</td>
                  <td>53</td>
                  <td>2,45</td>
                  <td>9,99</td>
                  <td>20,00</td>
                  <td>20,00</td>
                  <td>28/05/2005</td>
                  <td>A vista</td>
                  <td>18:35</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="cont-inputs">

            <form >
              <div id="total-inputs" className="row">

                <div className="col border border-success m-1 mb-1 p-1">
                  <p className="m-0 p-1 bg-success">TOTAL DE RECEBIMENTO</p>
                  <Input type="text" className="form-control form-control-sm mb-0" placeholder="R$ 0,00" readOnly />
                </div>

                <div className="col border border-success m-1 mb-1 p-1">
                  <p className="m-0 p-1 bg-danger">TOTAL VENDAS CANCELADAS</p>
                  <Input type="text" className="form-control form-control-sm mb-0 text-danger" placeholder="R$ 0,00" readOnly />
                </div>

                <div className="col border border-success m-1 mb-1 p-1">
                  <p className="m-0 p-1 bg-success">TOTAL DE DESCONTOS</p>
                  <Input type="text" className="form-control form-control-sm mb-0" placeholder="R$ 0,00" readOnly />
                </div>

                <div className="col border border-success m-1 mb-1 p-1">
                  <p className="m-0 p-1 bg-success">TOTAL DE LUCROS</p>
                  <Input type="text" className="form-control form-control-sm mb-0" placeholder="R$ 0,00" readOnly />
                </div>

                <div className="col border border-success m-1 mb-1 p-1">
                  <p className="m-0 p-1 bg-info">TOTAL DE VENDAS</p>
                  <Input type="text" className="form-control form-control-sm mb-0" placeholder="R$ 0,00" readOnly />
                </div>
              </div>
            </form>

          </section>
        </div>
      </div>
    )
  }
}