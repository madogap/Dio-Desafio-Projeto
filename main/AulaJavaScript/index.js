/*
const num = 5;
const numPar = (num % 5) === 0;
console.log(numPar);

if (num === 0) {
    console.log('Executado com sucesso');
} else if (num === 5) {
    console.log('Não é par!')
} else {
    console.log('Não')
}

const precoEtanol = 5.79;
const precoGasol = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / precoEtanol;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
    
} else { 
    const valorGasto = litrosConsumidos * precoGasol;
    console.log(valorGasto.toFixed(2));
   
    

}


function calcuImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}
function classifImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
    
}
//Main
(function () {
    const peso = 75;
    const altura = 1.75;
    const imc = calcuImc(peso, altura);
    console.log(classifImc(imc));
})();
//main();

Á vista debito 10% de desconto

a vista dinheiro ou pix desconto 15%

em duas vezes precos normal sem juros

acima de duas vezes preco normal + jutos de 10%
*/
let produto = 100;
let formaPagaDebito = '1';
let dinheiroPix = '2';
let parcelaDe2 = '3';
let parcelaDeMais2Vezes = '4';
switch (formaPagaDebito) {
    case '1':
        console.log(pagDebi(100, 10));
        break;
    case '2':
        console.log(pagVistPix(100, 15));
        break;
    case '3':
        c = produto;
        console.log(c);
        break;
    case '4':
        console.log(pagComJuros(100, 10))
        break;

    default:

        break;
}

function pagDebi(valor, desconto) {

    return valor - (valor * desconto / 100);
}
function pagVistPix(valor, descontoDinhePix){
    return valor - (valor * descontoDinhePix / 100);
}
function pagComJuros(valor, juros){
   
    return valor + (valor * juros / 100)
}
