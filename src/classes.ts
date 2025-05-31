/**
 * Classe Pessoa para o Exercício 11
 */
export class Pessoa {
  /**
   * Construtor da classe Pessoa
   * @param nome Nome da pessoa
   * @param idade Idade da pessoa
   */
  constructor(private nome: string, private idade: number) {}

  /**
   * Exibe os dados da pessoa no console
   */
  exibirDados(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
  }
}

/**
 * Classe Aluno para o Exercício 12 (herda de Pessoa)
 */
export class Aluno extends Pessoa {
  /**
   * Construtor da classe Aluno
   * @param nome Nome do aluno
   * @param idade Idade do aluno
   * @param matricula Número de matrícula
   */
  constructor(nome: string, idade: number, private matricula: string) {
    super(nome, idade);
  }

  /**
   * Exibe os dados do aluno (sobrescreve o método da classe Pessoa)
   */
  exibirDados(): void {
    super.exibirDados();
    console.log(`Matrícula: ${this.matricula}`);
  }
}

/**
 * Interface Veiculo para o Exercício 13
 */
interface Veiculo {
  acelerar(): void;
  frear(): void;
}

/**
 * Classe Carro para o Exercício 13 (implementa Veiculo)
 */
export class Carro implements Veiculo {
  /**
   * Construtor da classe Carro
   * @param modelo Modelo do carro
   */
  constructor(private modelo: string) {}

  /**
   * Método para acelerar o carro
   */
  acelerar(): void {
    console.log(`${this.modelo} está acelerando...`);
  }

  /**
   * Método para frear o carro
   */
  frear(): void {
    console.log(`${this.modelo} está freando...`);
  }
}