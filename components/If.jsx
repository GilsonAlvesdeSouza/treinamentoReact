export default function If(props){
    console.log(props.textoFalse)
    if(props.teste){
        return <h1>{props.textoTrue}</h1>
    }
    return <h1>{props.textoFalse}</h1>
}