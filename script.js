//alert('Hello word')
//console.log('this is console');
//console.error('this is an error');
//console.warn('This is a warning');
//console.log(prompt('age'));

// declaring variables
// var, const, let
/*const namee= 'someone';
//let age= 99;
// let can be re-assigned . const can not
//namee = 'someone2';
age= 100;
console.log(namee)
console.log(age);



let z;
console.log(z) // undefined

// arrays
let numbers=[1, 2, 3, 4, 5];
let fruits=['apples', 'oranges', 'pears', 'grapes'];
//let hobbies=['sleep', 3, true];

console.log(numbers);
console.log(fruits);
//console.log(hobbies);

// objects literals
const person = {
  name: 'Eve',
  //age: 5000,
  isPerson: true,
  hobbies: ['eating', 'sleeping']
};
console.log(person)

//typeof
//console.log(typeof(age));
console.log(typeof(hobbies));
console.log(typeof(numbers));
console.log(typeof(person));*/

// string concatenation
let name= 'mohammed';
let age= 99;
console.log("My name is " + name + " and I am " + age);

//string concatenation (ES6)
//template literals
console.log(`My name is ${ name} and I am ${ age}`);


// string propreties and methods
let s= 'Hello World';
let val;
// get length
val=s.length;
console.log(val);
console.log(s[0]);

// change case
x=s.toUpperCase()
console.log(x)
//y= s.toLowerCase()
//console.log(y)

//get sub string
val= s.substring(3,9);
console.log(val)
// split into array
val=s.split('');
console.log(val)
val= val.join('+')
console.log(val)

// array methods & propreties
const colors=['black', 'white', 'red', 'blue'];
console.log(colors);
// get length
console.log(colors.length);
console.log(colors[3]);

// adding new value
colors.push('yellow');
console.log(colors)
// adding to begining
colors.unshift('purple');
console.log(colors);
colors[2]='orange';
console.log(colors);

//removing elements
//last element
colors.pop()
console.log(colors);
// first element
colors.shift();
console.log(colors);

//check if an array
console.log(Array.isArray(colors));
console.log(Array.isArray('black'));

//get index
console.log(colors.indexOf('red'))

console.log(colors[2]);

console.log(colors.indexOf('apple'))
console.log(colors[-1]);

//arithmetic operator
console.log(13+4);
console.log('13'+ '4');
console.log('3' * '2');
console.log(3 * 'text');
console.log('10' / '2');
console.log(10 % 2);
console.log(2**4);

//
//let y=5;
//console.log(++y)
//console.log(--y);

//object literals
const person ={
    firstName: 'Adam',
    age: 30,
    hobbies: ['music', 'movies', 'sport'],
    address: {
        city: 'Tunis',
        state: 'over there'
    }
};
console.log(person)

console.log(person.firstName);
console.log(person.address.city)

// add proprety
person.email= 'adam@gmail.com'
console.log(person)

//
person.hobbies.push('singing');
console.log(person)

//array of objects
const users=[
  {
    name: 'person1',
    age: 23,
    email: 'p1@gmail.com'
  },
  {
    name: 'person2',
    age: 26,
    email: 'p2@gmail.com'
  },
  {
    name: 'person3',
    age: 24,
    email: 'p3@gmail.com'
  }
];

console.log(users);
console.log(typeof(users));
console.log(typeof(age));
console.table(users);

// function
function greet(namee){
  console.log(`Hello ${namee}`)
}
greet('Ahmed');
console.log(typeof(greet));

// another func
function Sum(a,b) {
  return a+b
}
console.log(Sum(2,5));

// arrow function
const great=(name)=> {
  console.log(`Hello ${name}`)

}
great('Adam');

// Sum with arrow function
const somme=(a,b) => a+b
console.log(somme(12,13))

//conditions
// if/ else
const y=10;
if(y===10) {
  console.log('y is 10');
}
else if(y>10) {
  console.log('y is greater than 10')
}
else {
  console.log('y is less than 10')
};

// switch
let color;

switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  
  case 'yellow':
    console.log('color is yellow');
    break;

  case 'black':
    console.log('color is black');
    break;

  default:
    console.log('color is white')
    break;
}

//loops
//for
for (let i = 1; i <= 10; i++) {

  console.log(`For loop number ${i}`);
}

// while
let j=3;
while (j<=10) {
  
  console.log(`while loop number: ${j}`);
  j++;
}

// loop through arrays
const numb= [22,55,66];

for (let k = 0; k < numb.length; k++) {
console.log(numb[k]*2)  ;
}

for (let x of numb) {
console.log(x);  
}