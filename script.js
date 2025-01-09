alert("What are youn doing man? Please make a sense.")
document.write("What are youn doing man? Please make a sense.")
console.log("What are youn doing man? Please make a sense");
console.log('How are you doing')

// const let var
 
// Var> variables can be used in storing data including a strings , number, objects and arrays.
var a = 10;
var a = "Hello";
var a = {};
var a = []; 
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// Let keywords is used to decare a block-scopped variable, mean it only visible to within the  block in which it is decarled.
let age = 20;
console.log(age);
//  result will be 20;
// Or in a  tough experiment like the below one
if(age>20){
let person = 30;
console.log(person);
// we console it inside the curly bracktes and it is a valid method
}
// and if we called the concole outside the brackets or outside it block scope then we recived an references error.
console.log(person);
// Const> conctant can be used to declare a variables and we cannot re-assign their values (in below exaple)
const ammount = 30;    
// const ammount  = 40;   invalid method because as we learn before that we could not re-asign the 'const' values, mean if we decalre a "ammount" variable and again if we declare a variable with same name then we recived a reference error
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// Scope in javascript = "Scope in javascript refers the visibility of variables and fuctions within in a programme" Types of scope -> 1) Global Scope, 2) Block Scope, 3) Funstional Scope //
//  Global Scope is the outermost scope of javascript programme. Variables and functions declared in a global scope are visible anywhare in the programme. ('var' is the example of a global scope)
var brand = "Tayota"
function brandInquerry(){
console.log(brand)
}
brandInquerry();
console.log(brand)
//Function scope is created when a function is declared.Variables and function declared in a function scope are only visible inside that function
function luxuaryCars(){
var marceedes = 2025;
console.log(marceedes);
}
luxuaryCars()

// Blocked Scope -> variables and functions declared in a block scope are only visible inside that scope. Block scope is a group of statements that are enclosed inside curly blaces '{}'
function blockScope(){
if(bs>vs){
let bs = "Blocked Scope";
console.log(bs);
}
}
 blockScope();
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// Data Types in JavScript ->Datatypes are of two types! 1 is 'Premitive' >Number, Boolian, String, Null, Undefined, BigInt, Symbol  and another is 'Non-Primitive or Reference Type' > Oblects, Arrays and functions. 
 
// Functions is the type of 'objects' tha is used to exeute code.
// Objects are used to store different type of data.
// Arrays are used to store different values.  
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// Oprators in JS
// Oprators in javascript are symbols that is used to perform oprations on oprends. Oprands are values and vaiables.
// ----------------------------------------------------------------------
// Control Flow statements in JavaScript
// Control flow statements are used to control the flow of code execution in JavaScript Programme. They are used to make decitions, execute loops & handle errors. 
// 3 type of control flow statements in javascript

