import React, { Component } from 'react';
import "../../Home.css";
import "./AlterProdutos.css";
import "../../components/Footer";
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class AlterProdutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      provider: '',
      unity: '',
      localization: '',
      reference: '',
      manufacturer: '',
      barCode: '',
      sector: '',
      internalCode: '',
      costPrice: '',
      salePrice: '',
      wholesalePrice: '',
      promotionalPrice: '',
      currentInventory: '',
    }
  };



  handlelocation = (e) => {
    this.setState({ localization: e.target.value });
  };

  deleteStock = () => {
    const id = cookies.get('id');

    axios.delete(`http://localhost:3001/api/produtos/estoque/${id}`).then(res => {
      if (window.confirm("Confirma o cancelamento do produto!")) {
        console.log("Produto deletado com sucesso!")
        window.location.replace('/estoque')
      }

    })
  };

  componentDidMount = async () => {
    const id = cookies.get('id');

    axios.get(`http://localhost:3001/api/produtos/${id}`).then(res => {
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

      this.setState({
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
      })
    });
  };

  handleSubmit = async (e) => {
    const id = cookies.get('id');

    axios.put('http://localhost:3001/api/update/cadastro/produtos', {
      id,
      description: this.state.description,
      provider: this.state.provider,
      unity: this.state.unity,
      localization: this.state.localization,
      reference: this.state.reference,
      manufacturer: this.state.manufacturer,
      barCode: this.state.barCode,
      sector: this.state.sector,
      internalCode: this.state.internalCode,
      costPrice: this.state.costPrice,
      salePrice: this.state.salePrice,
      wholesalePrice: this.state.wholesalePrice,
      promotionalPrice: this.state.promotionalPrice,
      currentInventory: this.state.currentInventory,
      alert
    }).then(res => {
      alert('Alteração realizada com sucesso!')
      window.location.replace('/estoque')
    })
    e.preventDefault()
  }

  render() {
    return (
      <div id="altProdut" className="container">
        <div className="row">

          <div className="col-md-12">
            <form className="m-2 border " onSubmit={this.handleSubmit}>


              <section className=" p-0 m-0 h-75 border">

                <section className="m-2 mb-3 contain-alt ">
                  <section className="form">

                    <div className="mb-1 inp">
                      <label htmlFor="formFileMultiple" className="form-label">Descrição do Produto:</label>
                      <input value={this.state.description || ''} className="form-control form-control-sm " onChange={(e) => this.setState({ description: e.target.value })} name="descricao_produt" type="texto" required maxLength="20" />
                    </div>

                    <div className="inp1 form-group">
                      <label htmlFor="formFileSm" className="form-label">Fornecedor:</label>
                      <select id="fornecedor" className="form-control form-control-sm">
                        <option className="value" value="administrador"></option>
                        <option className="value" value="administrador">LG</option>
                        <option className="text" value="operador">SANSUNG</option>
                        <option className="text" value="operador">Magazine Luiza</option>
                      </select>
                    </div>

                    <div className="inp1 form-group">
                      <label htmlFor="formFileSm" className="form-label">Unidade:</label>
                      <select id="unidade" className="form-control form-control-sm">
                        <option className="value" value="UN">UN</option>
                        <option className="text" value="BD">BD</option>
                        <option className="text" value="CM">CM</option>
                        <option className="text" value="CX">CX</option>
                        <option className="text" value="DZ">DZ</option>
                        <option className="text" value="FD">FD</option>
                        <option className="text" value="GL">GL</option>
                        <option className="text" value="GR">GR</option>
                        <option className="text" value="KG">KG</option>
                        <option className="text" value="LT">LT</option>
                        <option className="text" value="M2">M2</option>
                        <option className="text" value="M3">M3</option>
                        <option className="text" value="MG">MG</option>
                        <option className="text" value="ML">ML</option>
                        <option className="text" value="MM">MM</option>
                        <option className="text" value="PC">PC</option>
                      </select>
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileLg" className="form-label">Localização do produto, gôndola, pratileira:</label>
                      <input value={this.state.localization || ''} className="form-control form-control-sm " onChange={(e) => this.setState({ localization: e.target.value })} name="local_produt" type="texto" maxLength="20" />
                    </div>
                  </section>

                  <section className="form mb-3">

                    <div className="mb-1 inp">
                      <label htmlFor="formFile" className="form-label">Referência/Observação</label>
                      <input value={this.state.reference || ''} className="form-control form-control-sm " onChange={(e) => this.setState({ reference: e.target.value })} name="referencia_produt" type="texto" maxLength="20" />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileMultiple" className="form-label">Fabricantes/Marca:</label>
                      <input value={this.state.manufacturer || ''} className="form-control form-control-sm " onChange={(e) => this.setState({ manufacturer: e.target.value })} name="fabricante_produt" type="texto" required maxLength="20" />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileSm" className="form-label">Código de barras:</label>
                      <input value={this.state.barCode || ''} className="form-control form-control-sm " onChange={(e) => this.setState({ barCode: e.target.value })} name="cod_barras_produt" type="texto" maxLength="13" />
                    </div>

                    <div className="inp1 form-group">
                      <label htmlFor="formFileSm" className="form-label">Setor:</label>
                      <select id="setor" className="form-control form-control-sm">
                        <option className="value" value="administrador"></option>
                        <option className="value" value="administrador">LG</option>
                        <option className="text" value="operador">Informatica</option>
                        <option className="text" value="operador">Padaria</option>
                      </select>
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileLg" className="form-label">Código interno:</label>
                      <input value={this.state.internalCode || ''} className="form-control form-control-sm " onChange={(e) => this.setState({ internalCode: e.target.value })} name="cod_interno_produt" type="number" maxLength="14" />
                    </div>
                  </section>

                  <section className="form mb-3">

                    <div className="mb-1 inp1">
                      <label htmlFor="formFile" className="form-label">Preço de custo</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">R$</div>
                        </div>
                        <input value={this.state.costPrice || ''} className="form-control form-control-sm " onChange={(e) => this.setState({ costPrice: e.target.value })} name="preco_custo_produt" type="number" required maxLength="7" />
                      </div>
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileSm" className="form-label">Preço de venda:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">R$</div>
                        </div>
                        <input value={this.state.salePrice || ''} className="form-control form-control-sm" onChange={(e) => this.setState({ salePrice: e.target.value })} name="preco_venda_produt" type="number" required maxLength="7" />
                      </div>
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileLg" className="form-label">Preço de atacado:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">R$</div>
                        </div>
                        <input value={this.state.wholesalePrice || ''} className="form-control form-control-sm " onChange={(e) => this.setState({ wholesalePrice: e.target.value })} name="preco_atacado_produt" type="number" maxLength="7" />
                      </div>
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileLg" className="form-label">Preço de promoção:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">R$</div>
                        </div>
                        <input value={this.state.promotionalPrice || ''} className="form-control form-control-sm " onChange={(e) => this.setState({ promotionalPrice: e.target.value })} name="preco_promo_produt" type="number" maxLength="7" />
                      </div>
                    </div>
                  </section>

                  <section className="form mb-3">

                    <div className="inp1">
                      <label htmlFor="formFile" className="form-label">Estoque Atual</label>
                      <input value={this.state.currentInventory || ''} className="form-control form-control-sm " onChange={(e) => this.setState({ currentInventory: e.target.value })} name="estoque_atual_produt" type="number" />
                    </div>

                    <div className="inp">
                      <label htmlFor="formFileLg" className="form-label">Foto do produto:</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="foto_produt" type="file" />
                    </div>
                  </section>

                </section>
              </section>
              <div id="contButton" className=" w-100 bg-dark p-1 d-flex justify-content-center align-items-center">
                <section>
                  <button onClick={() => this.deleteStock()} className="btn-sm btn-danger m-1">Deletar</button>
                  <button type="submit" className="btn-sm btn-success m-1">Salvar</button>
                </section>
              </div>
            </form>

          </div>

        </div>

      </div>

    );
  }
}