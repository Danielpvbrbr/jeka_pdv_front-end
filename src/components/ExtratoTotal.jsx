import React, { Component } from "react";
import Input from "./Input"
import "./ExtratoTotal.css"

export default class ExtratoTotal extends Component {
  render() {
    return (
      <div id="contain-extrato" >
        <form className="container d-flex justify-content-center">
          <div className="row">
            <div className="col border border-success m-1 p-1">
              <p className="m-0 p-1 bg-success">EXTRATO [CONTAS A PAGAR]</p>
              <legend className="m-1">Vencimentas</legend>
              <Input type="text" className="form-control form-control-sm mb-0" placeholder="R$ 0,00" readOnly />
              <legend className="m-1">Amanhâ</legend>
              <Input type="text" className="form-control form-control-sm" placeholder="R$ 0,00" readOnly />
            </div>

            <div className="col border border-success m-1 p-1">
              <p className="m-0 p-1 bg-success">EXTRATO [CONTAS A RECEBER]</p>
              <legend className="m-1">Hojé</legend>
              <Input type="text" className="form-control form-control-sm mb-0" placeholder="R$ 0,00" readOnly />
              <legend className="m-1">Depois de Amanhâ</legend>
              <Input type="text" className="form-control form-control-sm" placeholder="R$ 0,00" readOnly />
            </div>
          </div>
        </form>
      </div>
    )
  }
}