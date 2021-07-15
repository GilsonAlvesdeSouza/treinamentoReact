import {Component} from "react";
import Contador from "../../components/Contador";


export default class ContadorPage extends Component {

    render() {
        return (
            <div>
                <Contador valorInicial={100}
                          passo={1}
                          nomeBtn1={"Incrementar"}
                          nomeBtn2={"Decrementar"}
                />
            </div>
        )
    }
}