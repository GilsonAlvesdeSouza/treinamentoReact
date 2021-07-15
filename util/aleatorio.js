export function aleatorio(qtd, total = 60, resultado = []) {
    qtd = +qtd
    if(qtd < 1 || qtd > 60) throw "Valor informado fora do limite de faixa!"
    if (resultado.length === qtd) return resultado.sort((n1, n2) => n1 - n2)

    const numerosAleatorios = parseInt(Math.random() * total) + 1

    if (!resultado.includes(numerosAleatorios)) return aleatorio(qtd,  total, [...resultado, numerosAleatorios] )
    return aleatorio(qtd, total, resultado)
}
