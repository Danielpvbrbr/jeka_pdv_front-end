import React, { Component } from 'react';
import Input from '../components/Input';
import "./ListEstoque.css";
import hamburgue from '../icones/hamburgue.png';
import edit from '../icones/edit.svg';
import circle from '../icones/bx-x-circle.svg';
import { Link } from "react-router-dom";
import axios from 'axios';
import api from '../services/api'
import Cookies from 'universal-cookie';
import AlterProdutos from './subPage/AlterProdutos';

export default class ListContasApagar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_produtos: [],
      validator: true,
      verific: true,
      getValue: '',
      show: false,
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  change = () => {
    this.setState({ validator: !this.state.validator })
  };

  getValueId = (id) => {
    const cookies = new Cookies();
    cookies.set("id", id.toString(), { path: "/estoque" });
    this.change();
  };

  showSeacrh = async () => {
    const search = this.state.search;
    const response = await api.get(`http://localhost:3001/api/produtos/estoque/${search}`).then(res => {
      this.setState({ list_produtos: response.data });
      this.setState({ show: true });
    });

  };

  showEveryone = async () => {
    const response = await api.get('/api/produtos')
    this.setState({ list_produtos: response.data })
    this.setState({ show: true })
  };

  showValue = (value) => {
    console.log('=>', value)
  };

  delMult = (id) => {
    this.showValue(id)
  };

  checkedAll = () => {
    const check = document.querySelectorAll('#check')
    this.setState({ verific: !this.state.verific })

    if (this.state.verific === true) {
      for (let i = 0, n = check.length; i < n; i++) {
        check[i].checked = true;
        const getValue = check[i].value;
        this.showValue(getValue)
      }
    } else {
      for (let i = 0, n = check.length; i < n; i++) {
        check[i].checked = false;
      }
    }
  };

  deleteStock = (id) => {
    if (window.confirm("Confirma o cancelamento do produto!")) {
      axios.delete(`api/produtos/estoque/${id}`).then(res => {
        alert("Produto deletado com sucesso!");
        window.location.replace('/estoque');
      })
    }
  };


  render() {
    const { list_produtos, validator, show } = this.state;
    return (
      <div id="contain-estoque" className="border border-success">

        <section className="col-md-12">
          <div className="border cont-busca p-1 d-flex justify-content-center align-items-center ">
            <Input
              type="search"
              onChange={this.handleChange}
              name="search"
              className="form-control form-control-sm w-50 m-1"
              placeholder="Digite a descrição do produto..."
            />

            <button onClick={() => this.showSeacrh()} className="btn-sm btn-primary">Buscar</button>
          </div>
        </section>

        <section id="contain-produtos" className="border d-flex justify-content-center">

          <div id="list-produtos">
            {
              show || <h2 className="mt-5 d-flex justify-content-center text-secondary">Nem um produto para axibir</h2>
            }
            {
              list_produtos.map((produtos, i) =>
                <ul key={i} className="list-group">
                  <Input onClick={() => this.delMult(produtos.id_produtos)} value={produtos.id_produtos} id="check" type="checkbox" />
                  <li className="mb-1 text-secondary list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                    <section>
                      <img alt="img-produto" src={hamburgue} />
                    </section>
                    {produtos.descricao_produt}
                    <section>
                      <span className="m-1 badge badge-primary text-white bg-primary">{produtos.estoque_atual_produt}</span>
                      <img id="img-icon" src={edit} alt="icon de editar form editar" onClick={() => this.getValueId(produtos.id_produtos)} />
                      <img id="img-icon" alt="img-delete" src={circle} onClick={() => this.deleteStock(produtos.id_produtos)} />
                    </section>

                  </li>
                </ul>
              )
            }
          </div>

        </section>

        <div id="contButton" className="w-100 bg-dark p-1 d-flex justify-content-center align-items-center">
          <section className="">
            <button onClick={() => this.checkedAll()} className="btn-sm btn-primary m-1">Selecionar todos</button>
            <button onClick={() => this.showEveryone()} className="btn-sm btn-primary m-1">Exibir todos</button>
            <button onClick={() => this.showValue()} className="btn-sm btn-danger m-1">Deletar</button>
            <Link to={'/formprodutos'}>
              <button className="btn-sm btn-success m-1">Adiconar</button>
            </Link>
          </section>
        </div>

        {
          validator || <section id="form-modal" className="border">
            <img id="img-delete" alt="img-delete" src={circle} onClick={() => this.change()} />
            <AlterProdutos />
          </section>
        }

      </div>
    )
  }
}