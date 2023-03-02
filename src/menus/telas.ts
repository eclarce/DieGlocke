
export function showTitle(): void {
    console.log('Die Glocke V1')
    console.log('==============================')
    console.log('Menu inicial');
    
};

export async function showMenuPrincipal(): Promise<void> {
    console.log('==============================')
    console.log('Pessoa                     [p]')
    console.log('Conta                      [c]')
    console.log('Empresa                    [e]')
    console.log('Categoria                  [g]')
    console.log('==============================')
    console.log('Sair [q]')
}

export async function showMenuPessoa() {
    console.log('==============================')
    console.log('Cadastrar pessoa           [c]')
    console.log('Ver pessoas cadastradas    [t]')
    console.log('Editar pessoas             [e]')
    console.log('Pesquisar pessoas          [p]')
    console.log('==============================')
}

export async function showMenuConta() {
    console.log('==============================')
    console.log('Cadastrar conta            [c]')
    console.log('Ver contas cadastradas     [t]')
    console.log('Editar contas              [e]')
    console.log('Pesquisar contas           [p]')
    console.log('==============================')
}

export async function showMenuEmpresa() {
    console.log('==============================')
    console.log('Cadastrar empresa          [c]')
    console.log('Ver empresas cadastradas   [t]')
    console.log('Pesquisar empresas         [p]')
    console.log('==============================')
}

export async function showMenuCategoria() {
    console.log('==============================')
    console.log('Cadastrar categoria        [c]')
    console.log('Ver categorias cadastradas [t]')
    console.log('Pesquisar categorias       [p]')
    console.log('Editar categorias          [e]')
    console.log('==============================')
}


