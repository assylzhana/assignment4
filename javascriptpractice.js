console.log("Hello World")
//alert('yo')

let name;
console.log(name);//undefined

let name2 = 'Mosh';
console.log(name2);

let firstName = 'Mosh', lastName = 'Hamedani';
console.log(firstName +' '+ lastName);

let rate = 0.3;
rate = 1;
console.log(rate); // output 1

//let - changable variable
//const - constant variable

const rate2 = 0.3;
// rate2 = 1; TypeError
console.log(rate2); 

let person = {
    name: 'Mosh',
    age: 30
};
//dot notation
person.name='John';


//bracket notation
person['name']= 'Mary';
// other version
let selection ='name';
person[selection] = 'A';

console.log(person)

let selectedColors = ['red','blue']
selectedColors[2] ='green'
console.log(selectedColors)
console.log(selectedColors.length)
console.log(selectedColors[0])

function greet(name){
    console.log('hi '+ name)
}

greet('A');

function square(number){
    return number*number;
}

console.log(square(2))