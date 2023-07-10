//Crie um tipo que seja composto por um User OU por um Diretor usando interseção de tipos. Desenvolva uma função que receba uma lista desse novo tipo e, para cada item da lista, imprima:

// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

type User = {
  nome: string;
  idade: number;
  ocupacao: string;
  salario?: number;
};

type Diretor = {
  nome: string;
  idade: number;
  ocupacao: string;
  salario?: number;
  nivel: number;
};

type Bivalente = User | Diretor;

function imprimirInformacoes(lista: Bivalente[]): void {
  lista.forEach((item) => {
    if ("nivel" in item) {
      console.log(
        `Diretor(a) ${item.nome}, ${item.idade} anos, comissão nível ${
          item.nivel
        }, salário ${item.salario !== undefined ? `R$ ${item.salario}` : "N/A"}`
      );
    } else {
      console.log(
        `${item.nome}, ${item.idade} anos, ${item.ocupacao}, salário ${
          item.salario !== undefined ? `R$ ${item.salario}` : "N/A"
        }`
      );
    }
  });
}

const lista: Bivalente[] = [
  {
    nome: "Aline",
    idade: 20,
    ocupacao: "recepcionista",
  },
  {
    nome: "Roberto",
    idade: 25,
    ocupacao: "analista",
  },
  {
    nome: "Daphne",
    idade: 23,
    ocupacao: "diretor(a)",
    nivel: 5,
    salario: 15000.0,
  },
];

imprimirInformacoes(lista);
