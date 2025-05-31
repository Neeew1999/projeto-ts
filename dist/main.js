"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const exercicios = __importStar(require("./exercicios"));
/**
 * Exibe o menu de exercícios no console.
 */
function exibirMenu() {
    console.log(`
--- MENU DE EXERCÍCIOS ---
1 - Soma de dois números
2 - Verificar par ou ímpar
3 - Calcular média de três notas
4 - Converter Celsius para Fahrenheit
5 - Exibir números pares de 1 a 20
6 - Ler 5 números e armazenar em array
7 - Encontrar maior número em um array
8 - Contar vogais em uma string
9 - Calculadora simples
10 - Ordenar array em ordem crescente
11 - Classe Pessoa
12 - Classe Aluno
13 - Classe Carro
14 - Tabuada
15 - Calculadora de IMC
16 - Validar senha
17 - Jogo de adivinhação
18 - Contar palavras em uma string
0 - Sair
  `);
}
/**
 * Executa o exercício selecionado.
 * @param opcao Número do exercício (1-18).
 */
function executarExercicio(opcao) {
    switch (opcao) {
        case 1:
            exercicios.somaDoisNumeros();
            break;
        case 2:
            exercicios.verificarParImpar();
            break;
        case 3:
            exercicios.calcularMedia();
            break;
        case 4:
            exercicios.converterCelsiusParaFahrenheit();
            break;
        case 5:
            exercicios.exibirNumerosPares();
            break;
        case 6:
            exercicios.lerEExibirArray();
            break;
        case 7:
            exercicios.encontrarMaiorNumero();
            break;
        case 8:
            exercicios.contarVogais();
            break;
        case 9:
            exercicios.calculadoraSimples();
            break;
        case 10:
            exercicios.ordenarArray();
            break;
        case 11:
            exercicios.testarClassePessoa();
            break;
        case 12:
            exercicios.testarClasseAluno();
            break;
        case 13:
            exercicios.testarClasseCarro();
            break;
        case 14:
            exercicios.exibirTabuada();
            break;
        case 15:
            exercicios.calcularIMC();
            break;
        case 16:
            exercicios.validarSenha();
            break;
        case 17:
            exercicios.jogoAdivinhacao();
            break;
        case 18:
            exercicios.contarPalavras();
            break;
        case 0:
            console.log("Saindo...");
            process.exit(0);
        default: console.log("Opção inválida!");
    }
}
/**
 * Função principal que controla o loop do menu.
 */
function main() {
    while (true) {
        exibirMenu();
        const opcao = readline.questionInt("Escolha uma opcao (0-18): ");
        executarExercicio(opcao);
        readline.question("Pressione Enter para continuar...");
    }
}
main();
