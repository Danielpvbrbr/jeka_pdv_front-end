import React, { Component } from 'react';
import Menu from './components/Menu'
import Footer from './components/Footer'
import Titulo from './components/Titulo'
import "./ListaUsuarios.css"

export default class ListaUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Results: []
    };

  };

  componentDidMount = async () => {
    fetch('http://localhost:3001/api/list')
      .then(response => response.json())
      .then(data => {
        this.setState({ Results: data })
      })
      .catch(error => console.error(error));
  }

  render() {
    const { Results } = this.state
    return (
      <div className="container-fluid">
        <Menu />
        <div className="row">

          <section className="cont-central col-sm-12">
            <Titulo />
            <div className="cont-table">

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Senha</th>
                  </tr>
                </thead>

                <tbody className="tab-zeb">
                  {
                    Results.map((list) =>
                      <tr key={list.id} className="dif">
                      <td>{list.nome}</td>
                      <td>{list.email}</td>
                      <td>{list.senha}</td>
                    </tr>
                    )            
                  }
                  </tbody>           
              </table>
            </div>
          </section>
        <Footer />
      </div>
      </div >

    );
  };
};