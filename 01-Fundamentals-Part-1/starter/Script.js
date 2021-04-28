/*let js = "amazing";
if (js === "amazing") alert("LA MASCARI LE DUELE LA CABEZA!");

console.log("TOMATE UN PANADOL");
console.log("Stephen")
console.log(43);
let firstName = "Stephen"
console.log(firstName);
console.log(firstName);
console.log(firstName);

let stephen_amy = "SA";
let $function = 27;

let person = "Stephen";
let PI = 3.1415;

let myFirstJob = "Mason";
let myCurrentJob = "SDET";

console.log(myFirstJob)
console.log(myCurrentJob)

// dynamic typing - change value
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Stephen');//String ensure to add quotes

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year = 1977;
console.log(year);
console.log(typeof year);

console.log(typeof null); //bug whereby shows as object, when really it is another type of undefined. JS don't fix for legacy reasons*/

/*let age = 43;
age = 44;

const birthYear = 1977;
// birthYear = 1978;
// const job;

var job = 'SDET';
job = 'Coach'

lastName = 'Fortunato'; //variable not declared with const,let,var, but still works on console. Though does not create
console.log(lastName)    //in the scope, instead JS will create a property on the global object.*/

//Math operators
/*const now = 2037;
const ageStephen = now - 1977;
const ageAmy = now - 1981;
const ageNathan = now - 2003;
const ageNicky = now - 2006;
console.log(ageStephen, ageAmy, ageNathan, ageNicky)

console.log(ageStephen * 2, ageStephen / 10, 2 ** 3)*/
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

/*const firstName = 'Stephen';
const lastName = 'Fortunato';

console.log(firstName + ' ' + lastName)*/


//Assigment operators
/*let x = 10 + 5; // 15
x += 10; //x = + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1 increment
x--; //decrement
x--;
console.log(x);*/

//Comparison True/False
/*console.log(ageStephen > ageAmy);//>, <, >=, <=
console.log(ageAmy >= 55);*/

/*const isFullAge = ageAmy >= 55;*/

/*const now = 2021;
const ageStephen = now - 1977;
const ageAmy = now - 1981;
const ageNathan = now - 2003;
const ageNicky = now - 2006;

console.log(now - 1977 > now - 1981)

let x, y;
x = y = 25 - 10 - 5;//x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageStephen + ageAmy) / 2;
console.log(ageStephen, ageAmy, averageAge);*/
/*
// ///////////////////////////////////////////
Coding Challenge #1
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
m tall.
*/

/*let markWeight = 78, markHeight = 1.69;//Data 1
let BMImark1 = markWeight / markHeight ** 2;

console.log(BMImark1);

markWeight = 95, markHeight = 1.88;//Data 2
let BMImark2 = markWeight / markHeight ** 2;

console.log(BMImark2);

let johnWeight = 92, johnHeight = 1.95;//Data 1
let BMIjohn1 = johnWeight / johnHeight ** 2;

console.log(BMIjohn1);

johnWeight = 85, johnHeight = 1.76;//Data 2
let BMIjohn2 = johnWeight / johnHeight ** 2;

console.log(BMIjohn2);

const markHigherBMI1 = BMImark1 > BMIjohn1;

console.log(markHigherBMI1);

const markHigherBMI2 = BMImark2 > BMIjohn2;

console.log(markHigherBMI2);*/

// Teachers Answer
// const massMark = 78.0;
// const heightMark = 1.69;
// const massJohn = 92.0;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn);

// if (BMIMark >= BMIJohn) {
//  console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`)
// } else {
//  console.log(`John's BMI is higher than Mark's!`)
// }

// Strings using template literals

/*const firstName = 'Stephen';
const job = 'SDET';
const birthYear = 1977;
const year = 2021;

const stephen = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(stephen)

const stephenNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(stephenNew);

console.log(`Just a regular string... using back ticks`)
// many devs use back ticks always

// multi line strings

// before ES6 \n\ - new line
console.log('String with \n\
multiple \n\
lines');

// ES6
console.log(`String with
multiple
lines`)*/


/*const age = 15;

if (age >= 18) {
 console.log('Amy can start driving license  🚗');
} else {
 console.log('Amy cannot start driving license 🚗')
}

const yearsLeft = 18 - age;

console.log(`Amy is too young. Wait another
${yearsLeft} years :)`);*/

// Type Conversion
// const inputYear = '1977';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 44);

// console.log(Number('Stephen'));
// console.log(typeof NaN);

// console.log(String(43), 43);

// // Type Coercion
// console.log('I am ' + 43 + ' years old');
// console.log('43' - '10' - 3);
// console.log('43' / '2');
// console.log('43' > '18');

// let n = '1' + 1; //'11' string+string gets concatenated
// n = n - 1;
// console.log(n);

// Falsy - not exactly false but will become false when we try to convert them to a Boolean
// (0, '' empty string, undefined, Null, NaN)
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Stephen'));
console.log(Boolean({})); //empty object 
console.log(Boolean(''));

const money = 0;
if (money) {
 console.log("Don't spent it all!");
} else {
 console.log("You should get a job!");
}

const height = 123;
if (height) {
 console.log('YAY! height is defined');
} else {
 console.log('Height is UNDEFINED');
}
// ===  strict equality operator does not perform type coercion and onlt returns true when both values are the same == loose operator - is type coercion, js converts it.

const age = '18';
if (age === 18) console.log('You just became an adult :D');
if (age == 18) console.log('You just became an adult :D');

// When comparing values Use strict equality operator to avoid bugs - ===. Loose equality operator has weird rules.
// even if we need type conversion, in that case convert manually before the comparism, than relying on loose equality operator.


// prompt function - create valiable - const.
// Converted manually by adding Number with "capital", 
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if (favourite === 43) { // '43' sting == 43 number
 console.log('Cool! 43 is an amazing number!')
} else if (favourite === 39) {
 console.log('39 is also a cool number')
} else if (favourite === 17) {
 console.log('17 is also a cool number')
} else if (favourite === 15) {
 console.log('15 is also a cool number')
} else {
 console.log('Number is not 43, 39, 17 or 15')
}

if (favourite !== 43) console.log('Why not 43?');//different operator

// Basic Boolean Logic: The And, OR & NOT Operators
// We also need to learn about logic, especially Boolean logic.
// Branch of computer science that uses true/false values to solve complex logical problems, uses several logical operators to combine true and false values, same as we use arithmetic operators to comnbine numeric values. Not specific to JS, all programming languages use this logic.


