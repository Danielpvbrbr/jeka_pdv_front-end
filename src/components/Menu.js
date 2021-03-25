import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

export default class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="cont-menu">
          <h4 className="titulo-menu float-sm-left">Menu</h4>
          <ul className="nav nav-pills p-1">
            <li className="nav-item ">
              <Link to="/" className="format-link nav-link" >
                <p className="nav-link">Cadastro de usuario</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/listUse" className="format-link nav-link" >
                <p className="nav-link">Lista de usuarios</p>
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    )
  }
};