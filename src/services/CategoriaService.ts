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

    atualizaCategoriaPorId(idParaAtualizar: number, novoTipo: string) {
        let posEncontrada = -1
        posEncontrada = this.bancoCategorias.findIndex(idDoArray => {
            if (idDoArray.id == idParaAtualizar)
                return true
        })
        if (posEncontrada >= 0) {
            const categoriaAtualizada = this.bancoCategorias[posEncontrada]
            categoriaAtualizada.tipo = novoTipo
            console.log('Categoria atualizada:', categoriaAtualizada)
        }
    }

    removerCategoriaPorId(idParaRemover: number) {
        let posEncontrada = -1
        posEncontrada = this.bancoCategorias.findIndex(idDoArray => {
            if (idDoArray.id == idParaRemover) {
                return true
            }
        })

        if (posEncontrada >= 0) {
            this.bancoCategorias.splice(posEncontrada, 1)
            console.log('Categoria removida com sucesso')
        }

        if (posEncontrada < 0) {
            console.log('***Id nao encontrado***')
        }
    }
}