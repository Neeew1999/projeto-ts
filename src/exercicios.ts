import * as readline from 'readline-sync';
import { Pessoa, Aluno, Carro } from './classes.js'; // Adicione a extensão .js

// Exercício 1: Soma de dois números
export function somaDoisNumeros(): void {
  console.log("=== Soma de Dois Numeros ===");
  const num1 = readline.questionInt("Digite o primeiro numero: ");
  const num2 = readline.questionInt("Digite o segundo numero: ");
  console.log(`\nResultado: ${num1 + num2}`);
}

// Exercício 2: Verificar par ou ímpar
export function verificarParImpar(): void {
  console.log("=== Verificar Par ou Impar ===");
  const numero = readline.questionInt("Digite um numero: ");
  console.log(`\nO numero ${numero} é ${numero % 2 === 0 ? "PAR" : "IMPAR"}`);
}

// Exercício 3: Calcular média de três notas
export function calcularMedia(): void {
  console.log("=== Media de Tres Notas ===");
  const nota1 = readline.questionFloat("Digite a primeira nota: ");
  const nota2 = readline.questionFloat("Digite a segunda nota: ");
  const nota3 = readline.questionFloat("Digite a terceira nota: ");
  const media = (nota1 + nota2 + nota3) / 3;
  console.log(`\nMedia: ${media.toFixed(2)}`);
}

