import React, { Component } from "react"
import Input from "./Input"
import "./DataButtonVenda.css"
import { Link } from 'react-router-dom'
export default class DataButtonVenda extends Component {
  render() {
    return (
      <div id="latral-container" className="container border">
        <div className="input-data-hora">
          <div className="data">
            <legend>DATA DA VENDA</legend>
            <Input type="text" placeholder="04/04/2021" disabled/>
          </div>

          <div className="hora">
            <legend>HORA ATUAL</legend>
            <Input type="text" placeholder="12:37" disabled/>
          </div>
        </div>

        <div className="input-button">
          <button>CANCELAR VENDA</button>
          <Link to={'/home'}>
            <button>SAIR DO P.D.V</button>
          </Link>
          <button>FINALIZAR VENDA</button>
        </div>
      </div>

    )
  }
}