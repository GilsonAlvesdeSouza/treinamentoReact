import {useState} from "react";

export default function contador() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [contador, setContador] = useState(0)

    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#d222",
    }

    const add = () => setContador(contador + 1)

    const toDecrease = () => {
        if (contador > 0) setContador(contador - 1)
    }

    return (
        <div style={style}>
            <h1 style={{fontSize: 60, marginBottom: -10}}>contador</h1>
            <h1 style={{fontSize: 60, marginTop: -10}}>{contador}</h1>
            <div>
                <button style={{
                    margin: 5,
                    padding: 10,
                    borderRadius: 5,
                    backgroundColor: "green",
                    color: "white",
                    fontSize: 20
                }} onClick={add}>Adicionar
                </button>
                <button style={{
                    margin: 5,
                    padding: 10,
                    borderRadius: 5,
                    backgroundColor: "red",
                    color: "white",
                    fontSize: 20
                }} onClick={toDecrease}>Diminuir
                </button>
            </div>
        </div>
    )
}