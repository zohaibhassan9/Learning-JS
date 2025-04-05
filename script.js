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
// --------------- Methods In Classes
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

// ---------------- Add more methods in the classes



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

// ---------------------------------------------------------------------
// Getters and setters Mothods in Javascript: Getters and Setters are specific methods in javascript that allow us to control how properties are modified and accessed.

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // "Get" methods appling
    get greet(){
        return "Hello ", this.name;
    }

}

const person1 = new Person('zohaib', 18)
console.log(person1.greet);   //we apply the get method above with greet method, now we can call greet without parathesis '()'
// Setter Method

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
get greet(){
    return "Hello Setter ", this.name
}
set PetsonName(){
    return "Hey! ", this.name;
}

}

person1 = Person("Ali", 20)
person1.PetsonName("Abdullah")
console.log(person1); // Result => Hey! Abdullah

// -----------------------------------------------------------------
// JavaScript Class Inheritance: JavaScript Class Inheritance allows us to create a new class based on an existing class.
// Class inheritance in JavaScript is a mechanism that allows one class (called the child class) to inherit properties and methods from another class (called the parent class)
class Person{
constructor(name){
this.name = name;
}
greet(){
console.log("Hello", this.name); 
}
}
class Student extends Person{
}
const student1 = new Student("Peter")
student1.greet(); // result will be Hello, Peter.  = Student class take its pairents class properties because of Inheritance.
// -------- JavaScript Super Method: This Super Method is used to call the constructor and method of their parents classes.
class Person{
constructor(name){
this.name = name;
}
greet(){
console.log("Hello", this.name); 
}}
class Student extends Person{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
}
const student1 = new Student("Peter", "abc")
console.log(student1.name); // result = Peter
console.log(student1.breed); // result = abc
// ---------------------------------------------------------------
// Method or property overriding: If the parent class and child class has the same method or property name. In this case, when we will call the method or property of an Object of the child class, It will override the method or property of the parent class. This is known as method overriding or shadowing method.

//----------------- Method overiding:
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello Person", this.name);
    }
}

class Student extends Person {
    greet() {
        console.log("Hello Student", this.name);
    }
}

const student1 = new Student("Peter");
student1.greet();
console.log(student1.name);

// -------------------Property overiding:
class Person {
    constructor(name) {
        this.name = name; // Property in the parent class
    }
}

class Student extends Person {
    constructor(name, grade) {
        super(name); // Call the parent class constructor
        this.name = "Student " + name; // Override the 'name' property
        this.grade = grade; // New property specific to Student
    }
}

const student1 = new Student("Peter", "A");
console.log(student1.name); // Output: Student Peter (overridden in Student class)
console.log(student1.grade); // Output: A (specific to Student class)

const person1 = new Person("John");
console.log(person1.name); // Output: John (from the parent class)

// ---------------------------------------------------------------------------

// JavaScript Static Method : JavaScript Static Method bound to a class, not to the instance of that class. You cannot call a static method on an object, it can be called on the classes.


// Syntax
class ClassName {
    static greet() {
      // Method logic here
    }
  }
  
  // Call the static method directly on the class
  ClassName.greet();
  
//   Example: Static Methods vs Instance Methods
class Person {
    constructor(name) {
      this.name = name; // Instance property
    }
  
    greet() {
      console.log(`Hello, ${this.name}`); // Instance method
    }
  
    static describe() {
      console.log("This is a Person class."); // Static method
    }
  }
  
  const person1 = new Person("Alice");
  
  // Calling instance method
  person1.greet(); // Output: Hello, Alice
  
  // Calling static method
  Person.describe(); // Output: This is a Person class
  
  // Attempting to call a static method on an instance (ERROR)
  try {
    person1.describe(); // Error: person1.describe is not a function
  } catch (e) {
    console.log(e.message);
  }
  
  // ----------------------------------------------------------------------------
// JavScript Private Method
class Person{
    constructor(fName, lName){
        this.fName = fName;
        this.lName = lName;
    }

#fullName(){
    return this.fName +" "+ this.lName; 
}
}

const person1 = new Person("Zohaib", "Hassan")
console.log(person1.fname); // we get an error, because we are studies about private methods(that default use '#' this shows that thsi method is private) in JS.

// so the solution of thei private method and resolve the error then we need another method and we passed or call the private method inside it using 'this' Term.

class Person{
    constructor(fName, lName){
        this.fName = fName;
        this.lName = lName;
    }

#fullName(x){
    return x.fName +" "+ x.lName; 
}

display(){
console.log(this.#fullName(this));

}
}

