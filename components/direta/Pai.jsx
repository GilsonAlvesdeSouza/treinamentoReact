import Filho from "./filho";

export default function Pai(props){
    return (
        <div>
            <h1>Pai: {props.nome}</h1>
            <h2>
                Filhos:
            </h2>
            {props.children}
        </div>
    )
}