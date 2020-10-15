// 2015

// DEFAULT PARAMETERS
// Before
function newFunction(name, age, country) {
    var name = name || 'Jesus';
    var age = age || 29;
    var country = country || 'MX';
    console.log(name, age, country);
}

// ES 6
function newFunction2(name = 'Jesussss', age = 36, country = 'COL') {
    console.log(name, age, country);
}

// TEMPLATE LITERALS
// Before
let hello = 'Hello';
let world = 'World';
let phrase = hello + ' ' + world;
//  Hello World

// ES 6
let phrase = `${hello} ${world}`;
//  Hello World

// MULTILINE
// before
let phraseMultiline = 'sdjhfbsdjbf. \n' + 'sdfsdfbds';

// ES 6
let phraseMultiline2 = `dgkdfngkdfngdkfj

lekgmlekrmge


elrgelkrmg`;

// DESTRUCT
let person = {
	name: 'Jesus',
	age: 29,
	country: 'MX'
};
console.log(person.name, person.age);

let { name, age } = person;
console.log(name, age);

// SPREAD OPERATOR
let team1 = ['Jesus', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica'];

let education = ['David', ...team1, ...team2];
console.log(education);

// LET
{
    var global = 'Global var';
}

{
    let globalLet = 'Global let';
}

// CONST
const a = 'asdasd';
a = 'nuevo valor';

//
let name = 'Jesus';
let age = 29;

let obj = { name: name, age: age };
let obj2 = { name, age };

// ARROW FUNCTION
// Before
const names = [
	{ name: 'Jesus', age: 29 },
	{ name: 'Jessica', age: 28 }
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
    return item.name;
});

// ES 6
let listOfNames2 = names.map((item) => console.log(item.name));

let listOfNames3 = names.map((item) => item.name);

let listOfNames4 = names.map((item) => {
    let name_age = `${item.name} ${item.age}`;
    return name_age;
});

let listOfNames5 = (name, age) => {
    let name_age = `${name} ${age}`;
    return name_age;
};

let square = (num) => num * num;
square(7); // 49

setTimeout(() => console.log('3 seconds later..'), 3000);

// RANDOM
functionTimeOut = (interval) => {
    console.log(`Will wait for ${interval} miliseconds..`)
    setTimeout(() => console.log(`${interval} miliseconds later..`), interval);
}

const helloPromise = () => {
    return new Promise((resolve, reject) => {

        if(true) {
            resolve('Hey, well done!');
        }
        else {
            reject('WRONG!');
        }
    });
};

helloPromise()
    .then((response) => console.log(response))
    .catch((error) => console.log(error));






const helloPromise2 = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey, well done!');
        } else {
            setTimeout(function(){ 
                console.log('this took 3 seconds to appear..');
                reject('WRONG!!'); 
            }, 3000);
        }
    });
};

let functionCallPromise = () => {
	helloPromise2()
		.then((response) => console.log(response))
		.then(() => console.log('..congrats'))
		.catch((error) => console.log(error));

	console.log("this will be printed first");
}


class Calculator {

	constructor(num1, num2) {
        this.num1 =
		this.valueA = 0;
		this.valueB = 0;
	}

	sum(valueA, valueB) {
		this.valueA = valueA;
		this.valueB = valueB;

		return this.valueA + this.valueB;
	}
}

const calc = new Calculator();
console.log(calc.sum(2, 2));


// MODULES
import { hello } from './module';
hello();

// GENERATORS
function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }

    if(true) {
        yield 'World!';
    }
}