//  1) Conditional Staement
//below example
// i)
if(true){
console.log("Hello, Conditiobal Statement");
}
// vice versa, in this condition nothing is printed in console tab
if(false){
console.log("Hello, Conditional Statement");
} 
// ii)
let country = "Pakistan"
let minimumAge = 18;
if(minimumAge >= 18 && country == "Pakistan"){
console.log('You are able to apply for virtual driving license card')
}
// iii)
let height = 30;
if(height>25){
console.log('You are able to jump')
}
// and if 
let ht = 30;
if(ht>25){
console.log('You are not able to jump')
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// Now we will discuss about 'If Else' Condition, because it is also a type of conditional statements
let counrY = "Pakistan"
let miniumAge = 18;
if(minimumAge >= 18 && country == "Pakistan"){
console.log('You are able to apply for virtual driving license card')
}
else if(minimumAge >= 16 && country == "Pakistan"){
    console.log("You are Teenager")
}
else{
    console.log("Sorry! You're not able to apply for a virtual driving license card");
    
}
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// Switch Case -> Part of Condiitional statements (Switch Case in javascript are used to execute a block of code based on the value of an expression )
let value = "Zohaib"
switch (typeof value) {
case String:
console.log("String")
break;
case Number:
console.log("Number")
break;
case Boolian:
console.log("Boolian")
break;
case Undefined:
console.log("Undefined")
break;
default:
console.log("Other");
break;
}
// another example that show case the default day name
let dayName = 2;
switch(dayName){

case 1:
dayName = "Sunday"
break;
case 2:
dayName = "Monday"
break;
case 3:
dayName = "Thuesday"
break;
case 4:
dayName = "Wednesnday"
break;
case 5:
dayName = "Thursday"
break;
case 6:
dayName= "Friday"
break;
case 7:
dayName = "Saturday"
break;
default:
    dayName = "Other"
    break;
}
console.log("The day name is " + dayName);
// Terinary Oprator , it is easy and works as a if and else condition type. Its structire is given below
let something = "something";
(condition)? Expression1 : Expression2;

// -----------------------------------------------------
//  2)Loops
// Loops in programing are used to reapet a block of code, mean if we repaet a message more than 100 times then we used loops
// for loop
let i = 10;
for (let i = 1; i <= 10; i++){
console.log("Great Stack")
}
// for arrays
let cooding = [JS, PY, C++]
for (let i =0; i <= cooding.length; i++){
console.log(cooding[i]);
}
// loop inside a loop
let j = 10;
for (let j = 1; j <= 10; j++){
console.log("Great Stack")

for(let j= 0; j<=5; j++){
console.log("Loop inside a loop" + j);
}}

//While loop 

let k = 0;
while(k <= 5){
    console.log("while loop " + k)
    k++;
}

// Do While Loop
let  n = 1
do{
console.log("do while loop " + n)
n++;
}while(n<=10)

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// Fuctions
function greet(fname, lname){
console.log("Hello, " + fname + " " + lname )
}
greet("hassan", "ali");

// Return function
function added(x, y){
return x + y;
}
// now we will add the the refernce of 'added' into a variable
let calculation = added(10, 90);
console.log(calculation);

// function inside a function 
function abc(x){
function bca(y){
    return x * y;
}
return bca;
}

let twofunctions = abc(4);
console.log(twofunctions); 

console.log(twofunctions(5));
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
//callback function
// A callback function is a function passed as an argument to another function, which is then executed after the completion of a specific task or event
function fun1(results){
    console.log(results);
}

function fun2(num1, num2, myCallback) {
  let sum =  num1 + num2;
myCallback(sum)
}

fun2(20, 30, fun1)
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// Anonymouse function 
// Anonymouse function is a function in JS that we have declared without a name
let sum = function(x, y){
return x+y;
}
console.log(sum(10, 20));

// a simple anonymouse function is given below
function(){
console.log("Hi, everyone");

// Important question-> how to execute code inside a simple anonymouse function, answer is that we use two parathesis (). Fisrst usded to wrap all the code inside it , like shown below:
(
function(){ 
console.log("Hi, everyone");  
)
// and second one is used to execute the code and we use it in this case like shown above:

(
function(){ 
console.log("Hi, everyone");  
}
)();
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// Recursive Function in JavaScript
// A recursive function in javascript is such a function that calls itself, examples are given below

function countDown(num){
console.log(num)
num--;
if(num>=0){
countDown(num) 
}}
countDown(10);
// ---------------------------------------------------------------------
// JavaScript Constructor Function
// A Constructor Function in JavaScript is used to create objects

function Person(name, age) {
    this.name = name; 
    this.age = age; 
}

const person1 = new Person("Alice", 30); 
const person2 = new Person("Bob", 25);  

console.log(person1);
console.log(person2);
// ---------------------------------------------------------------------
// Prototype in JavaScript: Every object have an abilty to share its data to other objects and the process used for this data sharing is called prototype. Every object has hidden prototypes that enable a connection between the varius kind of objects for data sharing. Prototype are works like blueprint for other objects. 

function Persn(name){
this.name = name;
}
Persn.prototype.learnPrototype = function(){
return `Hello, my name is ${this.name} `;
}
const persn1 = new Persn("zohaib")
const persn2 = new Person("Bob");

console.log(persn1.learnPrototype())
console.log(persn2.learnPrototype())
// if we want to add values and properties in functions using prototype function method

function Person(name, age) {
    this.name = name; 
    this.age = age; 
}
Person.prototype.country = "Pakistan";
Person.prototype.gender = "Male";

const pers0n1 = new Person("zohaib", 18);
const pers0n2 = new Person("Hassan", 22);
console.log(person1);
console.log(pers0n2);

// result name: "Zohaib", age = 18;   and if we want to get the value of newly inserted prototype then we should call is specifically like pers0n1.country and pers0n2.country.
console.log(person1.country); //result = Pakistan
console.log(person1.gender); //result = Male  
// -------------------

//This one is also a part for the same above for better understanding
    function Persn(name, age){
            this.name = name;
            this.age = age;
            }
            Persn.prototype.tech = function(){
            return `Hello, my name is: ${this.name}  and my age is: ${this.age} `;
            }
            const person01 = new Persn("zohaib", 20)
            const person02 = new Persn("hassan", 22)

            // const person02 = new Person(20);

    console.log(persn1.tech())
    console.log(persn2.tech())

// ---------------------------------------------------------------------
// Object Destructing in JavaScript: Object Destructing in JavaScript is a feature that allow us to extract the properties of objects into variables. This can bes useful to asigining the properties of objects to variables in a single statement. 

const person = {
    fName: "Elon",
    lName: "Musk"
}

let {fName, lName} = person;
console.log(fName);  // result = Elon

// if we want to add proerties, like shown below "age"

let {fName, lName, age} = person; 
console.log(age);  // result = Undefined
// correct method to asign value into age variable,
let {fName, lName, age = 20} = person; 

console.log(age);  // result = 20

// ---------------------------------------------------------------------
// JavaScript Class: Classes are introduced in ES6 version of JavaScript. Classes are templates for crating objects.

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person('zohaib', 18)
const person2 = new Person('hassan', 20)
console.log(person1);
console.log(person2);
// -------------------------- Methods In Classes
// How to add Methods in Classes
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // add methods or function
    greet(){
        return "Hello ", this.name;
    }
}

const person1 = new Person('zohaib', 18)
const person2 = new Person('hassan', 20)
console.log(person1.greet());  // result will show the value of greet , mean "Hello, zohaib"

// ------------------- Add more methods in the classes



class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // add methods or function
    greet(){
        return "Hello ", this.name;
    }
    reversingName(changeName){
this.name  = changeName;
    }
}

const person1 = new Person('zohaib', 18)

person1.reversingName("Biba ni")
console.log(person1);  //  This will show the result "Biba ni"







//  3)Try and Catch
