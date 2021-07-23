import React, { Component } from 'react';
import Input from './components/Input';
import "./Login.css";
import axios from 'axios';
import Cookies from 'universal-cookie';
import jaca from './icones/jaca.png';

export default class Gerencimento extends Component {
  constructor() {
    super();
    this.state = {
      User: '',
      Pass: '',
      teste: true
    }
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  handleSubmit = async (e) => {
    const { User, Pass } = this.state


    try {
     axios.post(`http://localhost:3001/api/login/${User}/${Pass}`).then(res =>{
        console.log(res.data)
      })

      // if(response.data === "Login realizado com suceesso!"){
       
      // } else if (response.data === "Nome de usuário e / ou senha incorretos!") {
      //   alert("Usuario ou senha Incorretos!")
      //   // window.location.replace('/')
      // }
      
    } catch (e){
      alert('ERRO 002 - Serviço indisponível! Favor entrar em contato com o Suporte.')
    }
    // axios.get(`http://localhost:3001/api/login/${User}/${Pass}`)
    //   .then(res => {
    //     console.log(res.data)
    //     const UserCap = res.data.map(GetUser => GetUser.CPF_func);
    //     const PassCap = res.data.map(GetPass => GetPass.senha_operador_func);
    //     const TipoRota = res.data.map(GetPass => GetPass.tipo_func);
    //     const GetId = res.data.map(GetPass => GetPass.id_func);
    //     const acesso = res.data.map(GetPass => GetPass.acesso_pdv);
    //     const cookies = new Cookies();
    //     cookies.set("Id", GetId.toString(), { path: "/home" });

    //     if (User === UserCap.toString() && Pass === PassCap.toString() && acesso.toString() === 'true') {
    //        console.log("Logando aguarde");
    //       // 
    //       // if (TipoRota.toString() === 'administrador') {
    //       //   window.location.replace('/areadmin')
    //       // } else {
    //       //   window.location.replace('/home')
    //       // }
    //     } else {
    //       console.log('Usuario ou senha incorreto! Tente novamente');
    //       const teste = false
    //       this.setState({teste});
    //     }
    //     // if (acesso.toString() === 'false') {
    //     //   console.log('ops!!, Voce não tem acesso ao sistema, entre em contato com suporte');
    //     // }

    //   })
    e.preventDefault(e)
  }

  render() {
    const { teste } = this.state;
    return (
      <div className="cont-login container-fluid ">
        <div className="row">
          <header className="col-md-12">
          </header>

          <div className="col-md-12">
            <section className="container" >
              <form className="form-login" onSubmit={this.handleSubmit}>
                <section className="d-flex justify-content-center">
                  <img src={jaca} alt='icone jaca' className='iconeLogin' />
                </section>
                {
                  teste === true ? " " : <div className="alert alert-danger" role="alert">
                    Usuario o senha incorreto!
                  </div>
                }

                <label htmlFor="formFile" className="form-label">Usuario</label>
                <Input className="form-control form-control-sm " onChange={this.handleChange} name="User" type="texto" />

                <label htmlFor="formFile" className="form-label">Senha</label>
                <Input className="form-control form-control-sm " onChange={this.handleChange} name="Pass" type="password" />
                {/* <button onClick={this.ler} className='btn btn-dark float-right mt-2'>Entrar</button>  */}

                <Input className="form-control form-control-sm btn btn-dark mt-3" type="submit" value="Entrar" />

              </form>

            </section>

          </div>

        </div>

      </div>
    )
  }
};