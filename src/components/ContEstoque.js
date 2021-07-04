import React, { Component } from "react";
import Input from "./Input"
import "./ContEstoque.css"
import hamburgue from "../icones/hamburgue.png"
import { Link } from "react-router-dom";

export default class ContEstoque extends Component {
  render() {
    return (
      <div className="cont-estoque  border">
        <div >
          <section className="col-md-12 cont-1">
            <div className="cont-busca">
              <label>Busca Item Cadastrados:</label>
              <Input type="text"  placeholder="Busca por Descrição do Item, ou Código de barras" />
              <button className="btn-sm btn-primary">Buscar</button>
            </div>

          </section>
          <section className="cont-2 ">
            <table className="table">
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
          <div className="cont-botão">
            <button className="btn-sm btn-primary">SELECIONAR TODOS</button>
            <button className="btn-sm btn-primary">DELETAR ITEM</button>
            <Link to={'/produtos'}>
              <button className="btn-sm btn-primary">NOVO ITEM</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}