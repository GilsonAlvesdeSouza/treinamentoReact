export default function Pessoa(props: PessoaPros) {
    return (
        <div>
            <div>
                <output>Nome: {props.nome}</output>
            </div>

            <div>
                <output>Idade: {props.idade}</output>
            </div>

            <div>
                <output>Sexo: {props.sexo ?? "Não informado"}</output>
            </div>
        </div>
    )
}

interface PessoaPros {
    nome: string
    idade: number
    sexo?: string
}