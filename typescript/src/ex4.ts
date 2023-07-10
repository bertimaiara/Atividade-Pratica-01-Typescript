//Crie um programa para cadastrar, listar e excluir produtos de uma lista com tipagem de Produto.

interface Produto {
  id: number;
  nome: string;
}

class CadastrarProdutos {
  private produtos: Produto[];

  constructor() {
    this.produtos = [];
  }

  cadastrarProduto(produto: Produto): void {
    this.produtos.push(produto);
    console.log(`Produto "${produto.nome}" cadastrado com sucesso.`);
  }

  listarProdutos(): void {
    console.log("Lista de Produtos:");
    this.produtos.forEach((produto) => {
      console.log(`ID: ${produto.id} | Nome: ${produto.nome}`);
    });
  }

  excluirProduto(id: number): void {
    const index = this.produtos.findIndex((produto) => produto.id === id);
    if (index === -1) {
      console.log("Produto não encontrado.");
    } else {
      const produtoExcluido = this.produtos.splice(index, 1)[0];
      console.log(`Produto "${produtoExcluido.nome}" removido com sucesso.`);
    }
  }
}

const cadastro = new CadastrarProdutos();

// Cadastrar produtos
cadastro.cadastrarProduto({ id: 1, nome: "Celular" });
cadastro.cadastrarProduto({ id: 2, nome: "Caderno" });
cadastro.cadastrarProduto({ id: 3, nome: "Livro" });

// Listar produtos
cadastro.listarProdutos();

// Excluir produto
cadastro.excluirProduto(2);

// Listar produtos novamente após exclusão
cadastro.listarProdutos();
