import React, { Component } from "react";
import Input from "./Input"
import "./ContEstoque.css"
import hamburgue from "../icones/hamburgue.png"
import { Link } from "react-router-dom";
import axios from 'axios'

export default class ContEstoque extends Component {
  constructor(props){
    super(props);
    this.state = {
      list_produtos: []
    }
  }
  componentDidMount = async () => {
    axios.get('http://localhost:3001/api/produtos/estoque').then(res => {
    console.log(res.data)
    this.setState({list_produtos : res.data})
    })
  }
  render() {
    const { list_produtos } = this.state;
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
          <section className="cont-2 teste">
            <table className="table tableStoque" >
              <thead >
                <tr >
                  <th scope="col">Imagens</th>
                  <th scope="col">Cód.Item</th>
                  <th scope="col">Descrição do Item</th>
                  <th scope="col">Estoque</th>
                  <th scope="col">Unidade</th>
                  <th scope="col">Preço de venda</th>
                  <th scope="col">Preço de Atacado</th>
                  <th scope="col">Margem de lucro</th>
                  <th scope="col">Local do produto</th>
                </tr>
              </thead>
   
              <tbody>
                {
                list_produtos.map((produtos,i)=>
                  <tr className="text-white" key={i}>
                      <td><img alt="img-produto" src={hamburgue} /></td>
                      <td>{produtos.cod_produt}</td>
                      <td >{produtos.descricao_produt}</td>
                      <td >{produtos.estoque_atual_produt}</td>
                      <td >{produtos.unidade_produt}</td>
                      <td >{produtos.preco_venda_produt}</td>
                      <td >{produtos.preco_atacado_produt}</td>
                      <td >{produtos.preco_atacado_produt}</td>
                      <td >{produtos.local_produt}</td>
                    </tr>
                  )
                  
                }
                
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