export default function SomentePar(props){
    if(props.numero % 2 === 0 ){
        return <h1>{props.numero}</h1>
    }
    return <h1>Impar</h1>
}