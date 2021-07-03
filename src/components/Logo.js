import React,{Component} from "react"
import SuaLogo from "../icones/sua_logo.png"
import "./Logo.css"

export default class Logo extends Component {
  render(){
    return(
      <div className="logo_centro">
        <img alt="logo centro" src={SuaLogo}/>
      </div>
    )
  }
}