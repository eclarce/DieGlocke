import Categoria from "../entity/Categoria"

export default class CategoriaService {
    private bancoCategorias: Categoria[] = []

    cadastraCategoria(categoria: Categoria) {
        this.bancoCategorias.push(categoria)
    }

    mostraCategoria() {
        console.log('Todas as categorias: ', this.bancoCategorias)
    }

    findCategoriaPorId(id: number) {
        let categoriaEncontrada: Categoria | null = null
        this.bancoCategorias.forEach(categoria => {
            if (categoria.id! == id) {
                categoriaEncontrada = categoria
                return 
            }
        })
        return categoriaEncontrada
    }

    pesquisarCategoriaPorTipo(tipo: string) {
        let categoriasEncontradas: Categoria[] = []
        this.bancoCategorias.forEach(categoria => {
            if (categoria.tipo?.includes(tipo)) {
                categoriasEncontradas.push(categoria)
            }
        })
        
        if (categoriasEncontradas.length != 0) {
            console.log(categoriasEncontradas)
        }
    }
}