import Pessoa from "../entity/Pessoa";

export default class PessoaService {
    private bancoPessoas: Pessoa[] = []

    cadastrar(pessoa: Pessoa) {
        console.log('Cadastrando pessoa:', pessoa)
        this.bancoPessoas.push(pessoa);
        console.log('Pessoa cadastrada com sucesso')
    };
    exibirTodos() {
        console.log('===========================')
        console.log('Todas as pessoas', this.bancoPessoas);
        console.log('===========================')
    }
    removerPessoa(idParaRemover: number) {
        let posEncontrada = -1
        posEncontrada = this.bancoPessoas.findIndex(function (itemDoArray) {
            if (itemDoArray.id == idParaRemover) return true

        })
        if (posEncontrada >= 0) {
            this.bancoPessoas.splice(posEncontrada, 1)
        }
    }

    // 1. Deve pesquisar a pessoa que esta dentro do array por 
    // nome. Caso encontre uma pessoa com aquele nome exibe
    // o resultado com os dados da pessoa.
    // 2. Deve pesquisar a pessoa por pelo nome parcial, ou seja,
    // "Cristiano" deve conseguir encontrar se for pesquisado
    // // "cris" (maiusculo ou minusculo)
    // findPessoaPorNome(nome: string) {
    //     let pessoaEncontrada = undefined
    //     pessoaEncontrada = this.bancoPessoas.find(pessoa => {
    //          if(pessoa.nome?.toLowerCase() == nome) return true

    //         // Assim como findIndex que retorna a posicao baseado
    //         // no predicado (caracteristica do objeto, no caso pessoa : Pessoa)
    //         // esse metodo retorna o objeto encontrado e nao somente a posicao
    //         // dele no array. 

    //         // Compara a propriedade do objeto desejado e retorna true para encerrar
    //         // o loop retornando o objeto

    //     })

    //     if (pessoaEncontrada) {
    //         console.log('Encontrado:', pessoaEncontrada)

    //     }
    //     else {
    //         console.log('Nome nao encontrado')
    //     }
    // }

    // Salvar cada pessoa encontrada dentro do array de resultados
    // Exibir o array de resultados caso tenha alguma pessoa encontrada dentro dele

    findPessoasPorNome(nome: string) {
        let pessoasEncontradas: Pessoa[] = []
        this.bancoPessoas.forEach(pessoa => {
            if (pessoa.nome?.toLowerCase().includes(nome)) {
                pessoasEncontradas.push(pessoa)
            }
        })
        if (pessoasEncontradas.length != 0) {
            console.log(pessoasEncontradas)
        }
    }
};

