
export default function repeticao() {
    const NOMES = [
        "Gilson",
        "Franciele",
        "Yago",
        "Ercy",
        "Wilson"
    ]

    // const ITENS
    // NOMES.forEach((item, key) => {
    //     ITENS.push(<li key={key}>{item}</li>)
    // })//usando forEach

    const ITENS = NOMES.map((nome, key) => {
        return <li key={key}>{nome}</li>
    })
    console.table(ITENS);
    return (
        <ul>{ITENS}</ul>
    )

}