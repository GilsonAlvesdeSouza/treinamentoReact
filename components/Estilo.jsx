export default function Estilo(props) {
    return (
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
                color: props.color,
                fontSize: "60px",
                textAlign: props.direita ? "right" : "left"
            }}>
                {props.texto}
            </h1>
            <h2 className={props.azul  ? "azul" : "vermelho"}>
                {props.texto}
            </h2>
        </div>
    )
}