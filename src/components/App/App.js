import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Formulario from '../Formulario';
import axios from 'axios';
import Resultado from '../Resultado';

class App extends Component {

  state={
    monedas:[],
    cotizacion: {},
    monedaCotizada: ''
  }

  componentDidMount() {
    this.obtenerMoneda();
  }

  obtenerValoresCrypto = async (monedas) => {
    let {moneda, crypto} = monedas;

    let url = `https://api.coinmarketcap.com/v2/ticker/${crypto}/?convert=${moneda}`;

    await axios.get(url)
    .then(datos => {
      console.log(datos.data.data);
      this.setState({
        cotizacion: datos.data.data,
        monedaCotizada: moneda
      })
    })
    .catch(err => console.error(err)    )
    
  }
  obtenerMoneda = async () => {

    const url = `https://api.coinmarketcap.com/v2/listings/`;

    await axios.get(url)
          .then(respuesta => {
            console.log(respuesta.data.data);
            
            this.setState({
              monedas: respuesta.data.data
            })
            
          })
          .catch( err => console.error(err))
  }
  render() {
    return (
      <div className="container">
        <Header titulo="Cotizador Criptomonedas"/>
        <div className="row justify-content-center" >
          <div className="col-md-4 bg-light pb-4 contenido-principal">
            <Formulario monedas={this.state.monedas} obtenerValoresCrypto= {this.obtenerValoresCrypto}/>
            <Resultado cotizacion={this.state.cotizacion} monedaCotizada={this.state.monedaCotizada}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
