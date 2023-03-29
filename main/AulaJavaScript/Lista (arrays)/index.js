/*
//Lista 

const alunos = ['Caio', 'Cesar', 'Mariana'];

console.log(`No index 0: ${alunos[0]}`);
console.log(`No index 1: ${alunos[1]}`);
console.log(`No index 2: ${alunos[2]}`);
console.log(alunos);

// O método PUSH() Adiciona no final do Array Lista 
alunos.push('Marcus');
console.log(alunos);

//Reatribuindo valores aos index do array
alunos[0] = 'A';
alunos[1] = 'B';
alunos[2] = 'C';
console.log(alunos);

//Método POP() retira o ultimo index do array
console.log(alunos.pop());
console.log(alunos);

/*O método shift remove o elemento de índice zero, 
diminui em 1 os indices dos demais valores e retorna o valor removido. 
Se a propriedade length for 0, então undefined é retornado. shift é intencionalmente genérico; 
esse método pode ser chamado ou aplicado para objetos parecidos com arrays*/
/*
console.log(alunos.shift());
console.log(alunos);

//Adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length ) atualizado.
console.log(alunos.unshift('A'));
console.log(alunos);


const notas = [];
notas.push(1);
notas.push(2);
notas.push(3);
notas.push(4);


//Loop For
const nome = 'Marcus Augusto de Oliveira'
console.log(nome.length);
for (let i = 0; i < nome.length; i++) {
    
    console.log(nome[i]);
    
}


const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length;
console.log(media);
*/

//Praticando
/*
const nu = 10;
for (let i = 1; i <= 10; i++) {
    console.log(i * nu);

}

//Número Par

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    } 
}
*//*
const numeros = [];

    for (let i = 0; i < 10; i++) {
        numeros.push(i);
    }

    console.log(numeros);

    const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log(numerosPares);

    const listaDeValores = [1, 2, 3, 4, 5];
    const valor = listaDeValores[2];
    console.log(valor);*/
    //Tendo em vista tudo o que aprendemos sobre listas e estruturas de repetições, qual o resultado esperado para o código a seguir?
    //const numerosPares = [];

    for (let i = 0; i < 10; i++) {
        const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
    }

    console.log(numerosPares);