import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css";
import "../pages/../subPage/FormProdutos.css";
import "../../components/Footer";
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class FormProdutos extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  dataAtualFormatada = () => {
    var data = new Date(),
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();
    return (ano + "-" + mes + "-" + dia);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

  };

  handleSubmit = (e) => {

    const {
      cod_produt,
      descricao_produt,
      local_produt,
      referencia_produt,
      cod_barras_produt,
      cod_interno_produt,
      preco_custo_produt,
      preco_venda_produt,
      preco_atacado_produt,
      preco_promo_produt,
      estoque_atual_produt,
      foto_produt
    } = this.state;

    const fornecedor = document.getElementById('fornecedor');
    const option_fornecedor = fornecedor.options[fornecedor.selectedIndex];
    const forn_produt = option_fornecedor.text;

    const fabricante = document.getElementById('fabricante');
    const option_fabricante = fabricante.options[fabricante.selectedIndex];
    const fabricante_produt = option_fabricante.text;

    const setor = document.getElementById('setor');
    const option_setor = setor.options[setor.selectedIndex];
    const setor_produt = option_setor.text;


    const unidade = document.getElementById('setor');
    const option_unidade = unidade.options[unidade.selectedIndex];
    const unidade_produt = option_unidade.text;

    const data_cadastro_produt = this.dataAtualFormatada();
    axios.post('http://localhost:3001/api/cadastro/produtos', {
      cod_produt,
      descricao_produt,
      forn_produt,
      unidade_produt,
      local_produt,
      referencia_produt,
      fabricante_produt,
      cod_barras_produt,
      setor_produt,
      cod_interno_produt,
      preco_custo_produt,
      preco_venda_produt,
      preco_atacado_produt,
      preco_promo_produt,
      estoque_atual_produt,
      data_cadastro_produt,
      foto_produt
    }).then(res => {
      // console.log(res)
      // console.log(res.data)
      console.log('Produto cadastrados com sucesso!!');
      window.location.replace('/produtos');
    })

    e.preventDefault()
  }

  render() {
    return (

      <div className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>

          <div className="col-md-12 ">
            <section className="container ">
              <div>
                <SubMenu />
              </div>

              <section className="container p-0 m-0 h-75 border">

                <form onSubmit={this.handleSubmit} className="m-2 mb-3 contain-form ">
                  <section className="form">

                    <div className="mb-1 inp1">
                      <label htmlFor="formFile" className="form-label">Código do item</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="cod_produt" type="texto" maxLength="5" />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileMultiple" className="form-label">Descrição do Produto:</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="descricao_produt" type="texto" required maxLength="20" />
                    </div>

                    {/* <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Fornecedor:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="forn_produt" type="texto" maxLength="20"/>
                      </div> */}

                    <div className="inp1 form-group">
                      <label htmlFor="formFileSm" className="form-label">Fornecedor: *</label>
                      <select id="fornecedor" className="form-control form-control-sm">
                        <option className="value" value="administrador"></option>
                        <option className="value" value="administrador">LG</option>
                        <option className="text" value="operador">SANSUNG</option>
                        <option className="text" value="operador">Magazine Luiza</option>
                      </select>
                    </div>

                    {/* <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Unidade:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="unidade_produt" type="texto" required maxLength="5"/>
                      </div> */}

                    <div className="inp1 form-group">
                      <label htmlFor="formFileSm" className="form-label">Unidade: *</label>
                      <select id="unidade" className="form-control form-control-sm">
                        <option className="value" value=" "></option>
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
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="texto" maxLength="20" />
                    </div>
                  </section>

                  <section className="form mb-3">

                    <div className="mb-1 inp">
                      <label htmlFor="formFile" className="form-label">Referência/Observação</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="referencia_produt" type="texto" maxLength="20" />
                    </div>

                    {/* <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Fabricantes/Marca:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="fabricante_produt" type="texto" required maxLength="20"/>
                      </div> */}
                    <div className="inp1 form-group">
                      <label htmlFor="formFileSm" className="form-label">Fabricantes/Marca: *</label>
                      <select id="fabricante" className="form-control form-control-sm">
                        <option className="value" value="administrador"></option>
                        <option className="value" value="administrador">LG</option>
                        <option className="text" value="operador">Informatica</option>
                        <option className="text" value="operador">Padaria</option>
                      </select>
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileSm" className="form-label">Código de barras:</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="cod_barras_produt" type="texto" maxLength="13" />
                    </div>

                    {/* <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Setor:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="setor_produt" type="texto" maxLength="20"/>
                      </div> */}
                    <div className="inp1 form-group">
                      <label htmlFor="formFileSm" className="form-label">Setor: *</label>
                      <select id="setor" className="form-control form-control-sm">
                        <option className="value" value="administrador"></option>
                        <option className="value" value="administrador">LG</option>
                        <option className="text" value="operador">Informatica</option>
                        <option className="text" value="operador">Padaria</option>
                      </select>
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileLg" className="form-label">Código interno:</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="cod_interno_produt" type="texto" maxLength="14" />
                    </div>
                  </section>

                  <section className="form mb-3">

                    <div className="mb-1 inp1">
                      <label htmlFor="formFile" className="form-label">Preço de custo</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="preco_custo_produt" type="texto" required maxLength="7" />
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileSm" className="form-label">Preço de venda:</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="preco_venda_produt" type="texto" required maxLength="7" />
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileLg" className="form-label">Preço de atacado:</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="preco_atacado_produt" type="texto" maxLength="7" />
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileLg" className="form-label">Preço de promoção:</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="preco_promo_produt" type="texto" maxLength="7" />
                    </div>
                  </section>

                  <section className="form mb-3">

                    <div className="inp1">
                      <label htmlFor="formFile" className="form-label">Estoque Atual</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="estoque_atual_produt" type="number" />
                    </div>

                    <div className="inp">
                      <label htmlFor="formFileLg" className="form-label">Foto do produto:</label>
                      <input className="form-control form-control-sm " onChange={this.handleChange} name="foto_produt" type="file" />
                    </div>
                  </section>
                  <button className="btn-sm btn-success mr-1">Salvar</button>
                  <Link to={'/estoque'}>
                    <button className="btn-sm btn-primary">Voltar</button>
                  </Link>

                </form>
              </section>

            </section>

          </div>

        </div>

      </div>

    );
  }
}