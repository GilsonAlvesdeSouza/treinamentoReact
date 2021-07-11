export default class Produto {
    #id
    #nome
    #preco

    constructor(id, nome, preco) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get preco() {
        return this._preco;
    }

    set preco(value) {
        this._preco = value;
    }
}