const person1 = new Person("Zohaib", "Hassan")
person1.display(); //  Finally get the execution

// ---------------------------------------------------------------------
// Private Static Method: if we use the above example then only changes we need to showcase that it is Private Static Method, then we use keyword 'Static' with private method


class Person{
    constructor(fName, lName){
        this.fName = fName;
        this.lName = lName;
    }

static #fullName(x){
    return x.fName +" "+ x.lName; // keep in mind, if we use private method then we must should add an augument to this method
}

display() {
    console.log(Person.#fullName(this)); // Call the private static method with the current instance
}
}

const person1 = new Person("Zohaib", "Hassan")
person1.display(); //  Finally get the execution

// -------------------------------------------------------------
// DOM: Document Objective Model is an API for manipulating HTML document.
// DOM provdes functions that allosws us to add, remove and modify the parts of the document effectively.
// /getElementById method


// Event Bubbling: Event starts at the most specific elemnt and flows towards least specific element .
// Event Capturing: Event starts at the least specific elemnt and flows towards most specific element .
// Event handler: is a piece od code that will be executed when the event occurs. Event Handler is also known as Event Listener.

// HTML EVENT HANDLER ATTRIBUTES
<div id= "container">
<button type= "button" onclick = "console.log('Button Clicked!')">Click Here!</button>
</div>
// lot of methods are avalable to better understand abot onlick enent handler, a one is given below

{/* <div id= "container">
<button type= "button" onclick = "displayName()">Click Here!</button>
</div>
//lot of methods are avalable to better understand about onlick enent handler, a one is given below


<script>
function displayName(){
    console.log("Button Clicked through the reference of this function");
}
</script> */}
// we can pass "event tab" in the console 
<div id= "container">
<button type= "button" onclick = "console.log('event')">Click Here!</button>
</div>

// ---------------------------------------------------------------

// Add Event Listner & Remove Event Listner: This both methods are used to add or remove events in the programme.

// Syntax for the addEventListner:-
addEventListner(evnt, function, useCapture)  //  The Third method is not important because it false by default. this useCapture is a boolian value that excepts true or false


<div>
<button type= "button" id ="btn" onclick = "console.log('event')">Click Here!</button>
</div>

let btn = Document.getElementById('btn');
btn.addEventListner('click', function(){
    console.log("Successfully adding event listner on btn");
    
})
// ---------------------------------------------------------------

// we can siparately do this tasks as well, mean calling the function or 
let btn = Document.getElementById('btn');

function addeventlistner() {
console.log("Successfully adding event listner on btn");}
btn.addEventListner('click', addeventlistner);














///////////////Eloquent JavaScript
function printFarmInventory(cows, chickens){

let cowString = String(cows);
while(cowString.length < 3){
    cowString = "0" + cowString;
}
console.log(`${cowString} Cows`)

let chickenString = String(chickens);
while(chickenString.length < 3){
    chickenString = "0" + chickenString;
}
console.log(`${chickenString} Chickens`)
}

printFarmInventory(7, 11);







/////////////////// simple function
let sumFunction = function(a, b){

    let sum = a + b;
    return sum;
};
sumFunction(10, 20);

//anoher simple function
function f(a, b){
   let sum = a +b;
   return sum;
};
f(10, 20);


//////////////////// Immediately Invoked Function Expression (IIFE)
const result = (function (a, b){
    let sum = a + b;
    return sum;
})(10, 20);
console.log(result);


////////////////////// Functions Within Functions
function createFunction(){
function f(a, b){
    let sum = a + b;
    return sum;
}
return f;
};

const f  = craeteFunction(20, 30);
console.log(f(20, 30));

/////////////////////// Function Hosting
function createFunction(){
    return f;
function f(a, b){
let sum = a + b;
return sum;
}
};

const f = createFunction()
console.log(f(10, 20));

/////////////////////////// Clourses in javascript
function clousreInviroment(a){

function lexicalFunction(b){
    let sum  = a + b;
    return sum;
}
return lexicalFunction;
};

const lexicalFunction = clousreInviroment(10);
console.log(lexicalFunction(20));

// Arrow function
const arrowFunction = (a, b) => {
    let sum = a + b;
    return sum;
}
arrowFunction(10, 20);

//////////////////// omit return to make a arrow function
const arrowFunction = (a, b) => a + b;
arrowFunction(10, 20);

// Spread Oprator or Rest opator
function spreadOprator(a, b){
    return a+b;
    }
    const restOprator =  ["abc", "bvcd"]
    console.log(spreadOprator.apply(null, restOprator ));
    //////////////////////////  mixing 
