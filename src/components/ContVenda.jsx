import React, { Component } from "react";
import Input from "./Input";
import DataButtonVenda from "./DataButtonVenda";
import TotalValoresVenda from "./TotalValoresVenda";
import "./ContVenda.css";
import hamburgue from "../icones/hamburgue.png";
import api from '../services/api'

export default class ContVenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_produtos: [],
    };
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showSeacrh = async (search) => {
    const response = await api.get(`http://localhost:3001/api/produtos/estoque/${search}`)
    this.setState({ list_produtos: response.data });
  };

  selectProd = (id) => {
    console.log(id)
  }

  render() {
    const { list_produtos } = this.state;
    return (
      <div className="cont-venda container-fluid">
        <div className="row">

          <section className="col-md-9 cont-venda-1">

            <section id="contain-top" >
              <div className="d-flex justify-content-between align-items-center">
                <div className="input-busca">
                  <legend>ADICIONAR PRODUTOS CADASTRATOS</legend>
                  <Input
                    onChange={(e) => this.showSeacrh(e.target.value)}
                    type="search"
                    placeholder="Busca por Descrição do Item, ou Código de barras"
                    name="search"

                  />
                </div>

                <div className="input-quant">
                  <legend>QUANTIDADE</legend>
                  <Input
                    placeholder="0"
                    type="text"
                    disabled
                  />
                </div>
              </div>

            </section>

            <section className="border cont-venda-2sub">
              <div id="cointainList">
                <table className="table table-sm table-bordered table-striped">
                  <thead className="sticky-top">
                    <tr>
                      <th scope="col">#</th>
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
                    {
                      list_produtos.map((produtos, i) =>
                        <tr key={i}>
                          <td><Input onClick={() => this.selectProd(produtos.id_produtos)} value={produtos.id_produtos} id="check" type="checkbox" /></td>
                          <td><img alt="img-produto" src={hamburgue} /></td>
                          <td>{produtos.id_produtos}</td>
                          <td>{produtos.id_unidade_produt}</td>
                          <td>{produtos.descricao_produt}</td>
                          <td>{produtos.estoque_atual_produt}</td>
                          <td>{produtos.preco_venda_produt}</td>
                          <td>{produtos.preco_atacado_produt}</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>

            </section>

            <section className="d-flex justify-content-between align-items-center">
              <div className="input-descricao">
                <Input type="text" placeholder="Descrição do produto" disabled />
              </div>
              <div className="input-descricao">
                <Input type="text" placeholder="Quantidade de item" disabled />
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