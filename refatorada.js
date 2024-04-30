var teclado = require('prompt-sync')();
var operacoes = {
    '+': function (numeroUm, numeroDois) {
        var resultado = numeroUm + numeroDois;
        console.log("O valor da soma de ".concat(numeroUm, " com ").concat(numeroDois, " \u00E9 ").concat(resultado));
    },
    '-': function (numeroUm, numeroDois) {
        var resultado = numeroUm - numeroDois;
        console.log("O valor da subtra\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " \u00E9 ").concat(resultado));
    },
    '*': function (numeroUm, numeroDois) {
        var resultado = numeroUm * numeroDois;
        console.log("O valor da multiplica\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " \u00E9 ").concat(resultado));
    },
    '/': function (numeroUm, numeroDois) {
        var resultado = numeroUm / numeroDois;
        console.log("O valor da divis\u00E3o de ".concat(numeroUm, " por ").concat(numeroDois, " \u00E9 ").concat(resultado));
    },
    'default': function () {
        console.log("");
    }
};
function menu() {
    var _a;
    var inOut;
    do {
        console.log("Qual opera\u00E7\u00E3o deseja?");
        console.log("+ --> Adi\u00E7\u00E3o");
        console.log("- --> Subtra\u00E7\u00E3o");
        console.log("* --> Multiplica\u00E7\u00E3o");
        console.log("/ --> Divis\u00E3o");
        var opcao = teclado("Digite a op\u00E7\u00E3o desejada: ");
        var numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        var numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        ((_a = operacoes[opcao]) === null || _a === void 0 ? void 0 : _a.call(operacoes, numeroUm, numeroDois)) || operacoes['default']();
        console.log("Para continuar digite");
        console.log("0 - Sair");
        console.log("1 - Continuar");
        inOut = parseInt(teclado("Digite a op\u00E7\u00E3o: "));
    } while (inOut !== 0);
    console.log("Fim de programa ...");
}
menu();
