import React, { Component } from 'react';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import "../../Home.css"
import "../subPage/FormContasReceber.css"
import "../../components/Footer";
import axios from 'axios'


export default class Configuracao extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  };

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  };

  componentDidMount = async () => {
    axios.get('http://localhost:3001/api/produtos/estoque').then(res => {
    console.log(res.data)
    this.setState({list_produtos : res.data})
    })
  }

  render() {
    const { list_produtos } = this.state;
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
              <table width="100%">
                <tr>
                  <td>
                    <table width="100%" >
                      <tr Style="color:white;background-color:grey">
                      <th scope="col">Imagens</th>
                      <th scope="col">Cód.Item</th>
                      <th scope="col">Descrição do Item</th>
                      <th scope="col">Estoque</th>
                      <th scope="col">Unidade</th>
                      <th scope="col">Preço de venda</th>
                      <th scope="col">Preço de Atacado</th>
                      <th scope="col">Margem de lucro</th>
                      <th scope="col">Local do produto</th>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div Style="width:100%; height:100px; overflow:auto;">
                      <table width="100%" >
                        
                      <tr>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                        </tr>

                        <tr>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                        </tr>

                        <tr>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                        </tr>

                        <tr>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                        </tr>

                        <tr>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                          <td>new item</td>
                        </tr>
                       
                      </table>  
                    </div>
                  </td>
                </tr>
              </table>
               

              </section>
                
              </section>
           
          </div>
         
        </div>
        
      </div>

    );
  }
}







