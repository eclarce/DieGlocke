import Conta from "../entity/Conta";

export default class ContaService {

    private bancoContas: Conta[] = []

    cadastrarConta(conta: Conta) {
        this.bancoContas.push(conta);
    }

    mostraContas() {
        console.log('===========================')
        console.log('Todas as contas', this.bancoContas)
        console.log('===========================')
    }
    removerConta(idParaRemover: number) {
        // findIndex , find, some , filter, etc.. operam com "predicates"
        // predicate (predicado "característica inerente a um ser; atributo, propriedade")
        // ou seja, se o objeto recebido no callback (a funcao que vc passou)
        // retornar "true" o predicado e atendido.
        // qualquer expressao que retorne true pode ser usda
        // exemplo: objeto.nome == 'vitor' , se isso for true retornara ok

        let posEncontrada = -1



        // Forma declarativa funcional
        // findIndex, ira chamar a function com o elemento de cada
        // posicao dentro dele passando o elemento pelo parametro
        // da function.
        posEncontrada = this.bancoContas.findIndex(function (itemDoArray) {
            // Predicado. Compara o que voce quiser aqui dentro e retorna
            // true para terminar o loop que esta acontecendo
            if (itemDoArray.id == idParaRemover) return true
        })

        // Forma classica imperativa
        /*    for (let i = 0; i < this.bancoContas.length; i++) {
               const conta = this.bancoContas[i]
               console.log('posicao=', i, 'elemento=', conta)
               if (conta.id == idParaRemover) {
                   posEncontrada = i
               }
           } */

        // Se for -1 e porque nao encontrou nada
        if (posEncontrada >= 0)
            this.bancoContas.splice(posEncontrada, 1)




    }

    findContasPorValor(valor: number) {
        let contasEncontradas: Conta[] = []
        this.bancoContas.forEach(conta => {
            if (conta.valor == valor) {
                contasEncontradas.push(conta)
            }
        })


        if (contasEncontradas.length != 0) {
            console.log(contasEncontradas)
        }

    }
    // depois pago o compilador 10 reais por metodo
    // // Perguntar "Menor valor"
    // Perguntar "Maior valor"
    // pegar os dois valores
    // e pesquisar todas as contas que estao nesse intervalo
    // exemplo:
    // Menor valor: 10
    // Maior valor: 150
    // Se tiver uma conta de 80: encontrará
    // Se tiver uma conta de 190: nao encontrara

    recebeValor(valorMenor: number, valorMaior: number) {
        let encontradas: Conta[] = []
        this.bancoContas.forEach(conta => {
            if (conta.valor! >= valorMenor && conta.valor! <= valorMaior) {
                encontradas.push(conta)
            }
        })
        // mostrar apenas as contas dentro do intervalor >=10 e <=100
        // console.log('Resultado: ', resultado)
        console.log('Resultado', encontradas)
    }
}


