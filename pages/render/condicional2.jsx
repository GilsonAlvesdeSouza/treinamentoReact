import If from "../../components/If";


export default function condicinal2() {

    const VALORES = [11, 6, 45, 28, 77, 13, 15, 38]
    let RESULTADO = []

    VALORES.map((valor, key) =>{
        return RESULTADO.push(
            <If teste={valor % 2 === 0} key={key}
                textoTrue ={`O número ${valor} é par`}
                textoFalse={`O número ${valor} é impar`}/>
        )
    })

    return (
        <div>
            {RESULTADO}
        </div>
    )
}