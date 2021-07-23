import React, { Component } from "react";
import Input from "../components/Input";
import "./ListEstoque.css";
import hamburgue from "../icones/hamburgue.png";
import circle from "../icones/bx-x-circle.svg"
import { Link } from "react-router-dom";
import axios from 'axios';

export default class ListEstoque extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_produtos: []
    }
  }
  componentDidMount = async () => {
    axios.get('http://localhost:3001/api/produtos/estoque').then(res => {
      // console.log(res.data)
      this.setState({ list_produtos: res.data })
    });

  }
  getValueId = (id) => {

    axios.get(`http://localhost:3001/api/produtos/${id}`).then(res => {
      // console.log(res.data)
      const code = res.data.map(person => person.cod_produt);
      const description = res.data.map(person => person.descricao_produt);
      const provider = res.data.map(person => person.forn_produt);
      const unity = res.data.map(person => person.unidade_produt);
      const localization = res.data.map(person => person.local_produt);
      const reference = res.data.map(person => person.referencia_produt);
      const manufacturer = res.data.map(person => person.fabricante_produt);
      const barCode = res.data.map(person => person.cod_barras_produt);
      const sector = res.data.map(person => person.setor_produt);
      const internalCode = res.data.map(person => person.cod_interno_produt);
      const costPrice = res.data.map(person => person.preco_custo_produt);
      const salePrice = res.data.map(person => person.preco_venda_produt);
      const wholesalePrice = res.data.map(person => person.preco_atacado_produt);
      const promotionalPrice = res.data.map(person => person.preco_promo_produt);
      const currentInventory = res.data.map(person => person.estoque_atual_produt);
      const registrationDate = res.data.map(person => person.data_cadastro_produt);

      const picture = res.data.map(person => person.foto_produt);
      console.log(picture)
      this.setState({
        code, description,
        provider,
        unity,
        localization,
        reference,
        manufacturer,
        barCode,
        sector,
        internalCode,
        costPrice,
        salePrice,
        wholesalePrice,
        promotionalPrice,
        currentInventory,
        registrationDate,
        picture
      })
    });
  };

  delEstoque = (id) => {
    axios.delete(`http://localhost:3001/api/produtos/estoque/${id}`).then(res => {
      if(window.confirm("Confirma o cancelamento do produto!")){
        console.log("Produto deletado com sucesso!")
        window.location.replace('/estoque')
      }
      
    })
  };

  render() {
    const {
      list_produtos,
      code,
      description,
      provider,
      unity,
      localization,
      reference,
      manufacturer,
      barCode,
      sector,
      internalCode,
      costPrice,
      salePrice,
      wholesalePrice,
      promotionalPrice,
      currentInventory,
      registrationDate,
      picture
    } = this.state;

    return (
      <div id="contain-estoque" className="container">
        <div className="row border">

          <section id="contain-1" className="col-md-6">
            <form className="d-flex justify-content-between align-items-center mb-1 mt-1">
              <Input type="seach" className="form-control " placeholder="Busca por descrição do item" />
              <button className="btn btn-outline-success ml-1">Buscar</button>
            </form>

            <form id="contain-meio" className="mb-2 p-1">
              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Código</label>
                  <input type="text" className="form-control form-control-sm   p-1" placeholder="First name" value={code || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Descrição/Nome</label>
                  <input type="text" className="form-control form-control-sm  p-1" placeholder="Last name" value={description || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Fornecedor</label>
                  <input type="text" className="form-control form-control-sm   p-1" placeholder="Last name" value={provider || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Unidade</label>
                  <input type="text" className="form-control form-control-sm   p-1" placeholder="Last name" value={unity || ''} onChange={this.getValueId} />
                </div>
              </div>

              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Local do produto</label>
                  <input type="text" className="form-control form-control-sm   p-1" placeholder="First name" value={localization || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Referência</label>
                  <input type="text" className="form-control form-control-sm   p-1" placeholder="Last name" value={reference || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Fabricante</label>
                  <input type="text" className="form-control form-control-sm   p-1" placeholder="Last name" value={manufacturer || ''} onChange={this.getValueId} />
                </div>

              </div>

              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Código de barras</label>
                  <input type="text" className="form-control form-control-sm p-1" placeholder="First name" value={barCode || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Setor</label>
                  <input type="text" className="form-control form-control-sm p-1" placeholder="Last name" value={sector || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Código</label>
                  <input type="text" className="form-control form-control-sm p-1" placeholder="Last name" value={internalCode || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Preço de custo</label>
                  <input type="text" className="form-control form-control-sm p-1" placeholder="Last name" value={costPrice || ''} onChange={this.getValueId} />
                </div>
              </div>

              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Preço de venda</label>
                  <input type="text" className="form-control form-control-sm  p-1" placeholder="First name" value={salePrice || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Preço de atacado</label>
                  <input type="text" className="form-control form-control-sm p-1" placeholder="Last name" value={wholesalePrice || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Preço promocional</label>
                  <input type="text" className="form-control form-control-sm p-1" placeholder="Last name" value={promotionalPrice || ''} onChange={this.getValueId} />
                </div>
              </div>

              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Estoque atual</label>
                  <input type="text" className="form-control form-control-sm p-1" placeholder="First name" value={currentInventory || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Código</label>
                  <input type="text" className="form-control form-control-sm p-1" placeholder="Last name" value={registrationDate || ''} onChange={this.getValueId} />
                </div>

                <div className="col">
                  <label htmlFor="exampleFormControlFile1">Foto do produto</label>
                  <input type="text" className="form-control form-control-sm p-1" placeholder="Last name" value={picture || ''} onChange={this.getValueId} />
                </div>

              </div>

            </form>

            <div className="d-flex justify-content-between align-items-center">
              <button className="btn-sm btn-primary ">Selecionar todos</button>
              <button className="btn-sm btn-danger ">Deletar produto</button>
              <Link to={'/formprodutos'}>
                <button className="btn-sm btn-success ">Adicionar produto</button>
              </Link>
            </div>

          </section>

          <section id="contain-2" className="col-md-6">

            <div id="listContain" className=" mt-1">
              {
                list_produtos.map((produtos, i) =>
                  <ul key={i} className="list-group ">
                    <li onClick={() => this.getValueId(produtos.id_produtos)} className="mb-1 text-secondary list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                      <img alt="img-produto" src={hamburgue} />  {produtos.descricao_produt}
                      {/* <span className="badge badge-info text-dark badge-pill">{produtos.estoque_atual_produt}</span> */}
                      <img id="img-delete" alt="img-delete" src={circle}  onClick={() => this.delEstoque(produtos.id_produtos)}/>
                    </li>
                  </ul>
                )
              }
            </div>

          </section>
        </div>
      </div>
    )
  }
}