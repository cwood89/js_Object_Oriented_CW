//Creating objects
// Using literal notation:

const myObject = {};

// Using the Object() constructor function:

const myObject = new Object(); // slower and more verbose/more than needed

// removing properties
delete obj.property;

let house = {
  color: 'green',
  numRooms: 4,
  numWindows: 8,
  forSale: false
};

// Write an expression to delete the numWindows property
delete house.numWindows; //returns true

// Write an expression to add a new hasGarage property to house. Set the value of the hasGarage property to true
house.hasGarage = true; // house['hasGarage']= true;

// when you pass an argument in a function it does not affect the variable outside the function
// primitive values are immutable
function changeToEight(n) {
  n = 8; // whatever n was, it is now 8... but only in this function!
}

let n = 7;

changeToEight(n); // n = 8

console.log(n); // will still be 7

// when you pass an object the original object will change
let originalObject = {
  favoriteColor: 'red'
};

function setToBlue(object) {
  object.favoriteColor = 'blue';
}

setToBlue(originalObject);

originalObject.favoriteColor; // is now blue

// the same rule applies when re-assigning an object to a new variable, and then changing that copy. Again, since objects are passed by reference, the original object is changed as well.
// passed by reference

const iceCreamOriginal = {
  Andrew: 3,
  Richard: 15
};

const iceCreamCopy = iceCreamOriginal;

iceCreamCopy.Richard; // 15
iceCreamCopy.Richard = 99;
iceCreamCopy.Richard; // 99
iceCreamOriginal.Richard; // 99

// Comparing objects
const parrot = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp chirp!');
  }
};

const pigeon = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp chirp!');
  }
};

parrot === pigeon; //false

//represents the same object
const myBird = parrot;
myBird === parrot; // true
myBird === pigeon; // false