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
}