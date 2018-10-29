import React,{Component} from 'react';
import OptionSelect from '../OptionSelect';

export default class Formulario extends Component {
    monedaRef = React.createRef();
    criptoRef = React.createRef();

    cotizarMonedas = (e) => {
        e.preventDefault();

        const datos = {
            moneda: this.monedaRef.current.value,
            crypto: this.criptoRef.current.value
        }

        this.props.obtenerValoresCrypto(datos)
    }
    render() {
        return (
            <form onSubmit={this.cotizarMonedas}>
                <div className="form-group">
                    <label>Moneda:</label>
                    <select className="form-control" ref={this.monedaRef}>
                        <option value="" defaultValue disabled>Elige tu moneda</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="USD">Dolar Estadounidense</option>
                        <option value="GBP">Libras esterlinas</option>
                        <option value="EUR">Euros</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Criptomoneda:</label>
                    <select className="form-control" ref={this.criptoRef}>
                        <option value="" defaultValue disabled>Elige una Moneda</option>
                        {
                            this.props.monedas.map( (moneda, index) => <OptionSelect key={index} moneda={moneda}/>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Cotizar"/>
                </div>
            </form>
        );
    }
}