import Categoria from "./Categoria"
import Empresa from "./Empresa"
import Pessoa from "./Pessoa"

export default class Conta {
    id: number
    categoria?: Categoria
    valor?: number
    // TODO: 1
    empresa?: Empresa
  
    constructor(id: number, categoria: Categoria, valor: number, empresa: Empresa) {
        this.id = id
        this.categoria = categoria
        this.valor = valor
        this.empresa = empresa
    } 
}