function spreadOprator(a, b){
return a+b;
}
const restOprator =  ["abc", "bvcd"]
console.log(spreadOprator(...restOprator ));

//////////////////////  ANOTHER mixing 
function createGreeting(greeting){
return function(...args){
if (args.length > 0){
    return  `${greeting},  ${args.join(' ')}!`;
}
return `${greeting}, world!`

};

}
const greet = createGreeting('Hello');
console.log(greet());











// leet code problems
// Is Object empety?
// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

const isEmpty = function(obj){
// method 1
return Object.keys(obj).length === 0;
// method 2
if(Object.keys(obj).length == 0){
    return true;
}
else{
return false;
}

// method three
let count = 0;
for(key in obj){
    count++;
}
if(!count) return true;
else false;

};


// Chunk array
// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.
const chunkArray = function(arr, size){
let result = [];
for (let i = 0; i < arr.lenght; i += size){
    result.push(arr.slice(i, i + size));
}
return result;
};


// Array Prototype Last
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
// You may assume the array is the output of JSON.parse

Array.prototype.last = function (){
// method 1 for the problem
return this.length > 0 ? this[this.length -1] : -1;
// method 2 for the problem

if (this.length === 0){
    return -1;
}
else{
    return this[this.length - 1];
}

}

// Sort By Problem
// Given an array arr and a function fn, return a sorted array sortedArr.
// You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
// sortedArr must be sorted in ascending order by fn output.
// You may assume that fn will never duplicate numbers for a given array.
const sortArray = function(){
return((a, b) => {
return (fn(a) > fn(b)? 1:-1)
})
};

// 2nd method for the problem
const sortArray = function(){
retun ((a, b) => {
return fn(a)-fn(b);
})    
}


/////////////////// ProtoType In JavaScript/////////////////////
// In JavaScript, prototype is a way to share methods and properties among all instances of a constructor function.
function Person(name) {
this.name = name;
}
  
  Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const john = new Person("John");
  john.greet(); // Output: Hello, my name is John
  

//////////////////javascript classes Constructor functions///////////////////
class Animal {
constructor(name) {
this.name = name;
}

speak() {
console.log(`${this.name}, Berks`);
}
}

const dog = new Animal("Dog");
dog.speak();

////////////// Class Inheritance ////////////
class Animal{
 constructor(name)
        {
          this.name = name;  
        }
    
    speak(){
    console.log(`${this.name}, berks and make a noise`)
    }   
    }
    
    class Dog extends Animal{
    constructor(name, breed){
        super(name);
    this.breed= breed;
        
    }
    speak(){
    console.log(`${this.name}, Berks`);
    }
    }
    
    const dog = new Dog('Jaguar');
    dog.speak();

    console.log(dog instanceof Dog); //true
    console.log(dog instanceof Animal); //true

    //////////////////OPP javscript Encapsulation method/////////////////////

    class BankAccount {

        #balance;
            
            constructor(initialBalance){
                this.#balance = initialBalance;
            }
        
        
            deposit(amount){
        
                if (amount > 0){
                    this.#balance += amount;
                    console.log(`Deposited: $${amount}`)
                    
                }
            }
        
        withdraw(amount){
        if(amount < this.#balance){
           console.log('Funds are insuficent');
        return;
        }
            this.#balance -= amount;
            console.log(`Widhdrawal: $${amount}`)
        }
        
        getBalance(){
            return `your balance is $${this.#balance}`;
        }   
        };
        
        const cash = new BankAccount(30000);
        cash.deposit(1000);
        cash.withdraw(2000);
        
        console.log(cash.getBalance());


        class Bank Account{
           
      #balance;
      constructor(balance){




      }

        }


//////////////////////Abstract Classes (Simulated in JS, No Direct Support)/////////////////
        class Appliance {

            constructor(){
            if(new.target === Appliance)
            {throw new Error(console.log('Cannot Proceedd'));
            }
            }
            
            fanOn(){
            
                console.log('Fan is onlines');
            }
            }
            
            class Fan extends Appliance {
            
                fanOn(){
                    console.log('Fan is going to offline when there is no electricity');
                }
            }
            
            const pankha = new Fan();
            pankha.fanOn();

////////////// Abstraction Using Factory Functions //////////////
function createPerson(name, age) {
    let _age = age;

    return {
        getName: () => name,
        getAge: () => _age,
        setAge: (newAge) => {
            if (newAge > 0) _age = newAge;
        }
    };
}

const person = createPerson("John", 25);
console.log(person.getName()); // ✅ John
console.log(person.getAge());  // ✅ 25
person.setAge(30);
console.log(person.getAge());  // ✅ 30

