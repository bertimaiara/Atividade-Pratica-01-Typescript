// Crie uma função que receba 2 números e retorne um objeto contendo a média e também um indicador booleano de aprovado/reprovado. Considere aprovado com média >= 6.

interface Resultado {
    media: number;
    aprovado: boolean;
}

function calcularMedia(nota1:number, nota2:number, resultado: Resultado): void {
    resultado.media = (nota1 + nota2) / 2;
    resultado.aprovado = resultado.media >=6;
}

const nota: Resultado = {
    media: 0,
    aprovado: false
}

calcularMedia(6, 10, nota)
console.log(nota)