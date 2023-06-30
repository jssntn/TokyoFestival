export interface User{
    idUser: number,
    name: string,
    age: number,
    email: string
}

export interface Ingresso{
    idIngresso: number,
    idUser: number,
    idTipo: number
}

export interface TipoIngresso{
    idTipo: number,
    descricao: string,
    preco: number
}

export interface IngressosProps{
    User: User,
    TipoIngresso: TipoIngresso
}