// console.log(person._age); // ❌ Undefined (Cannot access private variable)


///////////////Factory Function//////////////

        function humanMeaning(name, age){
        return {
        name,
        age,
        orignalHuman(){
        console.log(`This person belongs tu humainty and his name is ${this.name} and his age are ${this.age}.`);
        },
        }
        }
        const Person = new humanMeaning('Zohaib', 23);
        Person.orignalHuman();

///////////////////Factory Function with shared methods/////////////////
const personMethods = {
greet(){
console.log(`My name is ${this.name} andm my age are ${this.age}`);
}
}

function createPerson(name, age){
const person = Object.create(personMethods); // Prototype-based delegation
person.name = name;
person.age = age;
return person;

}

const person = createPerson('xohaiv', 23);
const person1 = createPerson('vohaib', 40);

person.greet();
person2.greet();


/////////////////Learning JS OOP Concepts////////////////
// Inheritance:
// when objects of child elements requires all properties and behaviours of parent object,
// then this phenomenon known as Inheritance in Objec Oriented Programming of JavScript
class Car {
constructor(model, year){
this.model = model;
this.year = year;
}

displayShow(){
    console.log(`Model: ${this.model}, Year: ${this.year} `)
}
};

const carShow = new Car('Camry', 2020);
carShow.displayShow();

///////////// Polymorphism (Method Overriding) /////////////
//polymorphism also known as method(objects) overiding in JavaScript OOP. 
class Animal {

    makeSound(){
        console.log('Dogs are burking');
        
    }
}


class Cat extends Animal{

makeSound(){
    console.log('Miao Miao');
    
}
}

class Dinosaour extends Animal{

    makeSound(){

        console.log('Dinosour day');
        
    }
}


const animals = [new Animal(), new Cat(), new Dinosaour()];
animals.forEach(animal => animal.makeSound());

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////// DATA Strutures and Alghorithm////////////////////


////////////////stack
/class Stack{
    constructor(){
        this.item = []; 
    }

//add yani push
push(element){
    this.item.push(element);
}

pop(){
return this.isEmpty()? "Stack is empety!" : this.item.pop();
}

peek(){
if(this.isEmpty())
return 'STACK IS EMPETY!';
return this.item[this.item.length-1];
}

isEmpty(){
    return this.item.length === 0;
}
size(){

    return this.item.length;
}
}

const stack = new Stack();
stack.push(10);
stack.pop(20);
console.log('Removed', stack.peek());
console.log("Removed:", stack.pop());
console.log("Stack size:", stack.size());
console.log("Is stack empty?", stack.isEmpty());


///// Node Class > Linkedlist, HOW to create a single node list:
class Node{

    constructor(data){
    
        this.data = data;
        this.next = null
    }    
    };
        const node1 = new Node(10);
        console.log(node1);

        //if we want to ceate a next node or link first node to the second node , then
        const node1 = new Node(10);
        const node2 = new Node(20);
        node1.next  = node2;
        console.log(node1);

        /////////////Data Structure//////////
        // A Data Structure is a specialized format for organizing, managing, and storing data efficiently
        // Data Structire is a systematic way to organise data so that it can be used effciently.

        //Dictionary Information
        // The quantities , symbols , or charcater on which oprations are performed by a computer and which may be converted and transmitted into electrical signals.
        // example c = a + b;
        
        // Data: YM EMAN SI BIAHOZ  (just collection of characters)
        // Information: MT NAME IS ZOHAIB. (actual Information);



        //////////// Arrays, insted of vars to stora and organise data/////////////////
        // Insted of creating multiple var for storing data of same type, why not create an array to store a data
        


        ///////////Data Types vs. Abstract Data Types/////////////
// Data type tell us the kind of value of a variable can and the oprations that can be performed on it.
// primitive data types: Number, noolian , string, undeifned , null === non-primitive data type: object, array, function, Sey, Map(OPRATIONS > Arthematic and Assignment Oprators)

//Abstract Data Types (OPRATIONS > INSERT, DELETE, SEACRH, SORT)
// It is a highlevel concept of data structure that defines how to organise data and which actions or oprations are allowed.
//Stack(LIFO)
//List(ordered collection of elements)
//queue(FIFO), Deque
//Graph, Tree, Hash Table
code:
class Stack {
    constructor() {
      this.items = [];
    }
    // ADT Operation: Push (Add element)
    push(element) {
      this.items.push(element);
    }
    // ADT Operation: Pop (Remove top element)
    pop() {
      if (this.isEmpty()) return "Stack is empty";
      return this.items.pop();
    }
    // ADT Operation: Peek (View top element)
    peek() {
      return this.isEmpty() ? "Stack is empty" : this.items[this.items.length - 1];
    }
    // Check if stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  }
  // Using Stack ADT
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  console.log(stack.peek()); // 20
  stack.pop();
  console.log(stack.peek()); // 10
  


