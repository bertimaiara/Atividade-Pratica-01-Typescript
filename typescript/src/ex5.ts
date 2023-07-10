//Crie um programa para mostrar informações de usuários (User) de uma empresa. Crie o tipo User com as seguintes propriedades: nome, idade, ocupação e salário (opcional). Caso o salário do usuário não seja informado, mostre o valor “N/A”. Exemplo:

// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

interface User {
  nome: string;
  idade: number;
  ocupacao: string;
  salario?: number;
}

class Cadastro {
  private funcionarios: User[];

  constructor() {
    this.funcionarios = [];
  }

  cadastrarFuncionario(funcionario: User): void {
    this.funcionarios.push(funcionario);
    console.log(`Funcionário ${funcionario.nome} cadastrado com sucesso.`);
  }

  getFuncionarios(): User[] {
    return this.funcionarios;
  }
}

class Listagem {
  listarFuncionarios(funcionarios: User[]): void {
    console.log("Lista de Funcionários:");
    funcionarios.forEach((funcionario) => {
      if (funcionario.salario !== undefined) {
        console.log(
          `Nome: ${funcionario.nome} | Idade: ${funcionario.idade} anos, Ocupação: ${funcionario.ocupacao}, Salário: R$ ${funcionario.salario}`
        );
      } else {
        console.log(
          `Nome: ${funcionario.nome} | Idade: ${funcionario.idade} anos, Ocupação: ${funcionario.ocupacao}, Salário: N/A`
        );
      }
    });
  }
}

const cadastrar = new Cadastro();
const listagem = new Listagem();

// Cadastrar Funcionários:
cadastrar.cadastrarFuncionario({
  nome: "Aline",
  idade: 20,
  ocupacao: "recepcionista",
});
cadastrar.cadastrarFuncionario({
  nome: "Roberto",
  idade: 25,
  ocupacao: "analista",
});
cadastrar.cadastrarFuncionario({
  nome: "Roberto",
  idade: 25,
  ocupacao: "analista",
  salario: 1000.0,
});

// Obter lista de funcionários do cadastro
const funcionarios = cadastro.getFuncionarios();

// Listar Funcionários:
listagem.listarFuncionarios(funcionarios);