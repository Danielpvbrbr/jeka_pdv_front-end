import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css"
import "../subPage/FormContasReceber.css"
import "../../components/Footer";
import axios from 'axios'
import Input from '../../components/Input'

export default class AreaAdm extends Component {
  constructor(props){
    super(props);
    this.state = {
      Acess: []
    }
  };

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  };

  handleSubmit = async (e) => {
    axios.post('http://localhost:3001/api/cadastro/produtos',{

    }).then(res => {
      console.log(res.data)
    })
  }

  componentDidMount = async () => {
    axios.get('http://localhost:3001/api/acess/users').then(res => {
      // console.log(res)
      // console.log(res.data);
      this.setState({Acess : res.data})
    })
  }

  render() {
      const { Acess } = this.state;
    return(
        <div className="cont-principal container-fluid">
        <div className="row">
          <header className="col-md-12 cont-menu">
            <Menu />
          </header>

          <div className="col-md-12 ">
            <section className="container ">
                <div>
                  <SubMenu/>
                </div>

              <section id="container-func" className="container p-0 m-0  border">

                <form onSubmit={this.handleSubmit} className="m-2 mb-3 contain-form ">                      
                    <section className="form">
                      
                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Tipo de usuario</label>
                        <select className="custom-select-sm" name='tipo'>
                          <option value="administrador">Administrador</option>
                          <option value="operador">Operador</option>
                        </select>
                      </div>

                      <div className="mb-1 inp1">
                        <label htmlFor="formFileLg" className="form-label">Nome</label>

                        <select className="custom-select-sm" name='tipo'>
                          <option value="administrador">Administrador</option>
                          <option value="operador">Operador</option>
                        </select>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Usuario/operador</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="texto"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileLg" className="form-label">Senha de acesso:</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="local_produt" type="texto"/>
                      </div>
                      </section>

                      <button className="btn-sm btn-primary mr-1">Adicionar</button>
                     
                    </form>
                    <section>
                      <h1 className="w-2">Lista de acesso</h1>
                      <div className="w-100 h-100 border">
                      <table className="table table-dark">
                          <thead>
                            <tr>
                              <th scope="col">Tipo</th>
                              <th scope="col">Nome</th>
                              <th scope="col">Usuario</th>
                              <th scope="col">Senha</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                            Acess.map((acess, i)=>
                              <tr key={i}>
                                <th scope="row">{acess.tipo_de_user}</th>
                                <td>{acess.login}</td>
                                <td>{acess.usuario_login}</td>
                                <td>{acess.senha_login}</td>
                              </tr>
                            )  
                            
                            }
                            
  
                          </tbody>
                        </table>

                        <button className="btn-sm btn-primary mr-1">Alterar</button>
                        <button className="btn-sm btn-danger">Excluir</button>
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







