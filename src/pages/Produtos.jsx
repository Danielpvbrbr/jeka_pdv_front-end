import React, { Component } from 'react';
import Menu from '../components/Menu';
import SubMenu from '../components/SubMenu';
import "../Home.css";
import "../pages/Produtos.css";
import "../components/Footer";
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Produtos extends Component {
  constructor(props){
    super(props);
    this.state = {
      cod_produt: '',
      descricao_produt: '',
      forn_produt: '',
      unidade_produt: '',
      local_produt: '',
      referencia_produt: '',
      fabricante_produt: '',
      cod_barras_produt: '',
      setor_produt: '',
      cod_interno_produt: '',
      preco_custo_produt: '',
      preco_venda_produt: '',
      preco_atacado_produt: '',
      preco_promo_produt: '',
      margem_lucro_produt: '',
      estoque_atual_produt: '',
      lucro_venda_produt: '',
      lucro_atacado_produt: '',
      data_cadastro_produt: '',
      foto_produt: []
    }
  };

  dataAtualFormatada = () => {
    var data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano  = data.getFullYear();
    return(ano+"-"+mes+"-"+dia);
  };

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  };

  handleSubmit = (e) => {
   
    const {
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
      foto_produt
    } = this.state;

    const data_cadastro_produt = this.dataAtualFormatada();
    axios.post('http://localhost:3001/api/cadastro/produtos',{
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
    return(
        
        <div className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>

          <div className="col-md-12 ">
            <section className="container ">
                <div>
                  <SubMenu/>
                </div>

              <section className="container p-0 m-0 h-75 border">

                <form onSubmit={this.handleSubmit} className="m-2 mb-3 contain-form ">
                    <section className="form">

                      <div className="mb-1 inp1">
                        <label htmlFor="formFile" className="form-label">Código do item</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="cod_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Descrição do Produto:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="descricao_produt" type="texto" required/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Fornecedor:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="forn_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Unidade:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="unidade_produt" type="texto" required/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Localização do produto, gôndola, pratileira:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="texto" />
                      </div>
                    </section>

                    <section className="form mb-3">

                      <div className="mb-1 inp">
                        <label htmlFor="formFile" className="form-label">Referência/Observação</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="referencia_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Fabricantes/Marca:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="fabricante_produt" type="texto" required/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileSm" className="form-label">Código de barras:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="cod_barras_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Setor:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="setor_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Código interno:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="cod_interno_produt" type="texto"/>
                      </div>
                    </section>

                    <section className="form mb-3">

                      <div className="mb-1 inp1">
                        <label htmlFor="formFile" className="form-label">Preço de custo</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="preco_custo_produt" type="texto" required/>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileSm" className="form-label">Preço de venda:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="preco_venda_produt" type="texto" required/>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Preço de atacado:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="preco_atacado_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Preço de promoção:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="preco_promo_produt" type="texto"/>
                      </div>
                    </section>

                    <section className="form mb-3">

                      <div className="inp1">
                        <label htmlFor="formFile" className="form-label">Estoque Atual</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="estoque_atual_produt" type="number"/>
                      </div>

                      <div className="inp">
                        <label htmlFor="formFileLg" className="form-label">Foto do produto:</label>
                        <input className="form-control form-control-sm " onChange={this.handleChange} name="cod_produt" type="file"/>
                      </div>
                    </section>
                      <button className="btn-sm btn-success mr-1">Salvar</button>
                      <Link  to={'/estoque'}>
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