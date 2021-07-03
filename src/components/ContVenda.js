import React, { Component } from "react";
import Input from "./Input"
import DataButtonVenda from "./DataButtonVenda"
import TotalValoresVenda from "./TotalValoresVenda"
import "./ContVenda.css"
import hamburgue from "../icones/hamburgue.png"

export default class ContVenda extends Component {
  render() {
    return (
      <div className="cont-venda container-fluid">
        <div className="row">

          <section className="col-md-9 cont-venda-1">

            <section className="clearfix ">
              <div className="input-busca">
                <legend>ADICIONAR PRODUTOS CADASTRATOS</legend>
                <Input type="text" placeholder="Busca por Descrição do Item, ou Código de barras" />
              </div>

              <div className="input-quant">
                <legend>QUANTIDADE</legend>
                <Input placeholder="0" type="text" />
              </div>
            </section>

            <section className="border cont-venda-2sub">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Imagens</th>
                    <th scope="col">Cód.Item</th>
                    <th scope="col">Un</th>
                    <th scope="col">Descrição do Item</th>
                    <th scope="col">Estoque</th>
                    <th scope="col">Preço de venda</th>
                    <th scope="col">Preço de Atacado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img alt="img-produto" src={hamburgue} /></td>
                    <td>001</td>
                    <td>UN</td>
                    <td>Hamburger</td>
                    <td>2</td>
                    <td>9,99</td>
                    <td>0,00</td>
                  </tr>

                </tbody>
              </table>
            </section>

            <section className="clearfix ">
              <div className="input-descricao">
                <Input type="text" placeholder="Descrição do produto" />
              </div>
              <div className="input-descricao">
                <Input type="text" placeholder="Quantidade de item" />
              </div>
            </section>

            <section className="col-md-12 cont-venda-2">
              <TotalValoresVenda />
            </section>

          </section>

          <section className="col-md-3 cont-venda-3">
            <DataButtonVenda />
          </section>
        </div>
      </div>
    )
  }
}