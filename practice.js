

let animle = {eats: true};
let rabbit = {jumps: true};

// Let’s setting the prototype of animale with rabbit.
Object.setPrototypeOf(animle, rabbit);

console.log(rabbit.eats); //true
console.log(rabbit.__proto__ === animle); //true