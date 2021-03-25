import React, { Component } from 'react';
import Menu from './components/Menu'
import Input from './components/Input';
import Footer from './components/Footer'
import Titulo from './components/Titulo'
import axios from 'axios'
import "./Home.css"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email:'',
      senha:''
    };

  };
  
  handleChange = async (e) =>{
    this.setState({ [e.target.name]: e.target.value })
  }

 handleSubmit = async (e) =>{
    e.preventDefault()
    const { nome, senha, email } = this.state
     await axios.post('http://localhost:3001/api/cadastrar', 
    {
      username : nome,
      email : email,
      senha : senha, 
    })
        .then(res => {
            console.log(res);
            alert(res.data)
            window.location.reload();
        })
  }

  render() {
    return (
      <div className="container-fluid">
        <Menu />
        <div className="row">

          <section className="cont-central col-sm-12">
            <Titulo />
            <div className="cont-form p-5 form-group ">

              <form  onSubmit={this.handleSubmit} className="form-group w-100 ">
                <Input
                  className="form-control form-control-sm m-2"
                  type="text" 
                  name="nome"
                  placeholder="Nome"
                  onChange={this.handleChange}
                />

                <Input
                  className="form-control form-control-sm m-2"
                  type="text" 
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />

                 <Input
                  className="form-control form-control-sm m-2"
                  type="password" 
                  name="senha"
                  placeholder="Senha"
                  onChange={this.handleChange}
                  maxLength="6"
                />

                <Input
                  className="float-right btn-cadast"
                  type="submit"
                  id="element"
                  value="Cadastrar"
                />

              </form>
            </div>
          </section>
          <Footer />
        </div>
      </div>

    );
  };
};