// Exercício 4: Converter Celsius para Fahrenheit
export function converterCelsiusParaFahrenheit(): void {
  console.log("=== Conversor Celsius para Fahrenheit ===");
  const celsius = readline.questionFloat("Digite a temperatura em Celsius: ");
  const fahrenheit = (celsius * 9/5) + 32;
  console.log(`\n${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
}

// Exercício 5: Exibir números pares de 1 a 20
export function exibirNumerosPares(): void {
  console.log("=== Numeros Pares de 1 a 20 ===");
  const pares: number[] = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) pares.push(i);
  }
  console.log(`\nNumeros pares: ${pares.join(', ')}`);
}

// Exercício 6: Ler 5 números e armazenar em array
export function lerEExibirArray(): void {
  console.log("\n=== Ler 5 Números ===");
  
  const numeros: number[] = [];
  const ordinais = ["primeiro", "segundo", "terceiro", "quarto", "quinto"];

  for (let i = 0; i < 5; i++) {
    numeros.push(readline.questionInt(`Digite o ${ordinais[i]} numero: `));
  }

  console.log(`\nNúmeros digitados:`);
  numeros.forEach((num, index) => {
    console.log(`${ordinais[index].charAt(0).toUpperCase() + ordinais[index].slice(1)} número: ${num}`);
  });
}

// Exercício 7: Encontrar maior número em um array
export function encontrarMaiorNumero(): void {
  console.log("=== Encontrar Maior Numero ===");
  const numeros: number[] = [];
  const textos = ["primeiro", "segundo", "terceiro", "quarto", "quinto"]; // Array com os textos
  
  for (let i = 0; i < 5; i++) {
    numeros.push(readline.questionInt(`Digite o ${textos[i]} numero: `)); // Modificação apenas aqui
  }
  
  const maior = Math.max(...numeros);
  console.log(`\nArray: [${numeros.join(', ')}]`);
  console.log(`Maior numero: ${maior}`);
}

// Exercício 8: Contar vogais em uma string
export function contarVogais(): void {
  console.log("\n=== Contador de Vogais ===");
  const texto = readline.question("Digite uma frase: ").toLowerCase();
  const totalVogais = (texto.match(/[aeiouáéíóúãõâêîôû]/g) || []).length;
  
  console.log(`\nFrase: "${texto}"`);
  console.log(`Total de vogais: ${totalVogais}`);
}


// Exercício 9: Calculadora simples
export function calculadoraSimples(): void {
  console.log("=== Calculadora Simples ===");
  const num1 = readline.questionFloat("Digite o primeiro numero: ");
  const operacao = readline.question("Digite a operacao (+, -, *, /): ");
  const num2 = readline.questionFloat("Digite o segundo numero: ");
  
  let resultado: number;
  switch (operacao) {
    case '+': resultado = num1 + num2; break;
    case '-': resultado = num1 - num2; break;
    case '*': resultado = num1 * num2; break;
    case '/': resultado = num1 / num2; break;
    default: console.log("\nOperacao invalida!"); return;
  }
  
  console.log(`\nResultado: ${num1} ${operacao} ${num2} = ${resultado}`);
}

// Exercício 10: Ordenar array em ordem crescente
export function ordenarArray(): void {
  console.log("\n=== Ordenar Array ===");
  const numeros: number[] = [];
  const ordinais = ["primeiro", "segundo", "terceiro", "quarto", "quinto"]; // Array com os textos

  // Ler os 5 números
  for (let i = 0; i < 5; i++) {
    numeros.push(readline.questionInt(`Digite o ${ordinais[i]} numero: `));
  }

  // Ordenar o array
  const ordenado = [...numeros].sort((a, b) => a - b);

  // Exibir resultados
  console.log(`\nArray original: [${numeros.join(', ')}]`);
  console.log(`Array ordenado: [${ordenado.join(', ')}]`);
}

// Exercício 11: Testar Classe Pessoa
export function testarClassePessoa(): void {
  console.log("=== Classe Pessoa ===");
  const nome = readline.question("Digite o nome: ");
  const idade = readline.questionInt("Digite a idade: ");
  const pessoa = new Pessoa(nome, idade);
  console.log("\nDados da Pessoa:");
  pessoa.exibirDados();
}

// Exercício 12: Testar Classe Aluno
export function testarClasseAluno(): void {
  console.log("=== Classe Aluno ===");
  const nome = readline.question("Digite o nome: ");
  const idade = readline.questionInt("Digite a idade: ");
  const matricula = readline.question("Digite a matricula: ");
  const aluno = new Aluno(nome, idade, matricula);
  console.log("\nDados do Aluno:");
  aluno.exibirDados();
}

// Exercício 13: Testar Classe Carro
export function testarClasseCarro(): void {
  console.log("=== Classe Carro ===");
  const modelo = readline.question("Digite o modelo do carro: ");
  const carro = new Carro(modelo);
  console.log("\nTestando o carro:");
  carro.acelerar();
  carro.frear();
}

// Exercício 14: Tabuada
export function exibirTabuada(): void {
  console.log("=== Tabuada ===");
  const numero = readline.questionInt("Digite um numero para ver sua tabuada: ");
  console.log(`\nTabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Exercício 15: Calculadora de IMC
export function calcularIMC(): void {
  console.log("=== Calculadora de IMC ===");
  const peso = readline.questionFloat("Digite seu peso em kg: ");
  const altura = readline.questionFloat("Digite sua altura em metros: ");
  const imc = peso / (altura * altura);
  
  let classificacao: string;
  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25) classificacao = "Peso normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else if (imc < 35) classificacao = "Obesidade grau I";
  else if (imc < 40) classificacao = "Obesidade grau II";
  else classificacao = "Obesidade grau III";
  
  console.log(`\nSeu IMC: ${imc.toFixed(2)}`);
  console.log(`Classificação: ${classificacao}`);
}

// Exercício 16: Validar senha
export function validarSenha(): void {
  console.log("=== Validador de Senha ===");
  console.log("A senha deve conter:");
  console.log("- Pelo menos 8 caracteres");
  console.log("- Pelo menos uma letra maiuscula");
  console.log("- Pelo menos uma letra minuscula");
  console.log("- Pelo menos um número");
  
  const senha = readline.question("Digite uma senha: ");
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const valida = regex.test(senha);
  
  console.log(`\nSenha "${senha}" é ${valida ? "VALIDA" : "INVALIDA"}`);
}

// Exercício 17: Jogo de adivinhação
export function jogoAdivinhacao(): void {
  console.log("=== Jogo de Adivinhacao ===");
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let palpite: number;
  
  console.log("Tente adivinhar um numero entre 1 e 100!");
  
  do {
    palpite = readline.questionInt(`Tentativa ${tentativas + 1}: `);
    tentativas++;
    
    if (palpite < numeroAleatorio) console.log("MAIOR");
    else if (palpite > numeroAleatorio) console.log("MENOR");
  } while (palpite !== numeroAleatorio);
  
  console.log(`\nParabens! Você acertou em ${tentativas} tentativas.`);
}

// Exercício 18: Contar palavras em uma string
export function contarPalavras(): void {
  console.log("=== Contador de Palavras ===");
  const texto = readline.question("Digite uma frase: ");
  const palavras = texto.trim().split(/\s+/);
  console.log(`\nFrase: "${texto}"`);
  console.log(`Total de palavras: ${palavras.length}`);
}