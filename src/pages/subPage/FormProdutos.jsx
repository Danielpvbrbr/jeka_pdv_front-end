import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css";
import "../pages/../subPage/FormProdutos.css";
import "../../components/Footer";
import axios from 'axios';
import Input from '../../components/Input';
export default class FormProdutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IMG: '',
      img_produtos: [],
      img_preview: []
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

  uploadAction = () => {
    const formData = new FormData();
    const imagedata = document.querySelector('input[type="file"]').files[0];
    formData.append("IMG", imagedata);

    fetch("http://localhost:3001/api/img", {
      mode: 'no-cors',
      method: "POST",
      headers: {
        "Content-Type": "form-data",
        "Accept": "image/png",
        "type": "formData"
      },
      body: formData
    }).then(function (res) {
      if (res.ok) {
        alert("Enviado com sucesso! ");
      } else if (res.status === 401) {
        alert("Oops! ");
      }
    }, function (e) {
      alert("Erro ao enviar formulário!");
    });
  }

  handleSubmit = (e) => {
    const {
      descricao_produt,
      local_produt,
      referencia_produt,
      fabricante_produt,
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

    const setor = document.getElementById('setor');
    const option_setor = setor.options[setor.selectedIndex];
    const setor_produt = option_setor.text;

    const unidade = document.getElementById('unidade');
    const option_unidade = unidade.options[unidade.selectedIndex];
    const unidade_produt = option_unidade.text;

    const data_cadastro_produt = this.dataAtualFormatada();

    axios.post('http://localhost:3001/api/cadastro/produtos', {
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
      window.location.replace('/estoque');
    });


    e.preventDefault()
  };

  limpar = () => {
    document.getElementById('campo').value = ''
  };


  // componentDidMount = () => {
  //   axios.get('http://localhost:3001/api/img/toView').then(res => {
  //     console.log(res)
  //     //  console.log(res.headers)
  //     this.setState({ img_produtos: res.data })

  //   })
  // }

  render() {
    return (

      <div className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>

          <div className="col-md-12">
            <form className="container" onSubmit={this.handleSubmit} encType="multipart/form-data" action="">
              <div>
                <SubMenu />
              </div>

              <section className="container p-0 m-0 h-75 border">

                <section className="m-2 mb-3 contain-form ">
                  <section className="form">

                    <div className="mb-1 inp">
                      <label htmlFor="formFileMultiple" className="form-label">Descrição do Produto:</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="descricao_produt" type="texto" required maxLength="20" />
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
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="texto" maxLength="20" />
                    </div>
                  </section>

                  <section className="form mb-3">

                    <div className="mb-1 inp">
                      <label htmlFor="formFile" className="form-label">Referência/Observação</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="referencia_produt" type="texto" maxLength="20" />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileMultiple" className="form-label">Fabricantes/Marca:</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="fabricante_produt" type="texto" required maxLength="20" />
                    </div>

                    <div className="mb-1 inp">
                      <label htmlFor="formFileSm" className="form-label">Código de barras:</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_barras_produt" type="texto" maxLength="13" />
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
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_interno_produt" type="number" maxLength="14" />
                    </div>
                  </section>

                  <section className="form mb-3">

                    <div className="mb-1 inp1">
                      <label htmlFor="formFile" className="form-label">Preço de custo</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">R$</div>
                        </div>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="preco_custo_produt" type="number" required maxLength="7" />
                      </div>
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileSm" className="form-label">Preço de venda:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">R$</div>
                        </div>
                        <input className="form-control form-control-sm" onChange={this.handleChange} name="preco_venda_produt" type="number" required maxLength="7" />
                      </div>
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileLg" className="form-label">Preço de atacado:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">R$</div>
                        </div>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="preco_atacado_produt" type="number" maxLength="7" />
                      </div>
                    </div>

                    <div className="mb-1 inp1">
                      <label htmlFor="formFileLg" className="form-label">Preço de promoção:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">R$</div>
                        </div>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="preco_promo_produt" type="number" maxLength="7" />
                      </div>
                    </div>
                  </section>

                  <section className="form mb-3">

                    <div className="inp1">
                      <label htmlFor="formFile" className="form-label">Estoque Atual</label>
                      <Input className="form-control form-control-sm " onChange={this.handleChange} name="estoque_atual_produt" type="number" required />
                    </div>

                    <div className="inp ">
                      <label htmlFor="formFileLg" className="form-label">Foto do produto:</label>
                      <Input accept="image/*" className="form-control form-control-sm " type="file" name="data" />
                      <Input className="btn-sm btn-info m-1" type="button" value="Adiconar" onClick={() => this.uploadAction()} />
                    </div>
                  </section>

                </section>
              </section>
              <div id="contButton" className=" w-100 bg-dark p-1 d-flex justify-content-center align-items-center">

                <section>
                  <button type="reset" className="btn-sm btn-info m-1">Limpar os campos</button>
                  <button type="submit" className="btn-sm btn-success m-1">Adiconar</button>
                </section>
              </div>
            </form>

          </div>

        </div>

      </div>

    );
  }
}