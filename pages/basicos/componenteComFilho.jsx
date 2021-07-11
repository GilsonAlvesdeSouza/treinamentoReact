import Lista from "../../components/Lista";
import Item from "../../components/Item";

export default function componenteComFilho() {

    var produtos = ["Arroz", "Feijão", "Carne", "Maionese", "Macarrão", "Tomate"]

    var ITENS = produtos.map((produto , key) => {
        return <Item conteudo={produto} key={key}/>
    })

    return (
        <Lista titulo={"Lista de Produtos"}>
            {ITENS}
        </Lista>
    )
}