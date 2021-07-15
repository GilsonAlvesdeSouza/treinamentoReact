import {useEffect, useState} from "react";
import {aleatorio} from "../../util/aleatorio";
import NumeroDisplay from "../../components/NumeroDisplay";

export default function megaSena() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [numeros = [], setNumeros] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [qtd, setQtd] = useState(6)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setNumeros(aleatorio(6))
    }, [])

    const renderNumeros = numeros.map(numero => {
        return <NumeroDisplay key={numero} numero={numero}/>
    })

    return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <h1>Mega Sena</h1>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "600px"
                }}>
                    {renderNumeros}
                </div>
                <output>Quantidade de Números:</output>
                <input type="number" min={6} max={60} value={qtd} onChange={(ev) => setQtd(ev.target.value)}/>
                <div>
                    <button style={{
                        backgroundColor: "#0066b3",
                        fontSize: "2rem",
                        color: "#fff",
                        borderRadius: "8px",
                        border: "none",
                        paddingRight: "15px",
                        paddingLeft: "15px",
                        marginTop: "15px"
                    }}
                            onClick={() => setNumeros(aleatorio(qtd, 60))}>
                        Gerar Aposta
                    </button>
                </div>
            </div>
    )
}