  ////////////////////  LINKED LIST  ///////////////////
  A linked list is a linear data structure where elements (nodes) are stored dynamically.
  Linked List is nothing but sequence of nodes conneccted with eachother.

    class List{
    constructor(data){
    this.head = {
    value: data,
    next: null
    };
    this.tail = this.head;
    }

    //adding a newNode next to the previus one
    appenNode(nodeData){
        let newNode = {
        value : nodeData,
        next : null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    }
    }
    const newNodes= new List(20);
    console.log('New Nodes:', JSON.stringify(newNodes, null, 2));
    // JSON.stringify(object, replacer, space)

////////////////////////////////////////////////////////////////////////////////////////////////////////
//Understanding the Void Pointers//
// A void pointer (void*) is a generic pointer that can point to any data type.
// Void pointers, Void mean undefined in 'C' and 'C++', And in JavaScript it means to////
// C, C++, and JavaScript void Ponters//
///(using undefined)////
function examle(){
    return undefined;
};
const ptr = example();
console.log(ptr);  //Undefined

/// Using Javscript Dynamically Typing//
let ptr;   

ptr = 45;
console.log(ptr);  //45
ptr == 'Hello';

console.log(ptr); //Hello

ptr = ={name: "Alice"};
console.log(ptr); //Alice


////Using Javascript Null method///

let ptr = null;
if(ptr === null){
    console.log('Pointer is empety!');   //Pointer is empety!.
}; 
//////////////////////////////////////////////////////////////////////////////////////
///Understanding the Null Pointers/////
Null pointers in C,C++, and JavScript are those pointers that does not point to a valid memory location.

let ptr = null;
if(ptr === null){
    console.log('Pointer is empety!');   //Pointer is empety!.
}; 


//////////////////////////////////////////////////////////////////////////////////////
///// C, C++, and JavaScript DANGLING Ponters/////
// A dangling pointer is a pointer that still ponits to a memory location that has been freed or deallocated or points to non-existing memory location.
// Accessing a dangling pointer is taugh because its behaviur are like undefned type and made errors or programme crusehes. 


//Havscript:
let obj = { name: "Alice" };
console.log(obj.name); // Alice

obj = null; // Object is now inaccessible (like free/delete in C++)
console.log(obj.name); // ERROR: Cannot read property 'name' of null

// before accesing in garbage collection memory, please always check that it will not null or defined.
let obj = {name: "Ali"};
if(!obj == null){
    console.log(obj.name);
};
 
//////////////////////////////////////////////////////////////////////////////////////
// WILD POINTER
// A wild pointer is a poinnter that has not been initilized , meaning it points to a random memory location.
// Like Dangling ponter , if we try to access sild pointer is taugh because its behaviur is undefined type, and make erros and crushes in the the Programme.

// Example 1: Uninitialized Pointer (Wild Pointer)
int main(){
    int *ptr;
    printf('%d', *ptr);

    return 0;
}

Solution Example1: Aways initialized pointers
int main(){
    int a = 10;
    int *ptr = &a;
//(or *ptr = NULL)
    printf('%d', *ptr);
    return 0;
};

// Example 2: Pointer After free()

int main(){
    int *ptr = (int *)malloc(sizeof(int));
   *ptr = 50;
   free(ptr);
    printf('%d', *ptr); // ❌ ERROR: Wild Pointer (Using freed memory)

    return 0;
}

// it solution is to use Null
int main(){
    int *ptr = (int *)malloc(sizeof(int));
   *ptr = 50;
   free(ptr);
   ptr = NULL; //Now it is save
    printf('%d', *ptr); 

    return 0;
}

//////////////////////////////////////////////////////////////////////////////////////
/////// Linked List, Singly Linked List///////
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
constructor(data){
this.head = new Node(data);
this.tail = this.head;

} 

appendNode(nodeData){
const newNode = new Node(nodeData);
    this.tail.next = newNode;
    this.tail = newNode;
    
}

display(){
let current = this.head;
let elements = [];
    while(current){
    elements.push(current.data);
    current = current.next;
    }
    console.log(elements.join("->"));
  }  
}
const newLinkedList = new LinkedList(20);
newLinkedList.appendNode(20);
newLinkedList.appendNode(30);
newLinkedList.appendNode(40);


newLinkedList.display();



//////////////////////////////////////////////////////////////////////////////////////
/////// Linked List, Doubly Linked List///////

class Node{

constructor(data){
this.value = data;
this.next = null;
this.prev= null;
}
}

class DoublyLinkedList{
constructor(data){
    const newNode = new Node(data)
    this.head = newNode;
    this.tail = newNode;
}

appendNode(nodeData){
const newNode = new Node(nodeData);
newNode.prev = this.tail;
this.tail.next = newNode;
this.tail = newNode;
}



displayForward(){
let current = this.head;
let elements = [];
while(current){
elements.push(current.value);
current = current.next;
}
console.log(elements.join(' -> '));
}


displayBackward(){
let current = this.tail;
let elements = [];
while(current){
elements.push(current.value);
current = current.prev;
}
console.log(elements.join(' -> '))
}

 }



const newDoublyNode = new DoublyLinkedList(20);

newDoublyNode.appendNode(30);
newDoublyNode.appendNode(40);
newDoublyNode.appendNode(50);
newDoublyNode.appendNode(60);
newDoublyNode.appendNode(70);



newDoublyNode.displayForward()
newDoublyNode.displayBackward()




//////////////////////////////////////////////////////////////////////////////////////
/////// Linked List, Circular Singly Linked List///////
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class CircularSinglyLinkedList{
constructor(data){
const newNode = new Node(data);
this.head = newNode;
this.tail = newNode;
this.tail.next = this.head;
}

appendNode(nodeData){
    const newNode = new Node(nodeData);
    this.head = newNode;
    this.tail = newNode;
    this.tail.next = this.head;
}

displayCircularSinglyLinkedList(){

    if (!this.head) return console.log('List are empety')
    let current = this.head;
    let elements = [];
    do{
        elements.push(current.value);
        current = current.next;
    }
    while(current !==this.head)

console.log('Circular List', elements.join('->'))

}
}

const newList = new CircularSinglyLinkedList(20);

newList.appendNode(30);
newList.appendNode(40);
newList.appendNode(50);
newList.appendNode(60);
newList.appendNode(70);

newList.displayCircularSinglyLinkedList();



////////////////////////////////////////////////////////////////////////////////////////////////////////
///////QUEUE with  a Array, DSA//////

class Queue{

