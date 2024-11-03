function rankeada(vitorias, derrotas) {
    return vitorias - derrotas
}

function saldoDeRankeadas ( vitoria ) {
    if (vitoria <= 10) {
        return "Ferro"
    } else if (vitoria > 10 && vitoria <= 20) {
        return "Bronze"
    } else if (vitoria > 20 && vitoria <= 50) {
        return "Prata"
    } else if (vitoria > 50 && vitoria <= 80) {
        return "Ouro"
    } else if (vitoria > 80 && vitoria <= 90) {
        return "Diamante"
    } else if (vitoria > 90 && vitoria <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}

let vitoria = rankeada(10, 5)
let resultado = saldoDeRankeadas(vitoria)

console.log(`O Herói tem de saldo de ${vitoria} vitorias e está no nível de ${resultado}`)