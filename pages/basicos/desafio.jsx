export default function span() {
    return (
        <div>
            {gerarLista(20)}
        </div>
    )
}

function gerarLista(final = 10) {
    let lista = []
    for (let i = 1; i <= final; i++) {
        if (i < final) {
            lista.push(<span>{i}, </span>);
            continue;
        }
        lista.push(<span>{i}</span>)
    }
    return lista;
}

span(10)