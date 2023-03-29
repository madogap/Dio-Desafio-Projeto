class Person {
    //Atributos
    nome;
    peso;
    altura;
    //Método construtor 
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    //Método da class
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
    classificaImc() {
        const imc = this.calcularImc()
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
}
const mar = new Person('Marcus', 70, 1.75);
console.log(mar);
console.log(`O imc de ${mar.nome} é ${mar.calcularImc(70, 1.75)} seu peso é: ${mar.peso} e sua altura é: ${mar.altura} a sua classificação é: ${mar.classificaImc()} `)