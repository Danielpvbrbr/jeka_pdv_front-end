import React, {Component} from "react"
import Input from "./Input"
import "./TotalValoresVenda.css"
export default class TotalValoresVenda extends Component {
  render(){
    return(
      <div className="border input-campo-total">

      <div className="campo-1">
        <legend>VALOR UNITÁRIO</legend>
        <Input type="text" placeholder="45,25" disabled/>

        <legend>QUANTIDADE</legend>
        <Input type="text" placeholder="05" disabled/>
      </div>

      <div className="campo-2">
        <legend>SUBTOTAL</legend>
        <Input type="text" placeholder="84,26" disabled/>

        <legend>CÓDIGO DE CADASTRO</legend>
        <Input type="text" placeholder="002" disabled/>
      </div>

      <div className="campo-3">
        <legend>VALOR TOTAL DA VENDA</legend>
        <Input type="text" placeholder="99,99" disabled />
      </div>

    </div>

    )
  }
}