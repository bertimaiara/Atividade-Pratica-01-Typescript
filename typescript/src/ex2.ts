// Crie uma função que receba uma lista de objetos contendo nota e peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

interface Nota {
    nota: number,
    peso: number
}

function calcularMediaPonderada(notas: Nota[]) {
    let somaNotas = 0;
    let somaPesos = 0;

    for (const nota of notas) {
        somaNotas += nota.nota * nota.peso;
        somaPesos += nota.peso;
    }

    const media = somaNotas / somaPesos;

    console.log(media.toFixed(2))
}

const notas = [
    {
        nota: 10,
        peso: 2
    },
    {
        nota:6,
        peso:1
    }
]

calcularMediaPonderada(notas);