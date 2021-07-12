import React, { Component } from "react";
import Input from "./Input"
import "./ExtratoTotal.css"

export default class ExtratoTotal extends Component {
  render() {
    return (
      <div className="cont-meio">
        <div className="border cont-extrato">
          <p>EXTRATO [CONTAS A PAGAR]</p>
          <div className="bg-dager cont-input">

            <div className="input-1" >
              <legend>Vencimentas</legend>
              <Input type="text" placeholder="R$ 0,00" id="input-cor" readOnly="readOnly" />
            </div>

            <div className="input-1" >
              <legend>Amanhâ</legend>
              <Input type="text" placeholder="R$ 0,00" readOnly="readOnly" />
            </div>

            <div className="input-1" >
              <legend>Hojé</legend>
              <Input type="text" placeholder="R$ 0,00" readOnly="readOnly" />
            </div>

            <div className="input-1" >
              <legend>Depois de Amanhâ</legend>
              <Input type="text" placeholder="R$ 0,00" readOnly="readOnly" />
            </div>

          </div>
        </div>
        
        <div className="border cont-extrato">
          <p>EXTRATO [CONTAS A RECEBER]</p>
          <div className="bg-dager cont-input">

            <div className="input-1" >
              <legend>Vencimentas</legend>
              <Input type="text" placeholder="R$ 0,00" id="input-cor" readOnly="readOnly" />
            </div>

            <div className="input-1" >
              <legend>Amanhâ</legend>
              <Input type="text" placeholder="R$ 0,00" readOnly="readOnly" />
            </div>

            <div className="input-1" >
              <legend>Hojé</legend>
              <Input type="text" placeholder="R$ 0,00" readOnly="readOnly" />
            </div>

            <div className="input-1" >
              <legend>Depois de Amanhâ</legend>
              <Input type="text" placeholder="R$ 0,00" readOnly="readOnly" />
            </div>

          </div>
        </div>
      </div>
    )
  }
}