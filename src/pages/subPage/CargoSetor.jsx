import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css";
import "./CargoSetor.css";
import "../../components/Footer";
import axios from 'axios';
import Input from '../../components/Input';
import del from '../.././icones/bx-x-circle.svg'

export default class CargoSetor extends Component {
  constructor(props){
    super(props);
    this.state = {
      setor:'',
      cargos: '',
      list_setor: [],
      list_cargo: []
    }
  };

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  };

  handleSubmit = (e) => {
    const {setor,cargos} = this.state;
    if(cargos.length >= 2){
      axios.post('http://localhost:3001/api/cargo/create',{
        cargos
      }).then(res => {
       console.log('Cadastro de realizado com sucesso!')
       window.location.replace('/cargosetor')
        // console.log(res.data)
      })
    }
    if(setor.length >= 2){
      axios.post('http://localhost:3001/api/setor/create',{
        setor
      }).then(res => {
       console.log('Cadastro de realizado com sucesso!')
       window.location.replace('/cargosetor')
        // console.log(res.data)
      })
    }
    

    e.preventDefault()
  }

  componentDidMount = async () => {
    axios.get('http://localhost:3001/api/cargo').then(res => {
      // console.log(res)
      // console.log(res.data)
      this.setState({list_cargo : res.data})
    })

    axios.get('http://localhost:3001/api/setor').then(res => {
      // console.log(res)
      // console.log(res.data)
      this.setState({list_setor : res.data})
    })

  }
  deleteSetor = (id_setor) =>{
    if(window.confirm('Voçe realmente deletar o setor?'))
    axios.delete(`http://localhost:3001/api/delete/setor/${id_setor}`).then(res => {
      console.log(res.data)
      console.log('Setor deletado com sucesso!')
      window.location.replace('/cargosetor')
    })
    
  }

  deleteCargo = (id_cargo) =>{

    if(window.confirm('Voçe realmente deletar o cargo?'))
    axios.delete(`http://localhost:3001/api/delete/cargo/${id_cargo}`).then(res => {
      //  console.log(res.data)
       console.log('Cargo deletado com sucesso!')
       window.location.replace('/cargosetor')
    })
  
  }

  render() {
    const {list_cargo,list_setor} = this.state;
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

              <section id="container-cargoSetor" className="container p-0 m-0  border border-success ">
              
                <form onSubmit={this.handleSubmit} className="m-2 mb-3 contain-form row ">
                    <section className="form border border-success col col-md-4">

                      <div className="mb-1 inp">
                        <label htmlFor="formFile" className="form-label">Setor</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="setor" type="texto"/>
                      </div>

                      <div className="mb-1 inp">
                        <label htmlFor="formFileMultiple" className="form-label">Cargos:*</label>
                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="cargos" type="texto" />
                      </div>
                      <div className="mb-1 btn-adicionar">
                        <Input className="btn btn-success form-control form-control-sm"  value="Adicionar" type="submit" />
                      </div>
                       
                    </section>
                    

                    <div className=" col col-md-4 listaSetorCargo border border-success">
                     
                        {
                            list_setor.map((list_s,i)=>
                            <ul className="list-group w-100 mt-1" key={i}>
                              <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-success text-dark">{list_s.setor}
                              <img className="te" alt="delete" src={del} onClick={()=>this.deleteSetor(list_s.id_setor)}/>
                              </li>
                            </ul>
                          )
                        }
                        
                    </div>
                    <div className=" col col-md-4 listaSetorCargo border border-success">
                      {
                        list_cargo.map((list_c,i)=>
                          <ul className="list-group w-100 mt-1" key={i}>
                              <li className="list-group-item d-flex justify-content-between align-items-center text-dark">{list_c.cargo}
                              <img className="" alt="delete" src={del} onClick={()=>this.deleteCargo(list_c.id_cargo)}/>
                              </li>
                            
                          </ul>
                        )
                      }
                      
                        
                    </div>
                   
                    </form>
              </section>
                
              </section>
           
          </div>
         
        </div>
        
      </div>

    );
  }
}







