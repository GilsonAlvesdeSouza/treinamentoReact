import {Component} from "react";

export default class Contador extends Component {

    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }

    incremento() {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decremento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>contador (Usando classe)</h1>
                <h2>{this.state.numero}</h2>
                <output style={{marginRight: 15}}>Passo:</output>
                <input type="number" value={this.state.passo}
                       onChange={this.setPasso}
                       style={{width:100, textAlign:"right"}}
                />
                <div style={{marginTop: 15}}>
                    {/* usando método sem arrow function */}
                    <button onClick={() => this.incremento()} style={{marginRight: 15}}>{this.props.nomeBtn1}</button>
                    {/* Usando método com arrow function */}
                    <button onClick={this.decremento}>{this.props.nomeBtn2}</button>
                </div>
            </div>
        )
    }
}