// Projeto Die Glocke V1 by ph0b0z
import Conta from "./entity/Conta";
import Pessoa from "./entity/Pessoa";
import { showMenuPrincipal, showTitle, showMenuPessoa, showMenuConta, showMenuEmpresa, showMenuCategoria } from "./menus/telas";
import { ask } from "./prompts/prompt";
import PessoaService from "./services/PessoaService";
import ContaService from "./services/ContaService";
import EmpresaService from "./services/EmpresaService";
import CategoriaService from "./services/CategoriaService";
import Empresa from "./entity/Empresa";
import Categoria from "./entity/Categoria";

const pessoaService = new PessoaService()
const contaService = new ContaService()
const empresaService = new EmpresaService()
const categoriaService = new CategoriaService()

async function main() {

    console.log('Contribuicao do ksmz')
    showTitle()

    /*   let nome = await ask('Login: ')
      console.log('login=',nome) */


    //const texto:String = 'Vitor Programando Javascript'
    //console.log('texto          =',texto)
    //console.log('texto uppercase=', texto.toUpperCase())
    //const achouTexto = texto.toUpperCase().includes('VITOR')


    //console.log('Achou texto [java] dentro do texto?',achouTexto)
    // exibe menu

    // Testes intervalo conta

    const categoria1 = new Categoria('luz', 1,)
    const categoria2 = new Categoria('agua', 2,)
    categoriaService.cadastraCategoria(categoria1)
    categoriaService.cadastraCategoria(categoria2)
    const empresa1 = new Empresa('apple', 10)
    const empresa2 = new Empresa('spaceX', 20)
    empresaService.cadastraEmpresa(empresa1)
    empresaService.cadastraEmpresa(empresa2)


    let option: string = ''

    while (option != 'q') {
        showMenuPrincipal()
        option = await ask('Escolha opcao: ')
        // ---------- PESSOAS ------------
        if (option == 'p') {
            showMenuPessoa()
            option = await ask('Opcao pessoa: ')

            if (option == 'c') {
                await iniciaCadastroPessoa()
            } else if (option == 't') {
                mostraPessoas()
            } else if (option == 'e') {
                mostraPessoas()
                option = await ask('Deseja deletar alguma pessoa? [S/N]: ')
                if (option == 's') {
                    option = await ask('Digite o ID da pessoa: ')
                    const idPessoa = Number(option)
                    if (Number.isInteger(idPessoa)) {
                        pessoaService.removerPessoa(idPessoa)
                    }
                    else {
                        console.log('ID nao e um numero')
                    }
                }
            }
            else if (option == 'p') {
                option = await ask('Digite o nome da pessoa: ')
                pessoaService.findPessoasPorNome(option.toLowerCase())
            }
        }
        else if (option == 'c') {
            // ---------- CONTAS ----------- 
            showMenuConta()
            option = await ask('Opcao conta: ')
            if (option == 'c') {
                await iniciaCadastroConta()
            } else if (option == 't') {
                mostraContas()
            } else if (option == 'e') {
                mostraContas()
                option = await ask('Deseja deletar alguma conta? [S/N]: ')
                if (option == 's') {
                    option = await ask('Digite o ID da conta: ')
                    const idConta = Number(option)

                    if (!isNaN(idConta)) {
                        contaService.removerConta(idConta)
                        console.log('Conta deletada com sucesso')
                    } else {
                        console.log('ID nao e um numero')
                    }

                }
            } else if (option == 'p') {
                option = await ask('Deseja fazer uma pesquisa personalizada? [S/N]: ')
                if (option == 's') {
                    const valorMenor = await ask('Intervalo inicial: ')
                    const valorMaior = await ask('Intervalo final: ')
                    contaService.recebeValor(Number(valorMenor), Number(valorMaior))
                    // >= [menor] --------- [maior] <=
                    // Valor menor = 5
                    // Valor maior = 100
                    // 5, [10, 100], 150
                }
                else {
                    option = await ask('Digite o valor da conta: ')
                    contaService.findContasPorValor(Number(option))
                }
            }
        }
        //TO DO EMPRESA
        else if (option == 'e') {
            showMenuEmpresa()
            option = await ask('Opcao empresa: ')
            if (option == 'c') {
                await iniciaCadastroEmpresa()
            }
            else if (option == 't') {
                mostraEmpresas()
            }

            else if (option == 'e') {
                mostraEmpresas()
                option = await ask('Escolha opcao: [e]ditar [d]eletar: ')
                if (option == 'e') {
                    let idEmpresa: string = await ask('Id empresa:')
                    await iniciaEdicaoEmpresa(Number(idEmpresa))
                }

                else if (option == 'd') {
                    let idParaRemover: string = await ask('Id empresa: ')
                    empresaService.removerCategoriaPorId(Number(idParaRemover))
                }
            }

            else if (option == 'p')
                option = await ask('Digite o nome da empresa: ')
            empresaService.pesquisarEmpresaPorNome(option)
        }

        else if (option == 'g') {
            showMenuCategoria()
            option = await ask('Opcao categoria: ')
            if (option == 'c') {
                await iniciaCadastroCategoria()
            }
            else if (option == 't') {
                mostraCategorias()

            }
            else if (option == 'e') {
                mostraCategorias()
                option = await ask('Escolha opcao: [e]ditar [d]eletar:')

                if (option == 'e') {
                    let idCategoria = await ask('Id categoria: ')
                    await iniciaEdicaoCategoria(Number(idCategoria))
                }
                else if (option == 'd') {
                    let idParaRemover = await ask('Id categoria: ')
                    categoriaService.removerCategoriaPorId(Number(idParaRemover))
                }
            }

            else if (option == 'p') {
                option = await ask('Digite o tipo da categoria: ')
                categoriaService.pesquisarCategoriaPorTipo(option)
            }
        }
    }
}

