import * as readline from 'readline-sync';
import * as exercicios from './exercicios';

/**
 * Exibe o menu de exercícios no console.
 */
function exibirMenu(): void {
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
function executarExercicio(opcao: number): void {
  switch (opcao) {
    case 1: exercicios.somaDoisNumeros(); break;
    case 2: exercicios.verificarParImpar(); break;
    case 3: exercicios.calcularMedia(); break;
    case 4: exercicios.converterCelsiusParaFahrenheit(); break;
    case 5: exercicios.exibirNumerosPares(); break;
    case 6: exercicios.lerEExibirArray(); break;
    case 7: exercicios.encontrarMaiorNumero(); break;
    case 8: exercicios.contarVogais(); break;
    case 9: exercicios.calculadoraSimples(); break;
    case 10: exercicios.ordenarArray(); break;
    case 11: exercicios.testarClassePessoa(); break;
    case 12: exercicios.testarClasseAluno(); break;
    case 13: exercicios.testarClasseCarro(); break;
    case 14: exercicios.exibirTabuada(); break;
    case 15: exercicios.calcularIMC(); break;
    case 16: exercicios.validarSenha(); break;
    case 17: exercicios.jogoAdivinhacao(); break;
    case 18: exercicios.contarPalavras(); break;
    case 0: console.log("Saindo..."); process.exit(0);
    default: console.log("Opção inválida!");
  }
}

/**
 * Função principal que controla o loop do menu.
 */
function main(): void {
  while (true) {
    exibirMenu();
    const opcao = readline.questionInt("Escolha uma opcao (0-18): ");
    executarExercicio(opcao);
    readline.question("Pressione Enter para continuar...");
  }
}

main();