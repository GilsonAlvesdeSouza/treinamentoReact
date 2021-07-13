import {useState} from "react";

export default function mouse(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [x, setX] = useState(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [y, setY] = useState(0)

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    function movimentoMouse(ev){
        setX(ev.clientX)
        setY(ev.clientY)
    }

    return(
        <div style={estilo} onMouseMove={movimentoMouse}>
            <span>Eixo X = {x}</span>
            <span>Eixo Y = {y}</span>
        </div>
    )
}