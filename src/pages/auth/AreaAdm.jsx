import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css"
import "./AreaAdm.css"
import axios from 'axios'
import Input from '../../components/Input'
import iconPefil from '../../icones/bx-user-circle1.jpg'

export default class AreaAdm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Acess: []
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = async (e) => {
    axios.post('http://localhost:3001/api/cadastro/produtos', {

    }).then(res => {
      console.log(res.data)
    })
  }

  componentDidMount = async () => {
    axios.get('http://localhost:3001/api/acess/users').then(res => {
      // console.log(res)
      // console.log(res.data);
      this.setState({ Acess: res.data })
    })
  }

  render() {
    return (
      <div className="cont-principal">
        <div className="row">
          <header className="cont-menu">
            <Menu />
          </header>

          <div className="container-fluid border">
            <section className="container">

              <section id="contAdmin" className="row  border">

                <section id="contain1" className="col-md-4 border">
                  <div id="contain1-sub1" className="border">
                    <div id="contain-perfil" className="bg-primary">
                      <img src={iconPefil} alt="pefil" />

                      <div id="titulo">
                        <h1>Daniel nascimento</h1>
                        <p>Administrador</p>
                      </div>

                    </div>
                    <div className="bg-white">
                      <h4>E-MAIL</h4>
                      <p>dntechpvbr@gmail.com</p>
                      <h4>TELEFONE</h4>
                      <p>(32)98892-7397</p>
                      <h4>IDADE</h4>
                      <p>23 anos</p>
                    </div>
                  </div>

                </section>

                <section id="contain2" className="col-md-8 border">
                  <div  id="contain1-sub2" className="border">
                    
                  </div>
                </section>

              </section>

            </section>

          </div>

        </div>

      </div>

    );
  }
}