console.log('Terminado')
// pega opcao do menu
//      -> usuario escolhe cadastrar [p]
// pega os dados da pessoa via prompt
// criar objeto tipo classe pessoa
// salvar pessoa via servico de cadastro


async function iniciaCadastroPessoa() {
    console.log('Preencha os dados abaixo.')
    let nome: string = await ask(`Nome: `)
    let id: string = await ask('Id:')
    // Pegar dados da pessoa individualmente
    // Criar objeto pessoa da classe Pessoa com esses dados
    // Chamar cadastrar() para cadastrar essa pessoa no banco
    // pessoaService.cadastrar()
    // pessoaService.exibirTodos()
    console.log('Pessoa cadastrada')
    let pessoaX: Pessoa = new Pessoa(Number(id), nome)
    pessoaService.cadastrar(pessoaX)
}

async function iniciaCadastroConta() {
    console.log('Preencha os dados abaixo.')
    let id: string = await ask('Id:')
    let valor: string = await ask('Valor:')
    mostraCategorias()
    let categoriaId: string = await ask('Digite o id da categoria: ')
    let categoriaEncontrada = categoriaService.findCategoriaPorId(Number(categoriaId))
    if (categoriaEncontrada == null) {
        console.log('***Id da categoria Invalido***')
        return
    }
    mostraEmpresas()
    let empresaId: string = await ask('Digite o id da empresa: ')
    let empresaEncontrada = empresaService.findEmpresaPorId(Number(empresaId))
    if (empresaEncontrada == null) {
        console.log('***Id da empresa Invalido***')
        return
    }
    console.log('Conta cadastrada')
    let contaX: Conta = new Conta(Number(id), categoriaEncontrada!, Number(valor), empresaEncontrada!)
    contaService.cadastrarConta(contaX)
}

async function iniciaCadastroEmpresa() {
    console.log('Preencha os dados abaixo.')
    let id: string = await ask('Id:')
    let nome: string = await ask('Nome:')
    console.log('Empresa cadastrada')
    let empresaX: Empresa = new Empresa(nome, Number(id))
    empresaService.cadastraEmpresa(empresaX)
}

async function iniciaCadastroCategoria() {
    console.log('Preencha os dados abaixo.')
    let tipo: string = await ask('Tipo:')
    let id: string = await ask('Id:')
    console.log('Categoria cadastrada')
    let categoriaX: Categoria = new Categoria(tipo, Number(id))
    categoriaService.cadastraCategoria(categoriaX)
}


// TODO-2
async function iniciaEdicaoCategoria(id: number) {

    console.log('Preencha os dados abaixo.')
    let novoTipo: string = await ask('Tipo:')
    categoriaService.atualizaCategoriaPorId(id, novoTipo)
    // console.log('Categoria atualizada')

    // Ao inves de cadastrar, substituir a categoria por id no array
    // let categoriaX: Categoria = new Categoria(tipo, Number(id))
    // categoriaService.cadastraCategoria(categoriaX)
}

async function iniciaEdicaoEmpresa(id: number) {
    console.log('Preencha os dados abaixo.')
    let novoNome: string = await ask('Nome:')
    empresaService.atualizarEmpresaPorId(id, novoNome)
}


function mostraPessoas() {
    pessoaService.exibirTodos()
}

function mostraContas() {
    contaService.mostraContas()
}

function mostraEmpresas() {
    empresaService.mostraEmpresa()
}

function mostraCategorias() {
    categoriaService.mostraCategoria()
}

main()




