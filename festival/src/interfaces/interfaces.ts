export interface User{
    id: number,
    nome: string,
    idade: number,
    email: string
}

export interface Ingresso{
    id: number,
    idUser: number,
    idTipo: number
}

export interface TipoIngresso{
    id: number,
    descricao: string,
    preco: number
}

