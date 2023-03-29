const { gets, print } = require('./index');
/*Uma sala contem 5 alunos e para cada aluna foi sorteado um numerp de 1 - 100
Programa que receba os 5 numeros sorteados para os alunos e moste o maior numero sorteado
Dados de Entrada
5
50
10
98
23

saída
98
const numerosSorteados = [];
for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
}
let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado

    }

}
print(maiorValor);
*/
const quantidadeNoArray = gets()
let maiorValorEncontrado = 0;
for (let i = 0; i < quantidadeNoArray; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado
    }

}
print(maiorValorEncontrado);

