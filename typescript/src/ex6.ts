//Usando o contexto do exercício 5, crie um tipo de usuário que representa funcionários da diretoria da empresa. O tipo Diretor deve conter as propriedades: nome, idade, salário (opcional) e nível de comissionamento (numérico). Crie uma função que receba um Diretor e mostre suas informações. Exemplos:

// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

type Diretor = {
  nome: string;
  idade: number;
  ocupacao: string;
  salario?: number;
  nivel: number;
};

class Cadastro {
  private funcionarios: Diretor[];

  constructor() {
    this.funcionarios = [];
  }

  cadastrarFuncionario(funcionario: Diretor): void {
    this.funcionarios.push(funcionario);
    console.log(`Funcionário ${funcionario.nome} cadastrado com sucesso.`);
  }

  getFuncionarios(): Diretor[] {
    return this.funcionarios;
  }
}

class Listagem {
  listarFuncionarios(funcionarios: Diretor[]): void {
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

  mostrarInformacoesDiretor(diretor: Diretor): void {
    let informacoes = `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivel}, salário `;

    if (diretor.salario !== undefined) {
      informacoes += `R$ ${diretor.salario}`;
    } else {
      informacoes += "N/A";
    }

    console.log(informacoes);
  }
}

const cadastro = new Cadastro();
const listagem = new Listagem();

// Cadastrar Funcionários:
cadastro.cadastrarFuncionario({
  nome: "Aline",
  idade: 20,
  ocupacao: "recepcionista",
  nivel: 0,
});
cadastro.cadastrarFuncionario({
  nome: "Roberto",
  idade: 25,
  ocupacao: "analista",
  nivel: 0,
});
cadastro.cadastrarFuncionario({
  nome: "Roberto",
  idade: 25,
  ocupacao: "analista",
  salario: 1000.00,
  nivel: 0,
});

// Obter lista de funcionários do cadastro
const funcionarios = cadastro.getFuncionarios();

// Listar Funcionários:
listagem.listarFuncionarios(funcionarios);

// Mostrar informações do diretor
const diretor: Diretor = {
  nome: "Daphne",
  idade: 23,
  ocupacao: "diretor(a)",
  nivel: 5,
  salario: 15000.00,
};

listagem.mostrarInformacoesDiretor(diretor);
