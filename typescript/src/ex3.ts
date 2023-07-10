// Crie um programa que simule uma carteira de dinheiro. Este programa vai precisar ter uma carteira contendo saldo, transações de entrada e saídas. Ou seja, será um objeto com estas propriedades. Depois crie uma função para lançar uma entrada e uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar um erro ou avisar.

// interface Registros {
//     saldo: number,
//     valorEntrada: number,
//     valorSaida: number
// }

class Carteira{
    saldo: number;
    entradas: number;
    saidas: number;

    constructor(saldo: number){
        this.saldo = saldo;
        this.entradas = 0;
        this.saidas = 0;
    }

    //função:
    lancarEntrada(entrada: number){
        this.saldo += entrada;
        this.entradas += entrada;
    }

    //função:
    lancarSaida(saida: number){
        if(this.saldo >= saida){
            this.saldo -= saida;
            this.saidas += saida;
        }
        else{
            throw new Error("Saldo insuficiente");
        }
    }
}

const saldoCarteira = new Carteira(500);
console.log(saldoCarteira);
saldoCarteira.lancarEntrada(200);
console.log(saldoCarteira);
saldoCarteira.lancarSaida(300);
console.log(saldoCarteira);
saldoCarteira.lancarSaida(400);
console.log(saldoCarteira);
saldoCarteira.lancarSaida(400);
console.log(saldoCarteira);