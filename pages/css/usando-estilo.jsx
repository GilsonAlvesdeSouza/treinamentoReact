import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
    return (
        <div>
            <Estilo numero = {3} texto="Gilson" color="#2260DDFF" azul/>
            <Estilo numero = {-13} texto="Carlos" direita azul/>
            <Estilo numero = {13} texto="Flamino" azul direita/>
            <Estilo texto="Vedade" azul/>
        </div>
    )
}