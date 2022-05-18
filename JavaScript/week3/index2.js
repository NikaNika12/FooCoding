1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length)
myString = myString.replace(/,/g, " ")
console.log(myString)
2
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals[3] = 'turtle';
console.log(favoriteAnimals);
favoriteAnimals.splice (1, 0, 'meerkat');
console.log(`The new value of array is: ${favoriteAnimals}`);
console.log(favoriteAnimals)
console.log(`The array has a length of: ${favoriteAnimals.length}`);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log(`'The item you are looking for is at index: ${favoriteAnimals.indexOf("meerkat")}'`);

/*More JavaScript*/
1
function sum(one, two, three) {
  return one + two + three;
}
console.log(sum(1, 11, 7));
2
function colorCar(color) {
  console.log("a " + color + " car");
}
colorCar("red");
3
let getMessage = {
  text: "Hello", 
  name: 'Vasya',
  age: '19',
  color: 'brown'};
for (let prop in getMessage) {
  console.log ("get." + prop + " = " + getMessage[prop])
};
4
function vehicleType(color, type) {
  let vehicle = "";
  switch (type) {
    case 1: vehicle = "car";
    break;
    case 2: vehicle = "motorbike";
    break;
    default: vehicle = "";
  }
  console.log("a " + color + " " + vehicle);
}
vehicleType("blue", 2);
5
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}
console.log((3 === 3) ? "true": "false");
6
/*function vehicle(color, type, age) {
  let vehicleType = "";
  switch (type) {
    case 1: vehicleType = "car";
    break;
    case 2: vehicleType = "motorbike";
    break;
    default: vehicleType = "";
  }
  console.log("a " + color + " used " + " " + vehicleType);
}
vehicle("blue", 1, 5);*/
7
/*function vehicle(color, type, age) {
  let VehicleType = "", VehicleAge = "";
  switch (type) {
    case 1: VehicleType = "car";
    break;
    case 2: VehicleType = "motorbike";
    break;
    default: VehicleType = "";
  }
  switch (age) {
    case 1: VehicleAge = "new";
    break;
    case 2: VehicleAge = "used";
    break;
    default: VehicleAge = "";
  }
  console.log("a " + color + " " + VehicleAge + " " + VehicleType);
}
vehicle("blue", 2, 1);*/
8
let listOfVehicles = ["car", "motorbike", "caravan", "bike"];
let removed = listOfVehicles.splice(2,1);
console.log(removed)
console.log(listOfVehicles)

let vehicles = ["car", "motorbike", "caravan", "bike"];
vehicles[2];

9
function vehicle(color, type, age) {
  let vehicleType = "";
  switch (type) {
    case 1: vehicleType = "car";
    break;
    case 2: vehicleType = "motorbike";
    break;
    case 3: vehicleType = "bike";
    break;
    case 4: vehicleType = "caravan";
    break;
    default: vehicleType = "";
  }
  console.log("a " + color + " new " + " " + vehicleType);
}
vehicle("green", 3, 1);

function vehicleList(color, type, age) {
  type--;   
  let vehicles = ["car", "motorbike", "bike", "caravan"];
  let vehicleType = "", VehicleAge = "";
  if (type < vehicles.length && type >= 0) {
    vehicleType = vehicles[type];
  } else {
    vehicleType = "";
  }

  switch (age) {
    case 1: VehicleAge = "new";
    break;
    case 2: VehicleAge = "used";
    break;
    default: VehicleAge = "";
  }
  console.log("a " + color + " " + VehicleAge + " " + vehicleType);
}
vehicleList("green", 3, 1);
12
let object = {};
let object1 = new Object();
13
let teachers = {'Sahin', 'Seif', 'Claudiu'};
14
let teachers = {'Sahin', 'Seif', 'Claudiu'};
teachers['languages'] = "HTML, CSS, JS"
console.log(teachers.languages)
15
let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log(x == y); 
console.log(x === y); 
console.log(z == y);  
console.log(z == x);  
17
let bar = 42;
typeof typeof bar;
/*typeof typeof bar = typeof (typeof bar)
typeof bar = "number", typeof returns always "string"*/






