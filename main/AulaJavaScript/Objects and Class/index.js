//Como o objeto deve ser 
class Person {
    //Atributos
    name;
    age;
    //Método construtor 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Método da class
    description() {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`);
    }
}
//Instancia
/*
const person = {
    name: 'Marcus Augusto',
    age: 35,
    description: function (){
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`);
    }
}
const atr = 'age';
//delete person.name;
person.description();
console.log(person[atr]);
console.log(person['name']);
person['name'] = 'teste';
person.name = 'teste';
console.log(person['name']);
*/
//Instâcia é a ocorrência da classe
/*
const jose = new Person('Jose', 99); //Passando pelo método constructor para instânciar
console.log(jose);
//Instanciamento 
const marcus = new Person();
marcus.age = 35;
marcus.name = 'Marcus Augusto de Oliveira';
const xico = new Person();
xico.age = 99;
xico.name = 'Xico';
console.log(jose);
console.log(marcus);
console.log(xico);
*/
function comparaPerson(p1, p2) {
    if (p1.age > p2.age) {
        console.log(`${p1.name} é mais velho que ${p2.name}`);
    } else if (p2.age > p1.age) {
        console.log(`${p2.name} é mais velho que ${p1.name}`);
    } else {
        console.log(`${p1.name} e ${p2.name} tem mesma idade`);
    }
}
const mar = new Person('Marcus', 99);
const bru = new Person('Bruno', 12);
comparaPerson(mar, bru);