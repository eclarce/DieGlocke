import Empresa from "../entity/Empresa"

export default class EmpresaService {
    private bancoEmpresas: Empresa[] = []

    cadastraEmpresa(empresa: Empresa) {
        this.bancoEmpresas.push(empresa)
    }

    mostraEmpresa() {
        console.log('Todas as empresas: ', this.bancoEmpresas)
    }

    findEmpresaPorId(id: number) {
        let empresaEncontrada: Empresa | null = null
        this.bancoEmpresas.forEach(empresa => {
            if (empresa.id == id) {
                empresaEncontrada = empresa
                return
            }
        })
        return empresaEncontrada
    }

    pesquisarEmpresaPorNome(nome: string) {
        let empresasEncontradas: Empresa[] = []
        this.bancoEmpresas.forEach(empresa => {
            if (empresa.nome?.includes(nome)) {
                empresasEncontradas.push(empresa)
            }
        })

        if (empresasEncontradas.length != 0) {
            console.log(empresasEncontradas)
        }
    }

    atualizarEmpresaPorId(idParaAtualizar: number, novoNome: string) {
        let posEncontrada = -1
        posEncontrada = this.bancoEmpresas.findIndex(idDoArray => {
            if (idDoArray.id == idParaAtualizar) {
                return true
            }
        })
        if (posEncontrada >= 0) {
            const empresaAtualizada = this.bancoEmpresas[posEncontrada]
            // [] e o operador de acesso a uma posicao no array
            empresaAtualizada.nome = novoNome
            console.log('Empresa atualizada:', empresaAtualizada)
        }
    }

    removerCategoriaPorId(idParaRemover: number) {
        let posEncontrada = -1
        posEncontrada = this.bancoEmpresas.findIndex(idDoArray => {
            if (idDoArray.id == idParaRemover) {
                return true
            }
        })

        if (posEncontrada >= 0) {
            this.bancoEmpresas.splice(posEncontrada, 1)
            console.log('Empresa removida com sucesso')
        }

        if (posEncontrada < 0) {
            console.log('***Id nao encontrado***')
        }
    }
}