    constructor(){
        this.queue = [];
    }
    

    enqueue(element){
    this.queue.push(element);
    }
    
    
    dequeue(){
     if(this.isEmpty()) return 'Queue is empety';
      return this.queue.shift();   
        }
    
    peek(){
        if(this.isEmpty) return 'Queue is empety'
        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    
    size(){
    
       return this.queue.length;
    }
    
    display(){
        return this.queue.join("->");
    }
        
        }
    
    const newQueue = new Queue();
    newQueue.enqueue(20);
    newQueue.enqueue(40);
    newQueue.enqueue(50);
    newQueue.enqueue(30);
    
    
newQueue.display();
console.log("FrontElement", newQueue.peek());
console.log("Dequeue is removed", newQueue.dequeue())
newQueue.display();


////////////////////////////////////////////////////////////////////////////////////////////////////////
///////QUEUE with  a LinkedList, DSA//////

class Node{
constructor(data){
this.value = data;
this.next = null;
}
}


class Queue{
constructor(){
this.front = null;
this.rear = null:
this.size = 0;
}

enqueue(nodeData){
const newNode  = new Node(nodeData);
if(!this.front){
this.front = this.rear = newNode;
}
else{
    this.rear.next = newNode;
    this.rear = newNode;
}
this.size++;
}

dequeue(){
if(!this.isEmpty()) return "Queue list are empty!";
let removeItem = this.front.value;
this.front = this.front.next;
if(!this.front) this.rear = null;
this.size--;
return removeItem;
}

peek(){
 if(!this.isEmpty()) return "Queue list are empty!";
return this.front.value;
}

isEmpty(){
return this.size === 0;
}

getSize(){
    return this.size;
}

display(){
let current = this.front;
let elements = [];

while(current){
    elements.push()
}

}


}


////////////////////////////////////////////////////////////////////////////////////////////////////////
///////DEQUEUE with an Array, DSA//////

methods:
insertFront (unshift(add-front))
removeFront (shift(remove-front))

insertRear (push(add-end))
removeRear (pop(remove-end))

peekFront (return this.dequeue[0])
peekRear (return this.dequeue[this.dequeue.length - 1])

isEmpty (return this.dequeue.length === 0)
size (return this.dequeue.length)


display ("Dequeue", this.dequeue.join('-> also <-'))

////////////////////////////////////////////////////////////////////////////////////////////////////////
///////DEQUEUE with a LinkedList, DSA//////





































////////////////////////////////////////////////////////////////////////////////////////////////////////
///////Non-Linior Data-Structures, DSA//////

///////////TREES/////////
// Tree data structure is a hierarchical structure that is used to represent and organize data in the form of parent child relationship.
// The following are some real world situations which are naturally a tree.
// Folder structure in an operating system.
// Tag structure in an HTML (root tag the as html tag) or XML document.

// A Tree is a hirearchical Data Structure which concists on two things:
// 1: nodes
// 2: Edges

// Reaal-life example related to hierarchy in trees data structure

