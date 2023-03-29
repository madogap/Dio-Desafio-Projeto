/*const num = 5;
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
Á vista debito 10% de desconto

a vista dinheiro ou pix desconto 15%

em duas vezes precos normal sem juros

acima de duas vezes preco normal + jutos de 10%*/

let produto = 100;

let formaPagaDebito = '1';
let dinheiroPix = '2';
let parcelaDe2 = '3';
let parcelaDeMais2Vezes = '4';

let descontDebito = 0.1;
let descontoDinhePix = 0.15;
let acrescimoParcelas3 = 0.1;
/*
const parcela2 = produto;

const maisParcela3 = (produto + (produto * 0.1));
*/
switch (formaPagaDebito) {
    case '1':
        a = produto - (produto * descontDebito);
        console.log(a);
        break;
    case '2':
        b = produto - (produto * descontoDinhePix);
        console.log(b);
        break;
    case '3':
        c = produto;
        console.log(c);
        break;
    case '4':
        c = produto + (produto * acrescimoParcelas3);
        console.log(c);
        break;

    default: 
            
        break;
}


