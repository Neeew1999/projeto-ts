"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = exports.Aluno = exports.Pessoa = void 0;
/**
 * Classe Pessoa para o Exercício 11
 */
class Pessoa {
    /**
     * Construtor da classe Pessoa
     * @param nome Nome da pessoa
     * @param idade Idade da pessoa
     */
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    /**
     * Exibe os dados da pessoa no console
     */
    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
    }
}
exports.Pessoa = Pessoa;
/**
 * Classe Aluno para o Exercício 12 (herda de Pessoa)
 */
class Aluno extends Pessoa {
    /**
     * Construtor da classe Aluno
     * @param nome Nome do aluno
     * @param idade Idade do aluno
     * @param matricula Número de matrícula
     */
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }
    /**
     * Exibe os dados do aluno (sobrescreve o método da classe Pessoa)
     */
    exibirDados() {
        super.exibirDados();
        console.log(`Matrícula: ${this.matricula}`);
    }
}
exports.Aluno = Aluno;
/**
 * Classe Carro para o Exercício 13 (implementa Veiculo)
 */
class Carro {
    /**
     * Construtor da classe Carro
     * @param modelo Modelo do carro
     */
    constructor(modelo) {
        this.modelo = modelo;
    }
    /**
     * Método para acelerar o carro
     */
    acelerar() {
        console.log(`${this.modelo} está acelerando...`);
    }
    /**
     * Método para frear o carro
     */
    frear() {
        console.log(`${this.modelo} está freando...`);
    }
}
exports.Carro = Carro;
