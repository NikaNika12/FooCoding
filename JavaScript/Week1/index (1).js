/*1*/
console.log('Hello, World!')
console.log('Привет, мир!')
console.log('Привіт, світ!')
/*2*/
console.log ("I'm awesome")
/*3*/
let x;
console.log("the value of my variable x will be: undefined");
console.log(x)
x = 11
console.log("the value of my variable x will be: 11");
console.log(x)
/*4*/
let y = "happy";
console.log("the value of my variable x will be: 'happy'");
console.log(y)
y = "joy";
console.log("the value of my variable x will be: 'joy'");
console.log(y)
/*5*/
let z = 7.25
console.log(z)
let a = Math.round(z)
console.log(a)

function biggervalue(value1, value2) {
  if (value1 > value2) {
    return value1;
  } else {
    return value2;
  }
};
let c = biggervalue (z, a);
console.log(c);
/*6*/
let colors
console.log("the value of my variable x will be: undefined");
console.log(colors)
let animals = ["lion", "wolf", "bear"]
console.log(animals)
animals[animals.length] = "baby pig";
console.log(animals);
/*7*/
let myString = "this is a test";
console.log(myString);
console.log(myString.length);
/*8*/
let foo1 =1;
//the type of my variable foo1 is: number;
console.log(typeof foo1);
//the value of my variable foo1 is: 1;
console.log(foo1);
let foo2 =2.1;
//the type of my variable foo1 is: number;
console.log(typeof foo2);
//the type of my variable foo1 is: 2.1;
console.log(foo2);
let foo3 = "great";
//the type of my variable foo1 is: string;
console.log(typeof foo3);
//the type of my variable foo1 is: 'great';
console.log(foo3);
let foo4 ={firstName:"Veronika", lastName:"Pastushkova", age:29, eyeColor:"blue"};
//the type of my variable foo1 is: object;
console.log(typeof foo4);
//the type of my variable foo1 is: firstName:"Veronika", lastName:"Pastushkova", age:29, eyeColor:"blue";
console.log(foo4);
function sameType(value1, value2) {
  if (typeof (value1) === typeof (value2)) {
    return 'SAMETYPE';
  } else {
    return 'DIFFERENTTYPE';
  }
};
console.log(sameType(foo1, foo2));

if (typeof (foo1) === typeof (foo2)) {
    console.log ('SAMETYPE');
  } else {
    console.log ('DIFFERENTTYPE');
  };
/*9*/
x = 7
x = x % 3;
console.log("The value of x/3=2.(3)");
console.log("The value of 2*3=6 and remains 7-6=1");
/*10*/
let client = ["Veronika", 29, true, null];
console.log(client[2])
let q = 6 / 0
let w = 10 / 0
console.log(q)
//the type of my variable foo1 is: Infinity;
console.log(typeof q);
//the value of my variable foo1 is: 'number';
console.log(w)
//the type of my variable foo1 is: Infinity;
console.log(typeof w);
//the value of my variable foo1 is: 'number';
if (q === w) {
    console.log ('SAMETYPE');
  } else {
    console.log ('DIFFERENTTYPE');
  };
6 / 0 === 10 / 0
//the result is true, type boolean




  
