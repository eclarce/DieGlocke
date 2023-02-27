// Importar o modulo que permite ler do stdin
import * as readline from 'node:readline/promises';

// Cria um objeto tipo Readline pelo metodo factory "createInterface"
// guardando na variavel prompt. Depois podemos utilizar prompt.question()
const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


export async function ask(msg: string) : Promise<string> {
    const result = await prompt.question(msg)
    return result
}