        //          CEO
        //         /   \
        //  Manager1    Manager2
        //         /    \
        //  Employee1  Employee2

////////Types of Trees////////
// 1: Binary Tree 
// 2: Binary Seacrh Tree

// ✅ Binary Tree is a tree where each node contains ay least two childrens(left and right).

//                  10
//                 /  \
//               5     20
//             / \    / \
//            3   7   15  25


// ✅ Binary Search Tree is a tree where its Left child is smaller than the parent..
// and its Right child is larger than the parent.

//                  40
//                 /  \
//               5     20
//             / \     / \
//            3   1   12  15



// Why Tree is considered a non-linear data structure?
// ANS: Beacuse the data stored in a tree in non-sequential manner or order, e.g. mean the data are not stored linealy
// **One reason to use trees might be because you want to store information that naturally forms a hierarchy.
// (mean: data ki darja bandi k liy istimall karty hai(hierarchy))


class Node{
    constructor(data){
        this.data = data;
          this.left = null;
        this.right = null;
    }
}

class BinaryTree{

    constructor(){
        this.root = null;

    }




insert(nodeData){
const newNode = new Node(nodeData);
if (this.root === null){
    this.root = newNode;
}
    else{
        this.insertNode(this.root, newNode)
    }
    
}

insertNode(node, newNode){
if (newNode.data < node.data){

if (node.left === null){
    node.left = newNode;
}
    else{
        this.insertNode(node.left, newNode)
        }
}
    

    else if(newNode.data > node.data){
        if (node.right === null) {
        node.right = newNode;
    }
    else{
        this.insertNode(node.right, newNode)
    }
}
}


inOrder(node = this.root){
if(node !==null){
this.inOrder(node.left)
console.log(node.data)
this.inOrder(node.right)
}    
}

preOrder(node = this.root){
if(node !== null){
console.log(node.data)
this.preOrder(node.left)
this.preOrder(node.right)
}
}



postOrder(node = this.root){
if(node !== null){
this.postOrder(node.left);
this.postOrder(node.right);
console.log(node.data)
}
}
search(data){
    return this.searchNode(this.root, data)
}


searchNode(node, data){

if(node === null) return false;
    if(data < node.data){
return this.searchNode(node.left, data) 
    }
    else if(data > node.data){

        return this.searchNode(node.right, data)
    }
    else{
        return true;
}
}


height(node = this.root){
if(node === null) return -1;
    
let leftHeight = this.height(node.left)
    let rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) +1 ;

}
}



const newTree = new BinaryTree();


newTree.insert(29);
newTree.insert(9);
newTree.insert(2);
newTree.insert(1);
newTree.insert(22);
newTree.insert(4);
newTree.insert(12);


console.log('Inorder trivarsal')
newTree.inOrder();

console.log('preOrder trivarsal')
newTree.preOrder();

console.log('postOrder trivarsal')
newTree.postOrder();

newTree.search(10)
newTree.height();


////////What is an AVL Trees////////
// *A Binary Search Tree is in balance when the difference in height between left and right subtrees is less than 2
// *An AVL Tree is a Binary Search Tree (BST) with an additional constraint: for every node in the tree,
// the height difference between the left and right subtrees (also known as the balance factor) must be -1, 0, or 1
// AVL Tree Properties:
// The balance factor for each node should be in the range of -1 to 1.
// If the balance factor is less than -1 or greater than 1, the tree will perform a rotation (left or right) to maintain balance.

/////////////////when to use AVL/////////////////
//  i) when frequent use of searching, ii) when balancig of tree is important
// iii) when insertion & delations are not too frequent


////////////////Summary of Rotations Needed/////////////////
// Case	Condition	                              Rotation Needed
// LL	Inserted in left subtree of left child	 || Right Rotation
// RR	Inserted in right subtree of right child || Left Rotation
// LR	Inserted in right subtree of left child  ||	Left Rotation → Right Rotation
// RL	Inserted in left subtree of right child  || Right Rotation → Left Rotation


//Left Rotation (on a node) makes its right child the new parent of that node.
//Right Rotation (on a node) makes its left child the new parent of that node.

//Matering AVL Trees


////////////////////////////////////////////////////////////////////////////////////
////////////Red Black Tree ///////////////////////
// Conceptual Transition: Key Differences

// AVL Tree Balancing
// AVL trees maintain a balance factor of -1, 0, or 1 (difference in height of left and right subtrees).
// If the balance factor becomes >1 or <-1, rotations are performed.


// RBT Balancing Rules
// Red-Black Trees maintain balance with color properties instead of strict height balancing:
// Every node is either Red or Black.
// The root is always Black.
// No two red nodes can be adjacent (a red node cannot have a red parent).
// New nodes are always inserted as Red.


Summary: Transitioning from AVL to RBT
// AVL trees enforce strict balance, making them faster for search but slower for insertion/deletion.
// RBTs allow some imbalance but improve performance for insertions and deletions.


class RedBlackTree{

constructor(){

    this.root = null;
}

insert(nodeData){
const newNode = new Node(nodeData)
if(this.node === null){
newNode.color = "BLACK";
this.root = newNode
}
else{
    let insertedNode = this.insertNode(this.root, newNode);
    this.fixInsertion(insertedNode);
}
}

insertNode(root, node){
if(node.data < root.data){
    if(root.left === null){
root.left = node;
node.parent = root;
}

else{
    return this.insertNode(root.left, node)
}
}


else {
if(root.right === null){
root.right = node;
node.parent = root;
}
else{
    return this.insertNode(root.right, node)
}
}
return node;
}



fixInsertion(node){
    while(node.parent && node.parent.color === 'RED') {
    let grandparent = node.parent.parent ;
        if(node.parent === grandparent.left){
    let uncle = grandparent.right;
            if(uncle && uncle.color === 'RED'){
    node.parent.color = 'BLACK'; 
           uncle.color ='BLACK';
                grandparent.color ='RED';
                node = grandparent
                
    }
            else{
                if(node === node.parent.right){
                    node = node.parent;
                    this._rotateLeft(node)
                }
                node.parent.color = 'BLACK';
                grandparent.color = 'RED';
             this.rotateRight(grandparent)
            }
    
            else{
    
                let uncle = grandparent.left;
            if(uncle && uncle.color === 'RED'){
    node.parent.color = 'Black';
                grandparent.color = 'RED';
                    uncle.color = 'BLACK';
    
                node = grandparent;
                
            }
            else{
                if(node === node.parent.left)
                    node = node.parent 
            this.rotateRight(node)        
            }
            node.parent.color = 'RED';
            grandparent.color = 'BLACK';
        this._rotateLeft(grandparent)    
        }
        }
        
    }
    
    this.root.color = 'BLACK';
 }






}
























// 🔄 Understanding Rotations in Red-Black Trees
// A rotation is a way to rearrange nodes in a binary tree to keep it balanced.
// Left Rotation: When the right child takes the place of its parent.
// Right Rotation: When the left child takes the place of its parent.




/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// DELETE A NODE ///////// RED BALCK TREE ///////


_deleteNode(node){
    let originalColor = node.color;
    let replacement;
    
    if(node.left === null){
    replacement = node.right;
    this.transplant(node, node.right)
    }
    else if(node.right === null){
    replacement = node.left;
    this.transplant(node, node.left)
    }
    else{
    let successor = this.minimum(node.right);
    orignaColor = successor.color;
    replacement = successor.right
    }
    
    if(successor.parent === node){
    if(replacement) replacement.parent = successor;
    }
    else{
    this.transplant(successor, successor.right);
    successor.right = node.right;
    if(successor.right) successor.right.parent = successor;
    }
    
    this.transplant(node, successor);
    successor.left = node.left;
    if(successor.left) successor.left.parent = successor;
    
    successor.color = node.color;
    }
    
    if(originalColor === BLACK) this.fixDeletion(replacement)
    
    }


transplant(u,v){
if(!u.parent){
this.root= v;
}
else if(u === u.parent.left){
u.parent.left = v;
}
else{
u.parent.right = v;
}
if(v) v.parent = u.parent;
}









/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// Algorithm Defination ///////// Algorithms Topics & methods ///////
// A algorithm is a step-by-step procedure for solving a problem or accomplishing a task.

// what is the need for Algorithm
// Algorithms are used to solve the complex computational tasks efficiently and effectively.
