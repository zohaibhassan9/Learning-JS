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
// --------------------------------------------------------
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
// -------------------------------------------------------------
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
// -------------------------------------------------------------------
// Data Types in JavScript ->Datatypes are of two types! 1 is 'Premitive' >Number, Boolian, String, Null, Undefined, BigInt, Symbol  and another is 'Non-Primitive or Reference Type' > Oblects, Arrays and functions. 
 
// Functions is the type of 'objects' tha is used to exeute code.
// Objects are used to store different type of data.
// Arrays are used to store different values.  
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
console.log('Hello, Conditiobal Staement');
}
// vice versa, in this condition nothing is printed in console tab
if(false){
console.log('Hello, Conditiobal Staement');
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
// Now we will discuss about 'If Else' Condition, because it is also a type of conditional statements
// 03077003231 Shabeer shb
//  2)Loops
 





//  3)Try and Catch

