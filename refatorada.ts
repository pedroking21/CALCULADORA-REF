const teclado = require('prompt-sync')();

const operacoes = {
    '+': (numeroUm: number, numeroDois: number) => {
        const resultado = numeroUm + numeroDois;
        console.log(`O valor da soma de ${numeroUm} com ${numeroDois} é ${resultado}`);
    },
    '-': (numeroUm: number, numeroDois: number) => {
        const resultado = numeroUm - numeroDois;
        console.log(`O valor da subtração de ${numeroUm} com ${numeroDois} é ${resultado}`);
    },
    '*': (numeroUm: number, numeroDois: number) => {
        const resultado = numeroUm * numeroDois;
        console.log(`O valor da multiplicação de ${numeroUm} com ${numeroDois} é ${resultado}`);
    },
    '/': (numeroUm: number, numeroDois: number) => {
        const resultado = numeroUm / numeroDois;
        console.log(`O valor da divisão de ${numeroUm} por ${numeroDois} é ${resultado}`);
    },
    'default': () => {
        console.log(``);
    }
};

function menu(): void {
    let inOut: number;
    do {
        console.log(`Qual operação deseja?`);
        console.log(`+ --> Adição`);
        console.log(`- --> Subtração`);
        console.log(`* --> Multiplicação`);
        console.log(`/ --> Divisão`);
        
        const opcao: string = teclado(`Digite a opção desejada: `);

        const numeroUm: number = parseInt(teclado(`Digite o 1º número: `));
        const numeroDois: number = parseInt(teclado(`Digite o 2º número: `));

        operacoes[opcao]?.(numeroUm, numeroDois) || operacoes['default']();

        console.log(`Para continuar digite`);
        console.log(`0 - Sair`);
        console.log(`1 - Continuar`);
        inOut = parseInt(teclado(`Digite a opção: `));

    } while (inOut !== 0);

    console.log(`Fim de programa ...`);
}

menu();
